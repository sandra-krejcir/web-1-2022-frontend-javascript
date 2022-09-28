window.addEventListener("load", async () => {
  const dataProxy = new TransactionProxy();
  const transactions = await dataProxy.getTransactions();
  console.log(transactions);
});
