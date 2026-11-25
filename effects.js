/* تأثيرات الموقع (GSAP): شريط تقدم، حركة العناوين، عناصر عايمة، مؤشر ماوس، لمعة زجاجية،
   كشف الصور، وتأثير الميل على أغلفة الأقسام. كلها بتتوقف لو الجهاز مظبوط على "تقليل الحركة". */
(function () {
    if (!window.gsap) return;
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var html = document.documentElement;
    var hasST = !!window.ScrollTrigger;
    if (hasST) gsap.registerPlugin(ScrollTrigger);
    var fine = window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches;
    var $ = function (id) { return document.getElementById(id); };

    /* ---------- نبدأ بعد ما المقدمة تخلص ---------- */
    var ready = false, queue = [];
    function whenReady(fn) { if (ready) fn(); else queue.push(fn); }
    function setReady() { if (ready) return; ready = true; queue.splice(0).forEach(function (f) { f(); }); }
    var intro = $('intro');
    if (intro && html.classList.contains('intro-on')) {
        new MutationObserver(function () { if (intro.classList.contains('leave')) setReady(); })
            .observe(intro, { attributes: true, attributeFilter: ['class'] });
        setTimeout(setReady, 20000);
    } else { setReady(); }

    /* ---------- 1) شريط تقدم القراءة ---------- */
    (function () {
        if (!hasST) return;
        var bar = document.createElement('div');
        bar.className = 'read-bar'; bar.setAttribute('aria-hidden', 'true');
        bar.innerHTML = '<i></i>';
        document.body.appendChild(bar);
        gsap.set(bar.firstChild, { scaleX: 0 });
        gsap.to(bar.firstChild, {
            scaleX: 1, ease: 'none',
            scrollTrigger: { trigger: html, start: 'top top', end: 'bottom bottom', scrub: 0.15 }
        });
    })();

    /* ---------- 2) حركة العناوين (كلمة كلمة، عشان الحروف العربي ما تتفكش) ---------- */
    var busy = false;
    function splitWords(el) {
        var txt = el.textContent.replace(/\s+/g, ' ').trim();
        if (!txt) return [];
        busy = true;
        el.setAttribute('aria-label', txt);
        el.textContent = '';
        var words = txt.split(' ').map(function (w, i, all) {
            var s = document.createElement('span');
            s.className = 'fx-w'; s.setAttribute('aria-hidden', 'true'); s.textContent = w;
            el.appendChild(s);
            if (i < all.length - 1) el.appendChild(document.createTextNode(' '));
            return s;
        });
        busy = false;
        return words;
    }
    function animateTitle(el, delay) {
        var words = splitWords(el);
        if (!words.length) return;
        gsap.from(words, {
            y: 34, opacity: 0, rotationX: -70, transformOrigin: '50% 100%', transformPerspective: 600,
            duration: 0.85, stagger: 0.09, delay: delay || 0, ease: 'back.out(1.6)',
            clearProps: 'transform,opacity'
        });
    }
    var hero = $('heroTitle');
    if (hero) {
        whenReady(function () { animateTitle(hero, 0.15); });
        /* لما اللغة تتغير app.js بيكتب النص من جديد، فنحرّكه تاني */
        new MutationObserver(function () {
            if (busy || !ready || hero.querySelector('.fx-w')) return;
            animateTitle(hero, 0);
        }).observe(hero, { childList: true });
    }
    if (hasST) {
        ['offersTitle', 'psTitle', 'menuTitle', 'contactTitle'].forEach(function (id) {
            var el = $(id);
            if (!el) return;
            whenReady(function () {
                ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true, onEnter: function () { animateTitle(el, 0.1); } });
            });
        });
    }

    /* ---------- 3) عناصر عايمة (الشارات اللي في الهيرو) ---------- */
    var floats = [];
    function floatChips() {
        floats.forEach(function (t) { t.kill(); });
        floats = [];
        var chips = document.querySelectorAll('#features .chip, #openBadge');
        Array.prototype.forEach.call(chips, function (c, i) {
            floats.push(gsap.to(c, {
                y: gsap.utils.random(-6, -3), rotation: gsap.utils.random(-1.6, 1.6),
                duration: gsap.utils.random(1.7, 2.7), ease: 'sine.inOut', yoyo: true, repeat: -1, delay: i * 0.18
            }));
        });
    }
    whenReady(function () {
        floatChips();
        var f = $('features');
        if (f) new MutationObserver(function () { floatChips(); }).observe(f, { childList: true });
    });

    /* ---------- 4) مؤشر ماوس (على اللاب بس) ---------- */
    if (fine) {
        var ring = document.createElement('div');
        ring.className = 'fx-cursor'; ring.setAttribute('aria-hidden', 'true');
        document.body.appendChild(ring);
        var xTo = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3' });
        var yTo = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3' });
        window.addEventListener('pointermove', function (e) {
            if (e.pointerType !== 'mouse') return;
            ring.classList.add('on'); xTo(e.clientX); yTo(e.clientY);
        }, { passive: true });
        html.addEventListener('mouseleave', function () { ring.classList.remove('on'); });
        document.addEventListener('pointerover', function (e) {
            ring.classList.toggle('hot', !!(e.target.closest && e.target.closest('a, button, .item:not(.sold), .cover, input, textarea, label')));
        });
        document.addEventListener('pointerdown', function () { ring.classList.add('press'); });
        document.addEventListener('pointerup', function () { ring.classList.remove('press'); });
    }

    /* ---------- 5) لمعة زجاجية + 7) ميل أغلفة الأقسام ---------- */
    (function () {
        var cur = null, raf = 0, px = 0, py = 0;
        function resetTilt(el) {
            if (!el || !el.__tilt) return;
            gsap.to(el, { rotationX: 0, rotationY: 0, duration: 0.7, ease: 'elastic.out(1, 0.55)', overwrite: 'auto',
                          onComplete: function () { el.__tilt = false; gsap.set(el, { clearProps: 'transform' }); } });
        }
        function frame() {
            raf = 0;
            if (!cur) return;
            var r = cur.getBoundingClientRect();
            cur.style.setProperty('--mx', (px - r.left) + 'px');
            cur.style.setProperty('--my', (py - r.top) + 'px');
            if (fine && cur.classList.contains('cover') && (cur.__tilt || !gsap.isTweening(cur))) {
                var nx = (px - r.left) / r.width - 0.5, ny = (py - r.top) / r.height - 0.5;
                cur.__tilt = true;
                gsap.to(cur, { rotationY: nx * 9, rotationX: -ny * 9, duration: 0.45, ease: 'power2.out', overwrite: 'auto' });
            }
        }
        function leave() {
            if (!cur) return;
            cur.classList.remove('sheen');
            resetTilt(cur);
            cur = null;
        }
        document.addEventListener('pointermove', function (e) {
            var t = e.target.closest ? e.target.closest('.item:not(.sold), .cover:not(.on-photo)') : null;
            if (t !== cur) { leave(); cur = t; if (cur) cur.classList.add('sheen'); }
            if (cur) { px = e.clientX; py = e.clientY; if (!raf) raf = requestAnimationFrame(frame); }
        }, { passive: true });
        document.addEventListener('pointerup', function (e) { if (e.pointerType !== 'mouse') leave(); });
        document.addEventListener('pointercancel', leave);
        document.addEventListener('mouseleave', leave);
    })();

    /* ---------- 6) كشف الصور (قناع بيتفتح لما الغلاف يظهر) ---------- */
    function revealImg(img) {
        if (img.__ir) return;
        img.__ir = true;
        var cover = img.closest('.cover');
        if (!cover || !hasST) return;
        var below = cover.getBoundingClientRect().top > window.innerHeight * 0.9;
        if (ready && !below) return;                      /* ظاهر قدام عينك: سيبه */
        gsap.set(img, { clipPath: 'inset(0 0 100% 0)' });
        var h3 = cover.querySelector('h3');
        if (h3) gsap.set(h3, { opacity: 0, y: 16 });
        whenReady(function () {
            ScrollTrigger.create({
                trigger: cover, start: 'top 92%', once: true,
                onEnter: function () {
                    gsap.to(img, { clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'power4.inOut', delay: 0.12, clearProps: 'clipPath' });
                    if (h3) gsap.to(h3, { opacity: 1, y: 0, duration: 0.6, delay: 0.7, ease: 'power2.out', clearProps: 'opacity,transform' });
                }
            });
        });
    }
    function scanImgs(node) {
        if (node.nodeType !== 1) return;
        if (node.matches('.cover img')) revealImg(node);
        Array.prototype.forEach.call(node.querySelectorAll('.cover img'), revealImg);
    }
    scanImgs(document.body);
    new MutationObserver(function (list) {
        list.forEach(function (m) { Array.prototype.forEach.call(m.addedNodes, scanImgs); });
    }).observe(document.body, { childList: true, subtree: true });
})();