/**
 * Our component, needs to accept an Array,
 * And return the html table
 */
function transactionTable(transactions) {
  // Needs to create the table
  /*
  <table>
   <tr>
     <th>Name</th>
     <th>Price</th>
     <th>Transaction date</th>
   </tr>
  </table>
  */
  // Creating all the elements
  const table = document.createElement("table");
  const tr = document.createElement("tr");
  const thName = document.createElement("th");
  const thPrice = document.createElement("th");
  const thDate = document.createElement("th");

  // Adding header titles
  thName.textContent = "Name";
  thPrice.textContent = "Price";
  thDate.textContent = "Transaction date";

  // Collect the pieces
  table.appendChild(tr);
  tr.appendChild(thName);
  tr.appendChild(thPrice);
  tr.appendChild(thDate);

  // And handle the looping
  transactions.forEach((transaction) => {
    const row = transactionRow(transaction);
    table.appendChild(row);
  });

  return table;
}
