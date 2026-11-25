/* أصوات الموقع (Web Audio، من غير ملفات صوت):
   - ضغطة "أضف" / "+" / "−"، ونغمة لما الطلب يتجهز
   - صوت المقدمة: العصير نازل في الكوباية، فقاقيع، تلج، وشاليمو
   الزبون يقدر يقفل الصوت من زرار 🔊 فوق (بيتحفظ على جهازه). */
(function () {
    var AC = window.AudioContext || window.webkitAudioContext;
    var ctx = null, master = null, introBus = null, muted = false;
    /* الصوت شغال دايماً (من غير زرار كتم) */

    /* ---------- أدوات بناء الصوت (بتشتغل على أي AudioContext) ---------- */
    function blip(c, dest, t, f0, f1, dur, type, vol) {
        var o = c.createOscillator(), g = c.createGain();
        o.type = type || 'sine';
        o.frequency.setValueAtTime(f0, t);
        o.frequency.exponentialRampToValueAtTime(f1, t + dur * 0.8);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(vol, t + 0.008);
        g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        o.connect(g); g.connect(dest);
        o.start(t); o.stop(t + dur + 0.03);
    }
    function noise(c, sec) {
        var b = c.createBuffer(1, Math.floor(c.sampleRate * sec), c.sampleRate), d = b.getChannelData(0);
        for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
        return b;
    }
    function addSound(c, dest, t) {
        blip(c, dest, t, 520, 820, 0.11, 'sine', 0.34);
        blip(c, dest, t + 0.065, 780, 1250, 0.15, 'sine', 0.28);
        blip(c, dest, t, 1800, 900, 0.03, 'triangle', 0.1);
    }
    function removeSound(c, dest, t) { blip(c, dest, t, 520, 280, 0.13, 'triangle', 0.3); }
    function chime(c, dest, t) {
        [523.25, 659.25, 783.99, 1046.5].forEach(function (f, i) { blip(c, dest, t + i * 0.09, f, f * 1.002, 0.4, 'sine', 0.24); });
    }
    function clink(c, dest, t) {
        blip(c, dest, t, 2600, 2580, 0.2, 'sine', 0.16);
        blip(c, dest, t, 3900, 3880, 0.14, 'sine', 0.1);
        var s = c.createBufferSource(); s.buffer = noise(c, 0.05);
        var hp = c.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 5000;
        var g = c.createGain(); g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);
        s.connect(hp); hp.connect(g); g.connect(dest); s.start(t); s.stop(t + 0.05);
    }

    /* مقدمة الكوباية: بتتظبط على نفس توقيت الـ Timeline، و off = الثانية اللي إحنا فيها */
    function introSound(c, dest, t0, off) {
        function T(x) { return t0 + (x - off); }
        /* العصير نازل: ضوضاء بتفلتر وبيعلى صوتها مع امتلاء الكوباية */
        var a = Math.max(0.55, off), end = 2.3;
        if (a < end) {
            var src = c.createBufferSource(); src.buffer = noise(c, 3); src.loop = true;
            var bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 1.2;
            var f = function (x) { return 700 * Math.pow(3200 / 700, Math.min(1, Math.max(0, (x - 0.55) / 1.75))); };
            bp.frequency.setValueAtTime(f(a), T(a));
            bp.frequency.exponentialRampToValueAtTime(3200, T(end));
            var g = c.createGain();
            g.gain.setValueAtTime(0.0001, T(a));
            g.gain.exponentialRampToValueAtTime(0.2, T(a) + 0.08);
            g.gain.setValueAtTime(0.2, T(end));
            g.gain.exponentialRampToValueAtTime(0.0001, T(end + 0.25));
            src.connect(bp); bp.connect(g); g.connect(dest);
            src.start(T(a)); src.stop(T(end + 0.3));
        }
        /* فقاقيع */
        for (var i = 0; i < 16; i++) {
            var tl = 0.95 + i * 0.085 + ((i * 37) % 10) / 250;
            if (tl >= off && tl < 2.35) {
                var f0 = 250 + ((i * 97) % 400);
                blip(c, dest, T(tl), f0, f0 * 2.2, 0.07, 'sine', 0.11 + ((i * 13) % 5) / 80);
            }
        }
        /* تلج بيقع */
        [2.6, 2.75, 2.9].forEach(function (x) { if (x >= off) clink(c, dest, T(x)); });
        /* شاليمو */
        if (2.95 > off) {
            var s2 = c.createBufferSource(); s2.buffer = noise(c, 0.6);
            var b2 = c.createBiquadFilter(); b2.type = 'bandpass'; b2.Q.value = 2;
            var t1 = T(Math.max(2.45, off));
            b2.frequency.setValueAtTime(3000, t1); b2.frequency.exponentialRampToValueAtTime(800, T(2.95));
            var g2 = c.createGain(); g2.gain.setValueAtTime(0.0001, t1);
            g2.gain.exponentialRampToValueAtTime(0.09, t1 + 0.12); g2.gain.exponentialRampToValueAtTime(0.0001, T(2.95));
            s2.connect(b2); b2.connect(g2); g2.connect(dest); s2.start(t1); s2.stop(T(2.97));
        }
        /* لمعة في الآخر */
        [1318.5, 1568, 2093].forEach(function (f, i) { if (3.0 + i * 0.07 >= off) blip(c, dest, T(3.0 + i * 0.07), f, f, 0.3, 'sine', 0.1); });
    }

    /* ---------- التشغيل الفعلي ---------- */
    function ensure() {
        if (!AC) return null;
        if (!ctx) {
            ctx = new AC();
            master = ctx.createGain(); master.gain.value = 0.85;
            var comp = ctx.createDynamicsCompressor();
            master.connect(comp); comp.connect(ctx.destination);
        }
        return ctx;
    }
    function play(kind) {
        if (muted) return;
        var c = ensure(); if (!c) return;
        if (c.state !== 'running') { try { c.resume(); } catch (e) {} }
        var t = c.currentTime + 0.01;
        if (kind === 'add') addSound(c, master, t);
        else if (kind === 'remove') removeSound(c, master, t);
        else if (kind === 'sent') chime(c, master, t);
    }
    function icons() {
        var b = document.getElementById('soundBtn');
        if (b) { b.textContent = muted ? '🔇' : '🔊'; b.setAttribute('aria-pressed', muted ? 'false' : 'true'); }
    }
    var API = {
        isMuted: function () { return muted; },
        setMuted: function (m) {
            muted = !!m;
            try { localStorage.setItem('nasa_sound', muted ? '0' : '1'); } catch (e) {}
            if (muted) API.stopIntro();
            icons();
        },
        toggle: function () {
            API.setMuted(!muted);
            if (!muted) { API.unlock().then(function () { play('add'); }); }
        },
        unlock: function () {
            var c = ensure(); if (!c) return Promise.resolve(false);
            try {                                              /* حيلة الآيفون: نشغّل صوت فاضي جوه اللمسة */
                var sb = c.createBufferSource(); sb.buffer = c.createBuffer(1, 1, 22050);
                sb.connect(c.destination); sb.start(0);
            } catch (e) {}
            var p = c.state === 'running' ? Promise.resolve() : c.resume();
            return Promise.resolve(p).then(function () { return c.state === 'running'; }, function () { return false; });
        },
        /* المتصفح غالباً بيمنع الصوت قبل أي لمسة: بنجرّب، ولو اترفض بنطلب من الزبون يضغط */
        tryAuto: function () {
            var c = ensure(); if (!c) return Promise.resolve(false);
            if (c.state === 'running') return Promise.resolve(true);
            var p; try { p = c.resume(); } catch (e) { return Promise.resolve(false); }
            return Promise.race([
                Promise.resolve(p).then(function () { return c.state === 'running'; }, function () { return false; }),
                new Promise(function (r) { setTimeout(function () { r(false); }, 120); })
            ]);
        },
        intro: function (off) {
            if (muted) return;
            var c = ensure(); if (!c || c.state !== 'running') return;
            API.stopIntro();
            introBus = c.createGain(); introBus.gain.value = 1; introBus.connect(master);
            introSound(c, introBus, c.currentTime + 0.02, off || 0);
        },
        stopIntro: function () {
            if (introBus && ctx) { introBus.gain.setTargetAtTime(0, ctx.currentTime, 0.05); introBus = null; }
        },
        play: play,
        /* للاختبار: بيرسم الصوت من غير سماعات */
        _render: function (kind, seconds) {
            var oc = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, Math.floor(44100 * seconds), 44100);
            if (kind === 'intro') introSound(oc, oc.destination, 0, 0);
            else if (kind === 'add') addSound(oc, oc.destination, 0);
            else if (kind === 'remove') removeSound(oc, oc.destination, 0);
            else if (kind === 'sent') chime(oc, oc.destination, 0);
            return oc.startRendering().then(function (buf) { return Array.prototype.slice.call(buf.getChannelData(0)); });
        }
    };
    window.NasaSound = API;

    /* ---------- ربطه بالصفحة ---------- */
    document.addEventListener('click', function (e) {
        var b = e.target.closest ? e.target.closest('.add, .sbtn, .repeat-btn, .repeat-in') : null;
        if (!b) return;
        if (b.classList.contains('sbtn')) play(b.textContent.trim() === '+' ? 'add' : 'remove');
        else play('add');
    });
    function wire() {
        var sb = document.getElementById('soundBtn');
        if (sb) sb.addEventListener('click', API.toggle);
        icons();
        var sent = document.getElementById('sentBox');
        if (sent) new MutationObserver(function () { if (!sent.hidden) play('sent'); }).observe(sent, { attributes: true, attributeFilter: ['hidden'] });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire); else wire();
})();