const CONFIG = {
    deliveryFee: 15,
    orderPhone: "01064954558",
    phones: ["01064954558", "01023264231"],
    instagram: "https://www.instagram.com/nasa_playstation_cafe",
    facebook: "https://www.facebook.com/share/1ZJaisfCL1/",
    location: { ar: "قرية كفور بلشاي", en: "Kafr Belshay Village" },
    hours: { ar: "كل يوم من 12 الضهر لـ 3 الفجر", en: "Every day 12 PM to 3 AM" },
    ps: [
        { ar: "ساعة على PS4", en: "1 hour on PS4", price: 20 }
    ],

    // لينكات الجدول
    sheetMenuUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vT4Jz2ntIskrLucWGiZ8UTb9fIK_-0svfks-OBOdEuwNYr7ABKp7PggekcRLcoR4Zk_ApQSyh4yUKvX/pub?gid=0&single=true&output=csv",
    sheetOffersUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vT4Jz2ntIskrLucWGiZ8UTb9fIK_-0svfks-OBOdEuwNYr7ABKp7PggekcRLcoR4Zk_ApQSyh4yUKvX/pub?gid=1839216623&single=true&output=csv",
    sheetSettingsUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vT4Jz2ntIskrLucWGiZ8UTb9fIK_-0svfks-OBOdEuwNYr7ABKp7PggekcRLcoR4Zk_ApQSyh4yUKvX/pub?gid=2066878525&single=true&output=csv",

    // حساباتك (الزرار العايم)
    dev: {
        name: "Ahmed Talaat",
        phone: "01092155016",
        instagram: "https://www.instagram.com/3hmed_tal3at_eldalgmony",
        facebook: "https://www.facebook.com/share/1DgDbvqbq8/"
    }
};

// ---------- نسخة احتياطية من العروض ----------
const fallbackOffers = [
    {
        title: { ar: "عرض تجريبي 🎁", en: "Sample offer 🎁" },
        text: {
            ar: "هنا بتظهر عروضك. غيّر العرض ده من جدول Google Sheets.",
            en: "Your offers appear here. Edit this offer from the Google Sheet."
        }
    }
];

// ---------- نسخة احتياطية من المنيو ----------
// الصنف: [عربي, إنجليزي, السعر]   أو  [عربي, إنجليزي, السعر, false] لو خلصان
// السعر null يعني من غير سعر
function c(ar, en, image, items) {
    return {
        ar: ar,
        en: en,
        image: image,
        items: items.map(function (i) {
            return { ar: i[0], en: i[1], price: i[2], available: i[3] !== false };
        })
    };
}

const fallbackMenu = [
    c("مشروبات ساخنة", "Hot Drinks", "hot-drinks.jpg", [
        ["شاي", "Tea", 10],
        ["شاي أخضر", "Green Tea", 15],
        ["شاي كرك", "Karak Tea", 24],
        ["شاي قرنفل", "Clove Tea", 10],
        ["شاي بلبن", "Tea with Milk", 24],
        ["ينسون", "Anise", 10],
        ["حلبه", "Fenugreek", 10],
        ["حلبه حليب", "Fenugreek with Milk", 24],
        ["كركديه", "Hibiscus", 10],
        ["خلطة أعشاب", "Herbal Mix", 24],
        ["ليمون", "Lemon", 10],
        ["هوت سيدر", "Hot Cider", 29],
        ["قرفة حليب", "Cinnamon Milk", 24],
        ["هوت شوكليت", "Hot Chocolate", 29],
        ["سحلب مكسرات", "Sahlab with Nuts", 39],
        ["سحلب مكسرات صحيحة", "Sahlab with Whole Nuts", 49],
        ["سحلب فواكه", "Sahlab with Fruits", 49],
        ["براد شاي كبير", "Large Tea Pot", 34],
        ["براد شاي صغير", "Small Tea Pot", 24]
    ]),
    c("قهوة", "Coffee", "coffee.jpg", [
        ["قهوة تركي", "Turkish Coffee", 19],
        ["قهوة تركي دبل", "Double Turkish Coffee", 29],
        ["قهوة نوتيلا", "Nutella Coffee", 29],
        ["قهوة لوتس", "Lotus Coffee", 29],
        ["قهوة فرنساوي", "French Coffee", 29],
        ["قهوة بندق", "Hazelnut Coffee", 29],
        ["كابتشينو", "Cappuccino", 39],
        ["نسكافيه", "Nescafe", 39],
        ["نسكافيه حليب", "Nescafe with Milk", 39],
        ["آيس كوفي", "Iced Coffee", 49]
    ]),
    c("عصاير فريش", "Fresh Juice", "fresh-juice.jpg", [
        ["مانجا", "Mango", 39],
        ["مانجا كيوي", "Mango Kiwi", 59],
        ["أفوكادو بالمكسرات", "Avocado with Nuts", 79],
        ["جوافة بلبن", "Guava with Milk", 39],
        ["فراولة", "Strawberry", 29],
        ["فراولة بلبن", "Strawberry with Milk", 39],
        ["عناب", "Jujube", 19],
        ["موز بلبن", "Banana with Milk", 39],
        ["برتقال", "Orange", 29],
        ["برتقال وجزر", "Orange & Carrot", 39],
        ["بلح", "Dates", 39],
        ["كيوي", "Kiwi", 49],
        ["بطيخ", "Watermelon", 49],
        ["ليمون", "Lemon", 34],
        ["ليمون نعناع", "Lemon Mint", 39],
        ["صن شاين", "Sun Shine", 39],
        ["صن تويست", "Sun Twist", 39]
    ]),
    c("سموزي", "Smoothie", "smoothie.jpg", [
        ["سموزي توت", "Berry Smoothie", 49],
        ["سموزي فراولة", "Strawberry Smoothie", 49],
        ["سموزي مانجا", "Mango Smoothie", 59],
        ["سموزي كيوي", "Kiwi Smoothie", 54],
        ["سموزي بطيخ", "Watermelon Smoothie", 49],
        ["سموزي تفاح أخضر", "Green Apple Smoothie", 54],
        ["سموزي جوافة", "Guava Smoothie", 49],
        ["سموزي خوخ", "Peach Smoothie", 49],
        ["سموزي أناناس", "Pineapple Smoothie", 49],
        ["سموزي كريز", "Cherry Smoothie", 49]
    ]),
    c("ميلك شيك", "Milkshake", "milkshake.jpg", [
        ["ميلك شيك شوكولاتة", "Chocolate Milkshake", 49],
        ["ميلك شيك أوريو", "Oreo Milkshake", 49],
        ["ميلك شيك فانيليا", "Vanilla Milkshake", 49],
        ["ميلك شيك مانجا", "Mango Milkshake", 49],
        ["ميلك شيك فراولة", "Strawberry Milkshake", 49]
    ]),
    c("موهيتو", "Mojitos", "mojitos.jpg", [
        ["موهيتو ليمون نعناع", "Lemon Mint Mojito", 44],
        ["موهيتو بلو بري", "Blueberry Mojito", 44],
        ["موهيتو كلاسيك بالليمون", "Classic Lemon Mojito", 44],
        ["موهيتو باشون فروت", "Passion Fruit Mojito", 44],
        ["موهيتو رمان", "Pomegranate Mojito", null]
    ]),
    c("زبادي", "Zabady", "zabady.jpg", [
        ["زبادي فراولة", "Strawberry Yogurt", 39],
        ["زبادي مانجا", "Mango Yogurt", 39],
        ["زبادي كيوي", "Kiwi Yogurt", 54],
        ["زبادي موز", "Banana Yogurt", 39],
        ["زبادي جوافة", "Guava Yogurt", 39],
        ["زبادي فواكه", "Fruit Yogurt", 34]
    ]),
    c("مشروبات غازية", "Soft Drinks", "soft-drinks.jpg", [
        ["7 كولا", "V7 Cola", 24],
        ["7 توت", "V7 Berry", 24],
        ["7 بيناكولادا", "V7 Pina Colada", 24],
        ["تويست", "Twist", 24],
        ["مياه كبيرة", "Large Water", 15],
        ["مياه صغيرة", "Small Water", 10]
    ]),
    c("قشطوطة ناسا", "NASA Qashtota", "qashtota.jpg", [
        ["قشطوطة شوكليت", "Chocolate Qashtota", 44],
        ["قشطوطة لوتس", "Lotus Qashtota", 44],
        ["قشطوطة مانجة", "Mango Qashtota", 44],
        ["قشطوطة كيندر", "Kinder Qashtota", 44],
        ["قشطوطة بيستاشيو", "Pistachio Qashtota", 54],
        ["قشطوطة رافاييلو", "Raffaello Qashtota", 49],
        ["قشطوطة فيريرو روشيه", "Ferrero Rocher Qashtota", 49]
    ]),
    c("رز بلبن", "Rice Pudding", "rice-pudding.jpg", [
        ["رز بلبن سادة", "Plain Rice Pudding", 29],
        ["رز بلبن نوتيلا", "Nutella Rice Pudding", 39],
        ["رز بلبن لوتس", "Lotus Rice Pudding", 39],
        ["رز بلبن مانجا", "Mango Rice Pudding", 39],
        ["رز بلبن مكسرات", "Nuts Rice Pudding", 39],
        ["رز بلبن فواكه", "Fruits Rice Pudding", 39]
    ]),
    c("كنافة", "Kunafa", "kunafa.jpg", [
        ["كنافة نوتيلا", "Nutella Kunafa", 44],
        ["كنافة لوتس", "Lotus Kunafa", 44],
        ["كنافة رافاييلو", "Raffaello Kunafa", 44],
        ["كنافة مانجة", "Mango Kunafa", 44],
        ["كنافة كيندر", "Kinder Kunafa", 44],
        ["كنافة بيستاشيو", "Pistachio Kunafa", 54],
        ["كنافة فيريرو روشيه", "Ferrero Rocher Kunafa", 44]
    ]),
    c("تشيز كيك ناسا", "NASA Cheesecake", "cheesecake.jpg", [
        ["تشيز كيك لوتس", "Lotus Cheesecake", 44],
        ["تشيز كيك فراولة", "Strawberry Cheesecake", 44],
        ["تشيز كيك نوتيلا", "Nutella Cheesecake", 44],
        ["تشيز كيك توت", "Berry Cheesecake", 49],
        ["تشيز كيك رافاييلو", "Raffaello Cheesecake", 44],
        ["تشيز كيك بيستاشيو", "Pistachio Cheesecake", 49],
        ["تشيز كيك فيريرو روشيه", "Ferrero Rocher Cheesecake", 44]
    ]),
    c("مميزات ناسا", "NASA Specials", "specials.jpg", [
        ["ماتيلدا كيك", "Matilda Cake", 49],
        ["شوكليت كيك", "Chocolate Cake", 44],
        ["ترافيل", "Truffle", 34],
        ["إكلير", "Eclair", 79],
        ["بروفيترول", "Profiterole", 69]
    ]),
    c("سلطة فواكه", "Fruit Salad", "fruit-salad.jpg", [
        ["فواكه مشكلة بالعسل والمكسرات", "Mixed Fruits with Honey & Nuts", 59]
    ]),
    c("إضافات", "Extras", "extras.jpg", [
        ["عسل", "Honey", 10],
        ["مكسرات", "Nuts", 10],
        ["آيس كريم", "Ice Cream", 10],
        ["بوبا", "Boba", 15]
    ])
];