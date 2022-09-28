function transactionRow(transaction) {
  /*
  <tr></tr>
  <td></td>
  <td></td>
  <td></td>
 */
  const tr = document.createElement("tr");
  const tdName = document.createElement("td");
  const tdPrice = document.createElement("td");
  const tdDate = document.createElement("td");

  tdName.textContent = transaction.name;
  tdPrice.textContent = transaction.price;
  tdDate.textContent = transaction.transaction_date;

  tr.appendChild(tdName);
  tr.appendChild(tdPrice);
  tr.appendChild(tdDate);

  return tr;
}
