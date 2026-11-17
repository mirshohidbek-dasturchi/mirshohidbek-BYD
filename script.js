const cars = [
    { name: "BYD SEALION 7", type: "electric suv", tag: "100% ELEKTR", sub: "Elektr sport krossoveri", desc: "BYD SEALION 7 — sport ruhidagi elektr krossover. Dinamik tashqi ko‘rinish, keng salon va zamonaviy elektr haydash tajribasini birlashtiradi. Batafsil komplektatsiya va texnik ko‘rsatkichlar dilerda aniqlashtiriladi.", body: "Elektr krossover", power: "To‘liq elektr", use: "Shahar va uzoq yo‘l", focus: "Sport dizayn", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzz1N-zMthoF-gbk287wgYO2zKiNgcwHLPYhLtltbcA&s=10" },
    { name: "BYD SEAL 6", type: "hybrid sedan", tag: "SUPER HYBRID", sub: "Yuqori samarali Super Hybrid sedan", desc: "BYD SEAL 6 zamonaviy sedan ko‘rinishi va DM-i Super Hybrid texnologiyasi bilan ajralib turadi. Kundalik qatnov va uzoq safarlarda qulaylikni ko‘zlaydiganlar uchun mo‘ljallangan.", body: "Sedan", power: "DM-i Super Hybrid", use: "Kundalik va uzoq safar", focus: "Samaradorlik", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0C4HADK9nddljo8ZT4IsPRDkXQX3VIajKGy66BI-UpQ&s=10" },
    { name: "BYD SEAGULL", type: "electric", tag: "100% ELEKTR", sub: "Ixcham shahar elektromobili", desc: "BYD SEAGULL ixcham o‘lchamlari va yorqin dizayni bilan shahar hayoti uchun yaratilgan elektromobil. Manevr qilish oson bo‘lgan ixcham kuzov kundalik foydalanishga mos.", body: "Xetchbek", power: "To‘liq elektr", use: "Shahar qatnovi", focus: "Ixcham va chaqqon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPtI0DW-HQBUBJ3faG5kzgtYEnEaG0FQ5ChR4ILZ9L3g&s=10" },
    { name: "BYD YUAN UP", type: "electric suv", tag: "100% ELEKTR", sub: "Ixcham elektr krossover", desc: "BYD YUAN UP zamonaviy dizayn, ilg‘or texnologiya va krossover qulayligini birlashtiradi. Kundalik shahar qatnovlari va dam olish kunlaridagi safarlar uchun mos tanlov.", body: "Krossover", power: "To‘liq elektr", use: "Shahar va sayohat", focus: "Zamonaviy krossover", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkLnHnl_cElIbIH2dGRekNvVIKT5mxtsc7m5zP6PBBqA&s=10" },
    { name: "BYD e2", type: "electric", tag: "100% ELEKTR", sub: "Amaliy elektr xetchbek", desc: "BYD e2 — yosh va zamonaviy ko‘rinishga ega elektr xetchbek. Okean estetikasidan ilhomlangan dizayn va kundalik foydalanishga yo‘naltirilgan amaliy kuzovga ega.", body: "Xetchbek", power: "To‘liq elektr", use: "Shahar qatnovi", focus: "Amaliy dizayn", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQraX_XjLn0J5YChXobbO5fgGX3VxRZ_91JtGSEjQf3Gw&s=10" },
    { name: "BYD CHAZOR CHAMPION", type: "hybrid sedan", tag: "SUPER HYBRID", sub: "DM-i texnologiyali sedan", desc: "BYD CHAZOR CHAMPION sedan kuzovi va DM-i plug-in gibrid texnologiyasini taklif etadi. Zamonaviy tashqi ko‘rinish va kundalik foydalanishga mos salon bilan ajralib turadi.", body: "Sedan", power: "DM-i Super Hybrid", use: "Kundalik qatnov", focus: "Gibrid samaradorlik", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSuywXZ1DY4V8ll_tJwWnwp18FEJufVwIkdS09kMXHA&s=10" },
    { name: "BYD YUAN UP DM-i", type: "hybrid suv", tag: "SUPER HYBRID", sub: "Ixcham plug-in gibrid krossover", desc: "YUAN UP DM-i ixcham krossover formatini plug-in gibrid texnologiyasi bilan uyg‘unlashtiradi. Shaharda qulay harakatlanish va safarlarda moslashuvchanlikni istaganlar uchun.", body: "Krossover", power: "DM-i Super Hybrid", use: "Shahar va safar", focus: "Ixcham SUV", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSifIncMGictBkwlQUAVZTYqTLl7MHcLckwL9ZlC3SGBA&s" },
    { name: "BYD SONG PLUS EV CHAMPION", type: "electric suv", tag: "100% ELEKTR", sub: "Oilaviy elektr SUV", desc: "BYD SONG PLUS EV CHAMPION keng krossover kuzovi va to‘liq elektr yuritmasiga ega. Oila bilan sayohat va kundalik foydalanish uchun qulaylikka urg‘u beradi.", body: "SUV", power: "To‘liq elektr", use: "Oila va sayohat", focus: "Keng salon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_TKq3eY84QL3T-RGVEeoiTYmsIYb61haNkDpDvrnCA&s=10" },
    { name: "BYD SONG PLUS DM-i UzPride", type: "hybrid suv", tag: "SUPER HYBRID", sub: "Oilaviy plug-in gibrid SUV", desc: "BYD SONG PLUS DM-i UzPride oilaviy SUV amaliyligi va DM-i gibrid texnologiyasini birlashtiradi. Keng salon va ko‘p maqsadli foydalanish uchun mo‘ljallangan.", body: "SUV", power: "DM-i Super Hybrid", use: "Oila va uzoq safar", focus: "Qulaylik", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4_6663tZThVezkIjG6DRgZvFp16pK0qwgjSJKaU0Zg&s" },
    { name: "BYD SONG PRO DM-i CHAMPION", type: "hybrid suv", tag: "SUPER HYBRID", sub: "Zamonaviy gibrid krossover", desc: "BYD SONG PRO DM-i CHAMPION krossover dizayni va plug-in gibrid yuritmasini birlashtiradi. Shahar va shahar tashqarisidagi qatnovlarda ko‘p qirrali foydalanishga mo‘ljallangan.", body: "Krossover", power: "DM-i Super Hybrid", use: "Har kungi qatnov", focus: "Ko‘p qirrali SUV", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUb_5U_Z7gbpoBBITxCo1nH06y9ceZwk-z_NCdvE0qVw&s=10" },
    { name: "BYD HAN", type: "electric sedan", tag: "100% ELEKTR", sub: "Premium elektr sedan", desc: "BYD HAN — nafis sedan dizayni va elektr harakat tizimiga ega premium yo‘nalishdagi model. Komfort, texnologiya va salobatli ko‘rinishni qadrlaydiganlar uchun.", body: "Premium sedan", power: "To‘liq elektr", use: "Shahar va uzoq yo‘l", focus: "Premium komfort", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4k__8ZtqAiNHIPfr5Xi4KSCmaJDENjIkqRlfA_djv9w&s=10" },
    { name: "BYD ATTO 8", type: "hybrid suv", tag: "SUPER HYBRID", sub: "Flagman plug-in gibrid SUV", desc: "BYD ATTO 8 — katta o‘lchamli, flagman yo‘nalishidagi plug-in gibrid SUV. Kenglik, qulaylik va zamonaviy texnologiyalarni bir avtomobilda jamlaydi.", body: "Flagman SUV", power: "Plug-in Hybrid", use: "Oila va uzoq safar", focus: "Kenglik va komfort", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4QyckVZs6Q-4MpgZD-XkuKvINr7Akb_bjVN4XZ3-vw&s=10" }
];
const grid = document.getElementById("modelGrid"), detail = document.getElementById("detailModal"), order = document.getElementById("orderModal"), select = document.getElementById("orderModel");
let selected = null, activeFilter = "all";
const fallback = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85";
function render() {
    const shown = cars.filter(c => activeFilter === "all" || c.type.split(" ").includes(activeFilter));
    document.getElementById("resultCount").textContent = String(shown.length).padStart(2, "0") + " TA MODEL";
    grid.innerHTML = shown.map(c => `<article class="model-card" tabindex="0" role="button" aria-label="${c.name} haqida batafsil" data-name="${c.name}"><img src="${c.img}" alt="${c.name}" loading="lazy" onerror="this.src='${fallback}'"><div class="model-copy"><span class="tag">${c.tag}</span><h3>${c.name}</h3><p>${c.sub}</p><div class="card-actions"><span>Batafsil ↗</span><span>So‘rov qoldirish</span></div></div></article>`).join("");
}
function showDetail(car) {
    selected = car;
    document.getElementById("detailImage").src = car.img;
    document.getElementById("detailImage").alt = car.name;
    document.getElementById("detailName").textContent = car.name;
    document.getElementById("detailSubtitle").textContent = car.sub;
    document.getElementById("detailDescription").textContent = car.desc;
    document.getElementById("detailSpecs").innerHTML = [["Kuzov turi", car.body], ["Yuritma", car.power], ["Foydalanish", car.use], ["Asosiy jihati", car.focus]].map(s => `<div class="spec"><strong>${s[1]}</strong><small>${s[0]}</small></div>`).join("");
    detail.classList.add("open"); detail.setAttribute("aria-hidden", "false");
}
function showOrder(car) {
    if (car) selected = car;
    select.innerHTML = '<option value="">Modelni tanlang</option>' + cars.map(c => `<option value="${c.name}">${c.name}</option>`).join("");
    if (selected) select.value = selected.name;
    detail.classList.remove("open"); detail.setAttribute("aria-hidden", "true");
    order.classList.add("open"); order.setAttribute("aria-hidden", "false");
}
function closeModal(m) { m.classList.remove("open"); m.setAttribute("aria-hidden", "true") }
function toast(msg) { const t = document.getElementById("toast"); t.textContent = msg; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 3000) }
grid.addEventListener("click", e => { const card = e.target.closest(".model-card"); if (card) { const c = cars.find(x => x.name === card.dataset.name); showDetail(c) } });
grid.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { const card = e.target.closest(".model-card"); if (card) { e.preventDefault(); showDetail(cars.find(x => x.name === card.dataset.name)) } } });
document.querySelectorAll(".filter").forEach(b => b.addEventListener("click", () => { document.querySelectorAll(".filter").forEach(x => x.classList.remove("active")); b.classList.add("active"); activeFilter = b.dataset.filter; render() }));
document.querySelectorAll("[data-close]").forEach(b => b.addEventListener("click", () => closeModal(b.closest(".modal"))));
document.querySelectorAll(".modal").forEach(m => m.addEventListener("click", e => { if (e.target === m) closeModal(m) }));
document.getElementById("detailOrder").addEventListener("click", () => showOrder(selected));
document.getElementById("contactOrder").addEventListener("click", () => showOrder(null));
document.getElementById("orderForm").addEventListener("submit", e => { e.preventDefault(); const requests = JSON.parse(localStorage.getItem("bydDemoRequestsV2") || "[]"); requests.push({ ...Object.fromEntries(new FormData(e.target)), createdAt: new Date().toISOString() }); localStorage.setItem("bydDemoRequestsV2", JSON.stringify(requests)); closeModal(order); e.target.reset(); toast("So‘rovingiz demo tarzida saqlandi. Rahmat!") });
document.getElementById("mobileMenu").addEventListener("click", () => document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => document.getElementById("nav").classList.remove("open")));
render();