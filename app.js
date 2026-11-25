// ---------- أدوات صغيرة ----------
const $ = function (id) { return document.getElementById(id); };

function el(tag, cls) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    return e;
}

function pick(obj) {
    return (obj && (obj[lang] || obj.ar)) || "";
}

function intl(phone) {
    return "20" + String(phone).replace(/\D/g, "").replace(/^0/, "");
}

function toLatinDigits(s) {
    return String(s).replace(/[٠-٩]/g, function (d) { return "٠١٢٣٤٥٦٧٨٩".indexOf(d); });
}

// لينك الخريطة (ممكن تغيّره من menu.js بإضافة mapUrl جوه CONFIG)
const MAP_URL = "https://maps.app.goo.gl/NyfqEPd6z9bjnXbb6?g_st=ic";

// ---------- النصوص ----------
const T = {
    ar: {
        dir: "rtl",
        brandName: "ناسا كافيه",
        heroTitle: "ناسا كافيه: لعب وقعدة تستاهل",
        heroText: "مكان حلو لعشاق البلايستيشن والقعدة الحلوة. العب مع صحابك، واتفرج على الماتشات، واستمتع بمشروباتنا وحلوياتنا.",
        features: ["🎮 بلايستيشن", "🛋️ قعدة مريحة", "⚽ شاشة للماتشات", "♟️ دومينو وشطرنج", "☕ مشروبات وحلويات", "🚚 توصيل متاح"],
        menuBtn: "شوف المنيو",
        orderBtn: "اطلب دليفري",
        offersTitle: "🎁 العروض",
        psTitle: "🎮 أسعار البلايستيشن",
        menuTitle: "المنيو",
        contactTitle: "تواصل معنا",
        location: "المكان",
        hours: "المواعيد",
        phones: "التليفون",
        soldOut: "خلصان",
        add: "أضف",
        currency: "جنيه",
        loading: "جاري تحميل المنيو...",
        cartTitle: "سلة الطلب",
        empty: "السلة فاضية",
        delivery: "توصيل",
        pickup: "استلام من المكان",
        subtotal: "المجموع",
        deliveryFee: "التوصيل",
        total: "الإجمالي",
        lName: "الاسم",
        lPhone: "رقم التليفون",
        lAddress: "العنوان",
        lNotes: "ملاحظات (اختياري)",
        send: "اطلب على واتساب",
        hint: "هيفتح واتساب برسالة جاهزة. اضغط إرسال في واتساب علشان الطلب يوصل لينا.",
        needItems: "السلة فاضية، اختار أصناف الأول.",
        needName: "اكتب اسمك.",
        needPhone: "اكتب رقم تليفون صحيح.",
        needAddress: "اكتب العنوان.",
        call: "اتصل",
        credit: "تصميم وتطوير: ",
        devText: "تحب موقع زي ده لمشروعك؟ كلمني 👇",
        openNow: "🟢 مفتوح دلوقتي",
        until: "لحد",
        closedNow: "🔴 مقفول دلوقتي",
        opensAt: "بنفتح",
        tagNew: "جديد ✨",
        tagHot: "🔥 الأكثر طلباً",
        dineIn: "☕ في الكافيه بس",
        feeVaries: "هنبلغك بالسعر",
        totalNoFee: "الإجمالي (من غير التوصيل)",
        lZone: "منطقة التوصيل",
        pickZone: "اختار منطقتك",
        otherZone: "منطقة تانية (هنبلغك بالسعر)",
        pickZoneShort: "اختار المنطقة",
        needZone: "اختار منطقة التوصيل.",
        repeat: "🔁 كرر طلبي الأخير",
        repeatMissing: "الأصناف دي مش متاحة دلوقتي واتشالت من السلة:",
        repeatNone: "أصناف طلبك الأخير مش متاحة دلوقتي.",
        lOtherZone: "اكتب اسم منطقتك",
        needOtherZone: "اكتب اسم منطقتك.",
        mapBtn: "📍 افتح الخريطة",
        closedWarn: "🔴 الكافيه مقفول دلوقتي وبنفتح {time}. تقدر تبعت طلبك، وهنرد عليك أول ما نفتح.",
        closedWarnNoTime: "🔴 الكافيه مقفول دلوقتي. تقدر تبعت طلبك، وهنرد عليك أول ما نفتح.",
        sentTitle: "تم تجهيز طلبك ✅",
        sentText: "اضغط إرسال في واتساب علشان الطلب يوصل لينا. لو واتساب ما فتحش أو ما بعتش الرسالة، ارجع لطلبك وجرّب تاني.",
        sentClosed: "الكافيه مقفول دلوقتي، هنرد عليك أول ما نفتح.",
        newOrder: "طلب جديد",
        backOrder: "ارجع لطلبي"
    },
    en: {
        dir: "ltr",
        brandName: "NASA Cafe",
        heroTitle: "NASA Cafe: Play, Relax, Enjoy",
        heroText: "A great spot for PlayStation lovers and relaxed hangouts. Play with your friends, watch the matches, and enjoy our drinks and desserts.",
        features: ["🎮 PlayStation", "🛋️ Comfy seating", "⚽ Match screen", "♟️ Dominoes & chess", "☕ Drinks & desserts", "🚚 Delivery available"],
        menuBtn: "See the menu",
        orderBtn: "Order delivery",
        offersTitle: "🎁 Offers",
        psTitle: "🎮 PlayStation Prices",
        menuTitle: "Menu",
        contactTitle: "Contact Us",
        location: "Location",
        hours: "Hours",
        phones: "Phone",
        soldOut: "Sold out",
        add: "Add",
        currency: "EGP",
        loading: "Loading the menu...",
        cartTitle: "Your Order",
        empty: "Your cart is empty",
        delivery: "Delivery",
        pickup: "Pick up",
        subtotal: "Subtotal",
        deliveryFee: "Delivery",
        total: "Total",
        lName: "Name",
        lPhone: "Phone number",
        lAddress: "Address",
        lNotes: "Notes (optional)",
        send: "Order on WhatsApp",
        hint: "WhatsApp will open with your order ready. Press send in WhatsApp to place it.",
        needItems: "Your cart is empty. Pick some items first.",
        needName: "Please enter your name.",
        needPhone: "Please enter a valid phone number.",
        needAddress: "Please enter your address.",
        call: "Call",
        credit: "Website by ",
        devText: "Want a website like this? Contact me 👇",
        openNow: "🟢 Open now",
        until: "until",
        closedNow: "🔴 Closed now",
        opensAt: "opens at",
        tagNew: "New ✨",
        tagHot: "🔥 Top pick",
        dineIn: "☕ Dine-in only",
        feeVaries: "We'll tell you the price",
        totalNoFee: "Total (excl. delivery)",
        lZone: "Delivery area",
        pickZone: "Choose your area",
        otherZone: "Another area (we'll tell you the price)",
        pickZoneShort: "Choose an area",
        needZone: "Please choose your delivery area.",
        repeat: "🔁 Repeat my last order",
        repeatMissing: "These items are unavailable now and were left out:",
        repeatNone: "The items from your last order are not available right now.",
        lOtherZone: "Write your area name",
        needOtherZone: "Please write your area name.",
        mapBtn: "📍 Open in Maps",
        closedWarn: "🔴 We're closed right now and open at {time}. You can still send your order and we'll reply once we open.",
        closedWarnNoTime: "🔴 We're closed right now. You can still send your order and we'll reply once we open.",
        sentTitle: "Your order is ready ✅",
        sentText: "Press send in WhatsApp so your order reaches us. If WhatsApp didn't open or you didn't send the message, go back to your order and try again.",
        sentClosed: "We're closed right now, we'll reply once we open.",
        newOrder: "New order",
        backOrder: "Back to my order"
    }
};

// ---------- الحالة ----------
let lang = "ar";
let menu = fallbackMenu;
let offers = fallbackOffers;
let loading = false;
let lookup = {};
let cart = {};
let zone = "";           // "" (لسه ما اختارش) | رقم المنطقة | "other"
const controls = {};

// ---------- مناطق التوصيل وأسعارها ----------
// ممكن تغيّرها من menu.js جوه CONFIG:
//   deliveryZones: [ { ar: "بلشاي", en: "Belshay", fee: 15 }, { ar: "كفر الزيات", en: "Kafr El-Zayat", fee: 40 } ]
//   deliveryOtherZone: false   (لو عايز تشيل اختيار "منطقة تانية")
const DEFAULT_ZONES = [
    { ar: "بلشاي", en: "Belshay", fee: 15 },
    { ar: "كفر الزيات", en: "Kafr El-Zayat", fee: 40 },
    { ar: "كفر القصار", en: "Kafr El-Qasar", fee: 25 },
    { ar: "دقرن", en: "Daqran", fee: 40 },
    { ar: "قسطا", en: "Qasta", fee: 40 },
    { ar: "الدلجمون", en: "El-Delgamoun", fee: 60 }
];

function zonesList() {
    return Array.isArray(CONFIG.deliveryZones) ? CONFIG.deliveryZones : DEFAULT_ZONES;
}

function currentZone() {
    if (zone === "other") return { ar: "منطقة تانية", en: "Another area", fee: null };
    return zonesList()[zone] || null;
}

function renderZoneSelect() {
    const t = T[lang];
    const sel = $("fZone");
    sel.innerHTML = "";
    const first = document.createElement("option");
    first.value = "";
    first.textContent = t.pickZone;
    sel.appendChild(first);
    zonesList().forEach(function (z, i) {
        const o = document.createElement("option");
        o.value = String(i);
        o.textContent = pick(z) + " — " + z.fee + " " + t.currency;
        sel.appendChild(o);
    });
    if (CONFIG.deliveryOtherZone !== false) {
        const o = document.createElement("option");
        o.value = "other";
        o.textContent = t.otherZone;
        sel.appendChild(o);
    }
    sel.value = currentZone() ? String(zone) : "";
    if (sel.value !== String(zone)) zone = "";
}

function keyOf(cat, item) {
    return cat.ar + "|" + item.ar;
}

// ---------- السلة: حفظ وتحميل ----------
function saveCart() {
    try { localStorage.setItem("nasa_cart", JSON.stringify(cart)); } catch (e) {}
}

function loadCart() {
    try { cart = JSON.parse(localStorage.getItem("nasa_cart")) || {}; } catch (e) { cart = {}; }
}

// ---------- بيانات الزبون: حفظ وتحميل (على جهازه بس) ----------
function saveProfile() {
    try {
        localStorage.setItem("nasa_profile", JSON.stringify({
            name: $("fName").value,
            phone: $("fPhone").value,
            address: $("fAddress").value,
            zone: zone,
            otherZone: $("fOtherZone").value,
            zoneName: zone === "other" ? "other" : (currentZone() ? currentZone().ar : "")
        }));
    } catch (e) {}
}

function loadProfile() {
    try {
        const p = JSON.parse(localStorage.getItem("nasa_profile")) || {};
        $("fName").value = p.name || "";
        $("fPhone").value = p.phone || "";
        $("fAddress").value = p.address || "";
        $("fOtherZone").value = p.otherZone || "";
        if (p.zoneName === "other") zone = "other";
        else if (p.zoneName) {
            const i = zonesList().map(function (z) { return z.ar; }).indexOf(p.zoneName);
            zone = i > -1 ? String(i) : "";
        } else zone = p.zone === undefined ? "" : String(p.zone);
    } catch (e) {}
}

// ---------- إعدادات من الجدول (تاب "الإعدادات") ----------
// في menu.js ضيف:  sheetSettingsUrl: "لينك CSV بتاع التاب"
// أعمدة التاب: type, name_ar, name_en, value
//   zone       | اسم المنطقة | اسمها بالإنجليزي | السعر
//   other_zone |             |                  | نعم / لا     (اختيار "منطقة تانية")
//   status     |             |                  | مفتوح / مقفول   (إنت اللي بتفتح وتقفل بإيدك. لو فاضية أو أي كلمة تانية الشارة بتختفي)
//   hours_text | المواعيد بالعربي | بالإنجليزي |              (السطر المكتوب في تواصل معنا)
//   dinein     | اسم القسم اللي "في الكافيه بس" |  |
function parseOpen(val) {
    const v = toLatinDigits(val).replace(/\s/g, "");
    if (!v) return undefined;
    if (["لا", "no", "-", "0"].indexOf(v.toLowerCase()) > -1) return null;
    if (["مفتوح", "open"].indexOf(v.toLowerCase()) > -1) return { force: "open" };
    if (["مقفول", "مغلق", "closed", "close"].indexOf(v.toLowerCase()) > -1) return { force: "closed" };
    const m = v.match(/^(\d{1,2}):(\d{2})[-–—](\d{1,2}):(\d{2})$/);
    if (!m) return undefined;
    const p = function (h, mm) { return (h.length < 2 ? "0" : "") + h + ":" + mm; };
    return { from: p(m[1], m[2]), to: p(m[3], m[4]) };
}

function settingsFromRows(rows) {
    const s = { zones: [], dinein: [], otherZone: null, open: undefined, hoursText: null, status: undefined, n: 0 };
    rows.slice(1).forEach(function (r) {
        const v = [0, 1, 2, 3].map(function (i) { return (r[i] || "").trim(); });
        const type = v[0].toLowerCase(), ar = v[1], en = v[2], val = v[3];
        if (type === "zone") {
            const fee = toPrice(val);
            if (ar && fee !== null) { s.zones.push({ ar: ar, en: en || ar, fee: fee }); s.n++; }
        } else if (type === "dinein") {
            if (ar) { s.dinein.push(ar); s.n++; }
        } else if (type === "other_zone") {
            s.otherZone = isAvailable(val); s.n++;
        } else if (type === "open") {
            const o = parseOpen(val);
            if (o !== undefined) { s.open = o; s.n++; }
        } else if (type === "status") {
            const x = toLatinDigits(val).replace(/\s/g, "").toLowerCase();
            if (["مفتوح", "open"].indexOf(x) > -1) s.status = "open";
            else if (["مقفول", "مغلق", "closed", "close"].indexOf(x) > -1) s.status = "closed";
            else s.status = "auto";
            s.n++;
        } else if (type === "hours_text") {
            if (ar) { s.hoursText = { ar: ar, en: en || ar }; s.n++; }
        }
    });
    return s;
}

function zoneKey() {
    if (zone === "other") return "other";
    const z = currentZone();
    return z ? z.ar : "";
}

function restoreZoneKey(key) {
    if (key === "other") { zone = CONFIG.deliveryOtherZone !== false ? "other" : ""; return; }
    const i = key ? zonesList().map(function (z) { return z.ar; }).indexOf(key) : -1;
    zone = i > -1 ? String(i) : "";
}

function applySettings(s) {
    if (!s || !s.n) return false;
    const keep = zoneKey();
    if (s.zones.length) CONFIG.deliveryZones = s.zones;
    CONFIG.dineInCategories = s.dinein;                 // الجدول هو المرجع للأقسام اللي "في الكافيه بس"
    if (s.otherZone !== null) CONFIG.deliveryOtherZone = s.otherZone;
    if (s.open !== undefined) CONFIG.openHours = s.open;
    if (s.status !== undefined) CONFIG.openStatus = s.status;
    if (s.hoursText) CONFIG.hours = s.hoursText;
    restoreZoneKey(keep);
    return true;
}

function loadCachedSettings() {
    try { applySettings(JSON.parse(localStorage.getItem("nasa_settings"))); } catch (e) {}
}

// ---------- كرر طلبي الأخير ----------
function lastOrder() {
    try {
        const o = JSON.parse(localStorage.getItem("nasa_last_order"));
        return o && Array.isArray(o.items) && o.items.length ? o : null;
    } catch (e) { return null; }
}

function saveLastOrder() {
    try {
        const items = Object.keys(cart).map(function (k) { return { k: k, q: cart[k] }; });
        if (items.length) localStorage.setItem("nasa_last_order", JSON.stringify({ mode: getMode(), items: items }));
    } catch (e) {}
}

function repeatLabel(o) {
    let n = 0;
    o.items.forEach(function (i) { n += i.q; });
    return T[lang].repeat + " (" + n + ")";
}

function renderRepeat() {
    const b = $("repeatBtn");
    if (!b) return;
    const o = lastOrder();
    b.hidden = !(o && !loading && Object.keys(cart).length === 0);
    if (!b.hidden) b.textContent = repeatLabel(o);
}

function repeatLast() {
    const o = lastOrder();
    if (!o || loading) return;
    const added = {}, missing = [];
    o.items.forEach(function (i) {
        const it = lookup[i.k];
        if (it && it.available && !it.dineIn && it.price !== null && i.q > 0) added[i.k] = i.q;
        else missing.push(i.k.split("|")[1] || i.k);
    });
    if (!Object.keys(added).length) { alert(T[lang].repeatNone); return; }
    cart = added;
    saveCart();
    const r = document.querySelector('input[name="mode"][value="' + (o.mode === "pickup" ? "pickup" : "delivery") + '"]');
    if (r) r.checked = true;
    renderAll();
    openCart();
    if (missing.length) alert(T[lang].repeatMissing + "\n" + missing.join("، "));
}

function rebuildLookup() {
    lookup = {};
    menu.forEach(function (cat) {
        cat.items.forEach(function (item) {
            item.dineIn = isDineIn(cat, item);
            lookup[keyOf(cat, item)] = item;
        });
    });
    if (!loading) {
        Object.keys(cart).forEach(function (k) {
            const it = lookup[k];
            if (!it || !it.available || it.dineIn || it.price === null || !(cart[k] > 0)) delete cart[k];
        });
        saveCart();
    }
}

// ---------- قراءة جدول Google ----------
function parseCSV(text) {
    const rows = [];
    let row = [];
    let cell = "";
    let inQuotes = false;
    for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (inQuotes) {
            if (ch === '"' && text[i + 1] === '"') { cell += '"'; i++; }
            else if (ch === '"') inQuotes = false;
            else cell += ch;
        } else if (ch === '"') {
            inQuotes = true;
        } else if (ch === ",") {
            row.push(cell); cell = "";
        } else if (ch === "\n" || ch === "\r") {
            if (ch === "\r" && text[i + 1] === "\n") i++;
            row.push(cell); cell = "";
            rows.push(row); row = [];
        } else {
            cell += ch;
        }
    }
    if (cell !== "" || row.length) { row.push(cell); rows.push(row); }
    return rows;
}

async function loadSheet(url) {
    const sep = url.indexOf("?") === -1 ? "?" : "&";
    const res = await fetch(url + sep + "t=" + Date.now());
    if (!res.ok) throw new Error("sheet error " + res.status);
    return parseCSV(await res.text());
}

function toPrice(v) {
    const n = parseFloat(toLatinDigits(v || "").replace(/[^\d.]/g, ""));
    return isNaN(n) ? null : n;
}

function isAvailable(v) {
    const s = String(v || "").trim().toLowerCase();
    return ["لا", "no", "n", "false", "0", "خلصان", "خلص", "مش متاح"].indexOf(s) === -1;
}

function menuFromRows(rows) {
    const cats = [];
    let cur = null;
    rows.slice(1).forEach(function (r) {
        // العمود الثامن (tag) اختياري: جديد / الأكثر طلباً / أي كلمة تانية
        const v = [0, 1, 2, 3, 4, 5, 6, 7].map(function (i) { return (r[i] || "").trim(); });
        const catAr = v[0], catEn = v[1], image = v[2], nameAr = v[3], nameEn = v[4], price = v[5], avail = v[6], tag = v[7];
        if (!nameAr) return;
        if (catAr && (!cur || cur.ar !== catAr)) {
            cur = { ar: catAr, en: catEn || catAr, image: image, items: [] };
            cats.push(cur);
        } else if (cur && image && !cur.image) {
            cur.image = image;
        }
        if (!cur) return;
        cur.items.push({ ar: nameAr, en: nameEn || nameAr, price: toPrice(price), available: isAvailable(avail), tag: tag });
    });
    return cats;
}

function offersFromRows(rows) {
    return rows.slice(1)
        .map(function (r) { return [0, 1, 2, 3, 4].map(function (i) { return (r[i] || "").trim(); }); })
        .filter(function (r) { return r[0] && isAvailable(r[4]); })
        .map(function (r) {
            return {
                title: { ar: r[0], en: r[1] || r[0] },
                text: { ar: r[2], en: r[3] || r[2] }
            };
        });
}

// ---------- علامات الأصناف (جديد / الأكثر طلباً) ----------
function normTag(s) {
    return String(s || "").trim().toLowerCase()
        .replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/[\u064B-\u0652]/g, "");
}

const TAGS_NEW = ["جديد", "جديده", "new"];
const TAGS_HOT = ["الاكثر طلبا", "اكثر طلبا", "مميز", "top", "popular", "hot", "hit", "best", "best seller"];

// أصناف "في الكافيه بس": بتظهر في المنيو من غير زرار أضف.
// الأقسام دي بتتحدد هنا (أو من menu.js: dineInCategories: ["مشروبات ساخنة", "قهوة"]).
// ولأي صنف تقدر تتحكم من الجدول في عمود tag: اكتب "في الكافيه بس" لصنف، أو "دليفري" عشان صنف جوه القسم ده يتطلب عادي.
const DINE_IN_CATEGORIES = ["مشروبات ساخنة", "قهوة"];
const TAGS_DINE = ["في الكافيه بس", "في الكافيه فقط", "dine in", "dine-in", "dinein", "cafe only"];
const TAGS_DELIVERY = ["للدليفري", "دليفري", "delivery"];

function isDineIn(cat, item) {
    const n = normTag(item.tag);
    if (TAGS_DELIVERY.indexOf(n) > -1) return false;
    if (TAGS_DINE.indexOf(n) > -1) return true;
    const list = Array.isArray(CONFIG.dineInCategories) ? CONFIG.dineInCategories : DINE_IN_CATEGORIES;
    return list.map(normTag).indexOf(normTag(cat.ar)) > -1;
}

function tagOf(raw) {
    const n = normTag(raw);
    if (!n) return null;
    if (TAGS_DINE.indexOf(n) > -1) return { kind: "dine" };
    if (TAGS_NEW.indexOf(n) > -1) return { kind: "new" };
    if (TAGS_HOT.indexOf(n) > -1) return { kind: "hot" };
    return { kind: "custom", text: String(raw).trim() };
}

// ---------- مفتوح / مقفول ----------
// الافتراضي 12 الضهر لـ 3 الفجر. لو المواعيد اتغيرت ضيف في menu.js جوه CONFIG:
//   openHours: { from: "12:00", to: "03:00" }      (أو openHours: null عشان تشيل الشارة)
function parseHM(s) {
    const m = String(s).match(/^(\d{1,2}):(\d{2})$/);
    return m ? (+m[1]) * 60 + (+m[2]) : null;
}

function nowMinutes() {
    const tz = CONFIG.timeZone || "Africa/Cairo";
    try {
        const parts = new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
        let h = 0, m = 0;
        parts.forEach(function (p) {
            if (p.type === "hour") h = +p.value;
            if (p.type === "minute") m = +p.value;
        });
        return h * 60 + m;
    } catch (e) {
        const d = new Date();
        return d.getHours() * 60 + d.getMinutes();
    }
}

function fmtTime(mins) {
    const h24 = Math.floor(mins / 60) % 24;
    const m = mins % 60;
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
    const mm = m ? ":" + (m < 10 ? "0" : "") + m : "";
    const suffix = lang === "ar" ? (h24 < 12 ? "ص" : "م") : (h24 < 12 ? "AM" : "PM");
    return h12 + mm + " " + suffix;
}

function openState() {
    // الفتح والقفل بإيدك من تاب الإعدادات (صف status): "مفتوح" أو "مقفول". مفيش مواعيد أوتوماتيك.
    if (CONFIG.openStatus === "open" || CONFIG.openStatus === "closed") return { open: CONFIG.openStatus === "open", forced: true };
    return null;
}

function renderOpen() {
    const b = $("openBadge");
    if (!b) return;
    const s = openState();
    if (!s) { b.hidden = true; return; }
    const t = T[lang];
    b.hidden = false;
    b.className = "open-badge " + (s.open ? "is-open" : "is-closed");
    if (s.forced) b.textContent = s.open ? t.openNow : t.closedNow;
    else b.textContent = s.open
        ? t.openNow + " · " + t.until + " " + fmtTime(s.to)
        : t.closedNow + " · " + t.opensAt + " " + fmtTime(s.from);
}

// ---------- العرض ----------
function renderOffers() {
    const box = $("offers");
    box.innerHTML = "";
    $("offersBox").hidden = offers.length === 0;
    offers.forEach(function (o) {
        const d = el("div", "offer");
        const s = el("strong");
        s.textContent = pick(o.title);
        const p = el("span");
        p.textContent = pick(o.text);
        d.append(s, p);
        box.appendChild(d);
    });
}

function renderPS() {
    const t = T[lang];
    const list = $("ps");
    list.innerHTML = "";
    CONFIG.ps.forEach(function (p) {
        const li = el("li");
        li.textContent = pick(p) + (p.price === null ? "" : ": " + p.price + " " + t.currency);
        list.appendChild(li);
    });
}

function renderControl(key) {
    const ctl = controls[key];
    if (!ctl) return;
    const t = T[lang];
    const q = cart[key] || 0;
    ctl.innerHTML = "";
    if (q === 0) {
        const b = el("button", "add");
        b.textContent = "+ " + t.add;
        b.onclick = function () { change(key, 1); };
        ctl.appendChild(b);
    } else {
        const st = el("span", "stepper");
        const m = el("button", "sbtn");
        m.textContent = "−";
        m.onclick = function () { change(key, -1); };
        const n = el("span", "qty");
        n.textContent = q;
        const p = el("button", "sbtn");
        p.textContent = "+";
        p.onclick = function () { change(key, 1); };
        st.append(m, n, p);
        ctl.appendChild(st);
    }
}

function renderSkeleton(box) {
    const t = T[lang];
    const sr = el("span", "sr-only");
    sr.textContent = t.loading;
    box.appendChild(sr);
    for (let g = 0; g < 2; g++) {
        const grid = el("div", "skel-grid");
        grid.appendChild(el("div", "skel skel-cover"));
        for (let i = 0; i < 4; i++) grid.appendChild(el("div", "skel skel-item"));
        box.appendChild(grid);
    }
}

function renderMenu() {
    const t = T[lang];
    const box = $("menuBox");
    box.innerHTML = "";
    Object.keys(controls).forEach(function (k) { delete controls[k]; });

    if (loading) {
        box.setAttribute("aria-busy", "true");
        renderSkeleton(box);
        return;
    }
    box.removeAttribute("aria-busy");

    menu.forEach(function (cat) {
        const sec = el("div", "cat");
        const cover = el("div", "cover");

        if (cat.image) {
            // الصورة بتبقى خلفية القسم كله (بالطول)، والأصناف مكتوبة فوقها
            const bg = el("div", "cat-bg");
            const img = document.createElement("img");
            img.loading = "lazy";
            img.alt = "";
            img.src = "images/" + cat.image;
            img.onerror = function () {
                bg.remove();
                sec.classList.remove("has-bg");
                cover.classList.remove("on-photo");
            };
            bg.appendChild(img);
            sec.classList.add("has-bg");
            sec.appendChild(bg);
            cover.classList.add("noimg", "on-photo");
        } else {
            cover.classList.add("noimg");
        }

        const h = el("h3");
        h.textContent = pick(cat);
        cover.appendChild(h);
        sec.appendChild(cover);

        cat.items.forEach(function (item) {
            const key = keyOf(cat, item);
            const row = el("div", "item" + (item.available ? "" : " sold"));

            const name = el("span", "name");
            name.textContent = pick(item);

            const tg = item.available ? tagOf(item.tag) : null;
            const tagShown = tg && tg.kind !== "dine";
            let badge = null;
            if (tagShown) {
                badge = el("small", "tag tag-" + tg.kind);
                badge.textContent = tg.kind === "new" ? t.tagNew : (tg.kind === "hot" ? t.tagHot : tg.text);
            }

            const price = el("span", "price");
            price.textContent = item.price === null ? "" : item.price + " " + t.currency;

            const ctl = el("span", "ctl");
            row.append(name, price);
            if (badge) row.appendChild(badge);
            row.appendChild(ctl);

            if (!item.available) {
                const s = el("span", "status");
                s.textContent = t.soldOut;
                ctl.appendChild(s);
            } else if (item.dineIn) {
                const s = el("span", "status dinein");
                s.textContent = t.dineIn;
                ctl.appendChild(s);
            } else if (item.price !== null) {
                controls[key] = ctl;
                renderControl(key);
            }
            sec.appendChild(row);
        });

        box.appendChild(sec);
    });
}

function renderStatic() {
    const t = T[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;

    $("brandName").textContent = t.brandName;
    $("langBtn").textContent = lang === "ar" ? "English" : "العربية";
    $("heroTitle").textContent = t.heroTitle;
    $("heroText").textContent = t.heroText;
    $("menuBtn").textContent = t.menuBtn;
    $("orderBtn").textContent = t.orderBtn;
    $("offersTitle").textContent = t.offersTitle;
    $("psTitle").textContent = t.psTitle;
    $("menuTitle").textContent = t.menuTitle;
    $("contactTitle").textContent = t.contactTitle;
    $("callLink").title = t.call;

    const feats = $("features");
    feats.innerHTML = "";
    t.features.forEach(function (f) {
        const s = el("span", "chip");
        s.textContent = f.replace("{fee}", CONFIG.deliveryFee);
        feats.appendChild(s);
    });

    $("location").textContent = t.location + ": " + pick(CONFIG.location);
    $("hours").textContent = t.hours + ": " + pick(CONFIG.hours);

    const phones = $("phones");
    phones.innerHTML = "";
    phones.append(t.phones + ": ");
    CONFIG.phones.forEach(function (p, i) {
        if (i > 0) phones.append(" - ");
        const a = document.createElement("a");
        a.href = "tel:" + p;
        a.textContent = p;
        phones.appendChild(a);
    });

    $("cartTitle").textContent = t.cartTitle;
    $("modeDelivery").textContent = t.delivery;
    $("modePickup").textContent = t.pickup;
    $("lName").textContent = t.lName;
    $("lPhone").textContent = t.lPhone;
    $("lAddress").textContent = t.lAddress;
    $("lZone").textContent = t.lZone;
    $("lOtherZone").textContent = t.lOtherZone;
    renderZoneSelect();
    $("lNotes").textContent = t.lNotes;
    $("sendBtn").textContent = t.send;
    $("cartHint").textContent = t.hint;

    $("credit").textContent = t.credit + CONFIG.dev.name;
    $("devText").textContent = t.devText;

    $("mapLink").textContent = t.mapBtn;
    $("sentTitle").textContent = t.sentTitle;
    $("newOrderBtn").textContent = t.newOrder;
    $("backOrderBtn").textContent = t.backOrder;
    if (!$("sentBox").hidden) renderSent();

    renderOpen();
}

function renderAll() {
    renderStatic();
    renderOffers();
    renderPS();
    renderMenu();
    updateCartUI();
}

// ---------- السلة ----------
function getMode() {
    return document.querySelector('input[name="mode"]:checked').value;
}

function computeTotals() {
    let subtotal = 0;
    let count = 0;
    Object.keys(cart).forEach(function (k) {
        const item = lookup[k];
        if (!item) return;
        count += cart[k];
        subtotal += cart[k] * item.price;
    });
    const delivery = getMode() === "delivery" && count > 0;
    const z = delivery ? currentZone() : null;
    const needZone = delivery && !z;
    const varies = !!z && z.fee === null;
    const fee = z && z.fee !== null ? Number(z.fee) : 0;
    return { subtotal: subtotal, fee: fee, total: subtotal + fee, count: count, varies: varies, needZone: needZone, zone: z };
}

function change(key, d) {
    const q = Math.max(0, (cart[key] || 0) + d);
    if (q === 0) delete cart[key];
    else cart[key] = q;
    saveCart();
    renderControl(key);
    updateCartUI();
}

function renderCart() {
    const t = T[lang];
    const list = $("cartItems");
    list.innerHTML = "";

    Object.keys(cart).forEach(function (k) {
        const item = lookup[k];
        if (!item) return;
        const q = cart[k];

        const row = el("div", "crow");
        const n = el("span", "cname");
        n.textContent = pick(item);

        const st = el("span", "stepper");
        const m = el("button", "sbtn");
        m.textContent = "−";
        m.onclick = function () { change(k, -1); };
        const qq = el("span", "qty");
        qq.textContent = q;
        const p = el("button", "sbtn");
        p.textContent = "+";
        p.onclick = function () { change(k, 1); };
        st.append(m, qq, p);

        const lt = el("span", "cline");
        lt.textContent = q * item.price + " " + t.currency;

        row.append(n, st, lt);
        list.appendChild(row);
    });

    const c = computeTotals();
    if (!c.count) {
        list.textContent = t.empty;
        const lo = lastOrder();
        if (lo && !loading) {
            const rb = el("button", "btn wide repeat-in");
            rb.type = "button";
            rb.textContent = repeatLabel(lo);
            rb.onclick = repeatLast;
            list.appendChild(rb);
        }
    }

    $("addrWrap").hidden = getMode() !== "delivery";
    $("otherWrap").hidden = zone !== "other";

    const st0 = openState();
    const note = $("closedNote");
    if (st0 && !st0.open) {
        note.hidden = false;
        note.textContent = st0.forced ? t.closedWarnNoTime : t.closedWarn.replace("{time}", fmtTime(st0.from));
    } else {
        note.hidden = true;
    }

    const totals = $("totals");
    totals.innerHTML = "";
    function line(label, value, cls, raw) {
        const d = el("div", cls);
        const a = el("span");
        a.textContent = label;
        const b = el("span");
        b.textContent = raw ? value : value + " " + t.currency;
        d.append(a, b);
        totals.appendChild(d);
    }
    line(t.subtotal, c.subtotal);
    if (c.fee) line(t.deliveryFee, c.fee);
    if (c.needZone) line(t.deliveryFee, t.pickZoneShort, "", true);
    if (c.varies) line(t.deliveryFee, t.feeVaries, "", true);
    line(c.varies || c.needZone ? t.totalNoFee : t.total, c.total, "grand");
}

function updateCartUI() {
    let count = 0;
    Object.keys(cart).forEach(function (k) { count += cart[k]; });
    $("cartCount").textContent = count;
    $("cartCount").hidden = count === 0;
    renderRepeat();
    if (!$("cartOverlay").hidden) renderCart();
}

function openCart() {
    exitSent();
    $("cartOverlay").hidden = false;
    renderCart();
}

// ---------- شاشة "تم تجهيز طلبك" ----------
function renderSent() {
    const t = T[lang];
    const s = openState();
    $("sentText").textContent = t.sentText + (s && !s.open ? " " + t.sentClosed : "");
}

function showSent() {
    renderSent();
    $("sentBox").hidden = false;
    document.querySelector(".drawer").classList.add("sent-mode");
    document.querySelector(".drawer").scrollTop = 0;
}

function exitSent() {
    $("sentBox").hidden = true;
    document.querySelector(".drawer").classList.remove("sent-mode");
}

function newOrder() {
    cart = {};
    saveCart();
    $("fNotes").value = "";
    exitSent();
    closeCart();
    renderAll();
}

function closeCart() {
    $("cartOverlay").hidden = true;
}

function buildMessage(name, phone, address, notes, c) {
    const delivery = getMode() === "delivery";
    const lines = [];
    lines.push("طلب جديد من الموقع 🛒");
    lines.push("");
    lines.push("الاسم: " + name);
    lines.push("الرقم: " + phone);
    lines.push("نوع الطلب: " + (delivery ? "توصيل" : "استلام من المكان"));
    if (delivery) lines.push("العنوان: " + address);
    lines.push("");
    lines.push("الأصناف:");
    Object.keys(cart).forEach(function (k) {
        const item = lookup[k];
        if (!item) return;
        lines.push("- " + cart[k] + " × " + item.ar + " = " + cart[k] * item.price + " جنيه");
    });
    lines.push("");
    lines.push("المجموع: " + c.subtotal + " جنيه");
    if (delivery) {
        lines.push("المنطقة: " + (zone === "other" ? $("fOtherZone").value.trim() + " (منطقة تانية)" : (c.zone ? c.zone.ar : "")));
        lines.push(c.varies ? "التوصيل: السعر يتحدد بعد معرفة العنوان" : "التوصيل: " + c.fee + " جنيه");
    }
    lines.push((c.varies ? "الإجمالي (من غير التوصيل): " : "الإجمالي: ") + c.total + " جنيه");
    if (notes) {
        lines.push("");
        lines.push("ملاحظات: " + notes);
    }
    return lines.join("\n");
}

function sendOrder() {
    const t = T[lang];
    const c = computeTotals();
    if (!c.count) { alert(t.needItems); return; }

    const name = $("fName").value.trim();
    const phone = $("fPhone").value.trim();
    const address = $("fAddress").value.trim();
    const notes = $("fNotes").value.trim();
    const delivery = getMode() === "delivery";

    if (!name) { alert(t.needName); return; }
    if (toLatinDigits(phone).replace(/\D/g, "").length < 8) { alert(t.needPhone); return; }
    if (delivery && c.needZone) { alert(t.needZone); $("fZone").focus(); return; }
    if (delivery && zone === "other" && !$("fOtherZone").value.trim()) { alert(t.needOtherZone); $("fOtherZone").focus(); return; }
    if (delivery && !address) { alert(t.needAddress); return; }

    saveProfile();
    const msg = buildMessage(name, phone, address, notes, c);
    window.open("https://wa.me/" + intl(CONFIG.orderPhone) + "?text=" + encodeURIComponent(msg), "_blank");
    saveLastOrder();
    showSent();
}

// ---------- تصدير المنيو للجدول (افتح الموقع ثم اكتب #export في آخر العنوان) ----------
function buildExport() {
    const rows = [["category_ar", "category_en", "image", "name_ar", "name_en", "price", "available", "tag"].join("\t")];
    fallbackMenu.forEach(function (cat) {
        cat.items.forEach(function (it, i) {
            rows.push([
                cat.ar, cat.en, i === 0 ? cat.image : "",
                it.ar, it.en, it.price === null ? "" : it.price,
                it.available ? "نعم" : "لا", ""
            ].join("\t"));
        });
    });
    $("exportMenu").value = rows.join("\n");

    const orows = [["title_ar", "title_en", "text_ar", "text_en", "active"].join("\t")];
    fallbackOffers.forEach(function (o) {
        orows.push([o.title.ar, o.title.en, o.text.ar, o.text.en, "نعم"].join("\t"));
    });
    $("exportOffers").value = orows.join("\n");
}

function checkExport() {
    const show = location.hash === "#export";
    $("exportBox").hidden = !show;
    if (show) buildExport();
}

// ---------- الروابط والأحداث ----------
function setupLinks() {
    const wa = "https://wa.me/" + intl(CONFIG.orderPhone);
    $("callLink").href = "tel:" + CONFIG.orderPhone;
    $("mapLink").href = CONFIG.mapUrl || MAP_URL;
    $("waLink").href = wa;
    $("igLink").href = CONFIG.instagram;
    $("fbLink").href = CONFIG.facebook;
    $("igLink2").href = CONFIG.instagram;
    $("fbLink2").href = CONFIG.facebook;
    $("devWa").href = "https://wa.me/" + intl(CONFIG.dev.phone);
    $("devIg").href = CONFIG.dev.instagram;
    $("devFb").href = CONFIG.dev.facebook;
}

function wireEvents() {
    $("langBtn").onclick = function () {
        lang = lang === "ar" ? "en" : "ar";
        renderAll();
    };
    $("cartBtn").onclick = openCart;
    $("orderBtn").onclick = openCart;
    $("closeCart").onclick = closeCart;
    $("cartOverlay").onclick = function (e) {
        if (e.target === $("cartOverlay")) closeCart();
    };
    document.querySelectorAll('input[name="mode"]').forEach(function (r) {
        r.onchange = renderCart;
    });
    $("sendBtn").onclick = sendOrder;
    $("newOrderBtn").onclick = newOrder;
    if ($("repeatBtn")) $("repeatBtn").onclick = repeatLast;
    $("backOrderBtn").onclick = function () { exitSent(); renderCart(); };
    $("devBtn").onclick = function () {
        $("devPanel").hidden = !$("devPanel").hidden;
    };
    $("fZone").onchange = function () {
        zone = $("fZone").value;
        saveProfile();
        renderCart();
    };
    ["fName", "fPhone", "fAddress", "fOtherZone"].forEach(function (id) {
        $(id).addEventListener("input", saveProfile);
    });
    window.addEventListener("hashchange", checkExport);
}

async function init() {
    loadCart();
    setupLinks();
    wireEvents();
    loadCachedSettings();      // آخر إعدادات اتحملت من الجدول (عشان تظهر فوراً)
    loadProfile();

    // إعدادات الجدول: بتتحمل بالتوازي مع المنيو
    const settingsP = CONFIG.sheetSettingsUrl
        ? loadSheet(CONFIG.sheetSettingsUrl).then(settingsFromRows).catch(function (e) {
            console.warn("تعذر قراءة تاب الإعدادات، هيتم استخدام آخر إعدادات محفوظة", e);
            return null;
        })
        : Promise.resolve(null);

    loading = !!CONFIG.sheetMenuUrl;
    if (CONFIG.sheetOffersUrl) offers = [];

    rebuildLookup();
    renderAll();
    checkExport();
    setInterval(renderOpen, 60000);

    if (CONFIG.sheetMenuUrl) {
        try {
            const m = menuFromRows(await loadSheet(CONFIG.sheetMenuUrl));
            if (m.length) menu = m;
        } catch (e) {
            console.warn("تعذر قراءة جدول المنيو، هيتم استخدام النسخة الاحتياطية", e);
        }
        loading = false;
    }

    if (CONFIG.sheetOffersUrl) {
        try {
            offers = offersFromRows(await loadSheet(CONFIG.sheetOffersUrl));
        } catch (e) {
            console.warn("تعذر قراءة جدول العروض", e);
        }
    }

    const st = await settingsP;
    if (st && applySettings(st)) {
        try { localStorage.setItem("nasa_settings", JSON.stringify(st)); } catch (e) {}
    } else if (st) {
        console.warn("تاب الإعدادات مفيهوش صفوف مفهومة (type: zone / dinein / open ...)");
    }

    rebuildLookup();
    renderAll();
}

init();