
const data = {
  product: "iPhone 15",
  platforms: [
    { name: "Shopee", price: 10200, image: "https://via.placeholder.com/80?text=Shopee" },
    { name: "PChome", price: 9900, image: "https://via.placeholder.com/80?text=PChome" },
    { name: "momo", price: 10100, image: "https://via.placeholder.com/80?text=momo" }
  ]
};

const langData = {
  zh: { title: "QuickPrice 比價網", search: "搜尋" },
  en: { title: "QuickPrice Price Compare", search: "Search" }
};

function renderResults() {
  const results = document.getElementById("results");
  results.innerHTML = "";
  data.platforms.forEach(p => {
    const div = document.createElement("div");
    div.className = "result-card";
    div.innerHTML = \`
      <img src="\${p.image}" alt="\${p.name}">
      <div>
        <h3>\${p.name}</h3>
        <p>\$ \${p.price}</p>
      </div>\`;
    results.appendChild(div);
  });
}

function search() {
  renderResults(); // 模擬搜尋
}

function setLang(lang) {
  document.getElementById("title").innerText = langData[lang].title;
  document.getElementById("searchBtnText").innerText = langData[lang].search;
}
