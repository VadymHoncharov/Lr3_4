const products = [
  { name: "Футболка Nike (червона, M, бавовна)", filters: ["red", "M", "cotton", "nike"] },
  { name: "Футболка Adidas (синя, L, синтетика)", filters: ["blue", "L", "adidas"] },
  { name: "Футболка Puma (червона, L, бавовна)", filters: ["red", "L", "cotton", "puma"] },
  { name: "Футболка Nike (синя, M, бавовна)", filters: ["blue", "M", "cotton", "nike"] },
];

function applyFilters() {
  const selected = Array.from(document.querySelectorAll('input[name="filter"]:checked')).map(cb => cb.value);
  const resultsDiv = document.getElementById("results");

  if (selected.length === 0) {
    resultsDiv.innerHTML = "<p>Оберіть хоча б один фільтр.</p>";
    return;
  }

  const filtered = products.filter(product =>
    selected.every(filter => product.filters.includes(filter))
  );

  if (filtered.length === 0) {
    resultsDiv.innerHTML = "<p>Немає товарів, що відповідають вибраним фільтрам.</p>";
  } else {
    resultsDiv.innerHTML = "<h3>Результати:</h3><ul>" +
      filtered.map(p => `<li>${p.name}</li>`).join("") +
      "</ul>";
  }
}
