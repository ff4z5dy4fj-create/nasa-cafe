/* مقدمة الموقع: كوباية 3D بتتملي عصير، وبعدين اسم الكافيه.
   بتتحرك بـ GSAP (Timeline). بتظهر مرة واحدة في كل زيارة، والزبون يقدر يتخطاها بلمسة.
   لإعادة تشغيلها: اكتب #intro في آخر عنوان الموقع واعمل Refresh. */
(function () {
    var root = document.getElementById('intro');
    if (!root) return;
    var html = document.documentElement;
    if (!html.classList.contains('intro-on') || !window.gsap) {
        root.remove(); html.classList.remove('intro-on'); return;
    }
    try { sessionStorage.setItem('nasa_intro', '1'); } catch (e) {}

    var $ = function (id) { return document.getElementById(id); };
    var glass = $('iGlass'), liquid = $('iLiquid'), surface = $('iSurface'), stream = $('iStream'),
        nozzle = $('iNozzle'), splash = $('iSplash').children, bubbles = $('iBubbles').children,
        ice = $('iIce').children, straw = $('iStraw'), title = $('iTitle');
    var DURATION = 4.0, left = false;
    var ICE_X = [126, 170, 148];

    /* الحالة اللي GSAP بيحرّكها، و render بتترجمها لرسم */
    var S = { time: 0, op: 0, enter: 0, ry: -80, fill: 0, nz: 0, nzOut: 0, sIn: 0, sOut: 0,
              i0: 0, i1: 0, i2: 0, bump: 0, straw: 0, out: 0, title: 0 };

    function halfW(y) { return 85 - (y - 110) / 240 * 20; }

    function render() {
        var t = S.time;

        /* الكوباية 3D */
        var rx = 9 - Math.sin(t * 0.9) * 2, ry = S.ry + Math.sin(t * 1.3) * 8;
        glass.style.opacity = S.op;
        glass.style.transform = 'perspective(900px) translateY(' + ((1 - S.enter) * 170 - S.out * 30) +
            'px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) scale(' + (1 - S.out * 0.16) + ')';

        /* العصير */
        var levelY = 344 - S.fill * (344 - 138);
        var pouring = S.sIn > 0.99 && S.sOut < 0.01;
        var rxs = halfW(levelY) - 1;
        var show = S.fill > 0.004;
        liquid.style.display = surface.style.display = show ? '' : 'none';
        liquid.setAttribute('y', levelY);
        surface.setAttribute('cy', levelY);
        surface.setAttribute('rx', rxs);
        surface.setAttribute('ry', rxs * 0.16 + (pouring ? Math.sin(t * 20) * 1.3 : 0) + S.bump * 4 * Math.sin(t * 30));

        /* خيط العصير والبزبوز */
        var top = -30 + (levelY + 30) * S.sOut, bot = -30 + (levelY + 30) * S.sIn;
        var w = 11 + Math.sin(t * 22) * 1.3;
        var showStream = S.sIn > 0 && S.sOut < 1 && bot - top > 0.5;
        stream.style.display = showStream ? '' : 'none';
        if (showStream) {
            stream.setAttribute('x', 150 - w / 2); stream.setAttribute('y', top);
            stream.setAttribute('width', w); stream.setAttribute('height', bot - top);
        }
        nozzle.style.display = (S.nz > 0 && S.nzOut < 1) ? '' : 'none';
        nozzle.setAttribute('transform', 'translate(0,' + (-80 * (1 - S.nz) - 80 * S.nzOut) + ')');

        /* رشّات */
        for (var i = 0; i < splash.length; i++) {
            var ph = t * 9 + i * 1.7;
            splash[i].style.display = pouring ? '' : 'none';
            splash[i].setAttribute('cx', 150 + (i - 2) * 9 + Math.sin(ph) * 4);
            splash[i].setAttribute('cy', levelY - Math.abs(Math.sin(ph)) * (10 + i * 1.5));
        }

        /* فقاقيع */
        for (var b = 0; b < bubbles.length; b++) {
            var sp = 0.22 + (b % 4) * 0.07, p = (((t - 0.9) * sp + (b * 0.37)) % 1 + 1) % 1;
            var by = 342 - p * (342 - levelY), hw = halfW(by) - 8;
            bubbles[b].setAttribute('cx', 150 + ((((b * 53) % 100) - 50) / 50) * hw * 0.85 + Math.sin(t * 3 + b) * 3);
            bubbles[b].setAttribute('cy', by);
            bubbles[b].style.display = (S.fill > 0.08 && by > levelY + 4) ? '' : 'none';
        }

        /* التلج */
        for (var c = 0; c < ice.length; c++) {
            var k = S['i' + c];
            var rest = levelY + 4 + c * 5 + Math.sin(t * 3 + c) * 1.4;
            ice[c].style.display = k > 0 ? '' : 'none';
            ice[c].setAttribute('transform', 'translate(' + ICE_X[c] + ',' + (-50 + (rest + 50) * k) +
                ') rotate(' + (-18 + c * 24 + (1 - k) * 200) + ')');
        }

        /* الشاليمو والاسم */
        straw.style.display = S.straw > 0 ? '' : 'none';
        straw.setAttribute('transform', 'translate(198,-40) rotate(13) translate(0,' + (-(1 - S.straw) * 190) + ')');
        title.style.opacity = S.title;
        title.style.transform = 'translateY(' + ((1 - S.title) * 18) + 'px)';
    }

    function leave() {
        if (left) return;
        left = true;
        if (tl) tl.kill();
        if (window.NasaSound) NasaSound.stopIntro();
        ['pointerdown', 'touchend', 'click', 'keydown'].forEach(function (ev) { document.removeEventListener(ev, onGesture, true); });
        root.classList.add('leave');
        setTimeout(function () {
            root.remove();
            html.classList.remove('intro-on');
        }, 800);
    }

    /* الجدول الزمني */
    var tl = gsap.timeline({ paused: true, onUpdate: render, onComplete: leave });
    tl.to(S, { op: 1, duration: 0.3, ease: 'none' }, 0)
      .to(S, { enter: 1, duration: 1, ease: 'back.out(1.5)' }, 0)
      .to(S, { ry: 0, duration: 1.1, ease: 'power3.out' }, 0)
      .to(S, { nz: 1, duration: 0.35, ease: 'power2.out' }, 0.3)
      .to(S, { sIn: 1, duration: 0.16, ease: 'none' }, 0.55)
      .to(S, { fill: 1, duration: 1.5, ease: 'power2.inOut' }, 0.8)
      .to(S, { sOut: 1, duration: 0.3, ease: 'power2.out' }, 2.3)
      .to(S, { nzOut: 1, duration: 0.3, ease: 'power2.in' }, 2.3);
    for (var n = 0; n < 3; n++) {
        tl.to(S, { ['i' + n]: 1, duration: 0.45, ease: 'power2.in' }, 2.15 + 0.15 * n);
        tl.fromTo(S, { bump: 1 }, { bump: 0, duration: 0.3, ease: 'none', immediateRender: false }, 2.6 + 0.15 * n);
    }
    tl.to(S, { straw: 1, duration: 0.55, ease: 'power3.out' }, 2.45)
      .to(S, { out: 1, duration: 0.6, ease: 'power3.inOut' }, 2.8)
      .to(S, { title: 1, duration: 0.6, ease: 'power3.out' }, 2.9)
      .to(S, { time: DURATION, duration: DURATION, ease: 'none' }, 0);

    /* نسخة هادية لمن عنده "تقليل الحركة": الكوباية مليانة وساكنة، ثم تختفي بهدوء */
    if (html.classList.contains('intro-calm')) {
        tl.kill();
        S.op = 1; S.enter = 1; S.ry = 0; S.fill = 1; S.nz = 1; S.nzOut = 1; S.sIn = 1; S.sOut = 1;
        S.i0 = S.i1 = S.i2 = 1; S.bump = 0; S.straw = 1; S.out = 1; S.title = 1; S.time = 0;
        render();
        setTimeout(leave, 1800);
        root.addEventListener('click', leave);
        $('iSkip').addEventListener('click', leave);
        return;
    }

    /* أول لمسة في أي مكان في الشاشة بتبدأ المقدمة فوراً (من غير ما تستنى الصوت).
       الصوت بيشتغل أول ما المتصفح يسمح بيه، وبيتظبط على الثانية اللي إحنا فيها.
       لو الزبون ما لمسش خلال 10 ثواني بتبدأ المقدمة لوحدها من غير صوت. */
    var started = false, soundOn = false, ignoreClick = false, tap = $('iTap');
    function begin() {
        if (started || left) return;
        started = true;
        if (tap) tap.hidden = true;
        tl.play();
    }
    function startSound() {
        if (soundOn || left || !window.NasaSound) return;
        NasaSound.unlock().then(function (ok) {
            if (ok && !soundOn && !left) { soundOn = true; NasaSound.intro(tl.time()); }
        });
    }
    function onGesture(e) {
        if (left) return;
        if (e.target && e.target.closest && e.target.closest('#iSkip')) return;
        if (!started) {
            ignoreClick = true;                       /* اللمسة اللي بدأت المقدمة ما تتحسبش تخطي */
            setTimeout(function () { ignoreClick = false; }, 900);
            begin();
        }
        startSound();                                 /* كل لمسة بتحاول تفتح الصوت (آيفون بيحتاج touchend/click) */
    }
    ['pointerdown', 'touchend', 'click', 'keydown'].forEach(function (ev) {
        document.addEventListener(ev, onGesture, true);
    });

    if (window.NasaSound) {
        NasaSound.tryAuto().then(function (ok) {
            if (started || left) return;
            if (ok) { begin(); startSound(); }
            else {
                if (tap) tap.hidden = false;
                title.style.opacity = 1; title.style.transform = 'none';   /* اسم الكافيه وإحنا مستنيين اللمسة */
                setTimeout(function () { begin(); }, 10000);
            }
        });
    } else { begin(); }

    root.addEventListener('click', function () {
        if (ignoreClick) { ignoreClick = false; return; }
        if (started) leave();
    });
    $('iSkip').addEventListener('click', leave);
    window.__intro = { seek: function (t) { tl.pause(); tl.time(t); } };
    render();
})();