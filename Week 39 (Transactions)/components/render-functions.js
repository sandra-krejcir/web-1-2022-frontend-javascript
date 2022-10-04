function renderTable(table) {
  const container = document.querySelector(".transactions");
  container.appendChild(table);
}

function renderFilterSection(filter) {
  document.querySelector(".sidebar").replaceChildren(filter);
}
