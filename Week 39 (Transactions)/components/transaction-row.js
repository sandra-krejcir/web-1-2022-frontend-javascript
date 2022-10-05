function transactionRow(transaction) {
  const tr = document.createElement("tr");

  const tdName = document.createElement("td");
  const tdPrice = document.createElement("td");
  const tdDate = document.createElement("td");

  tdName.textContent = transaction.name;
  tdPrice.textContent = transaction.price;
  tdDate.textContent = formatDate(transaction.transaction_date);

  tr.appendChild(tdName);
  tr.appendChild(tdPrice);
  tr.appendChild(tdDate);

  return tr;
}

function formatDate(isoDate) {
  const date = new Date(isoDate);
  const day = ("0" + date.getDate()).substring(0, 2);
  const month = ("0" + (date.getMonth() + 1)).substring(0, 2);
  const year = date.getFullYear();

  const hour = date.getHours();
  const min = date.getMinutes();

  return `d. ${day}/${month}/${year}, kl. ${hour}:${min}`;
}
