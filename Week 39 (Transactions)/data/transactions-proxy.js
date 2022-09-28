// Create a transaction proxy
// Either as Class or Function

class TransactionProxy {
  constructor() {}

  async getTransactions() {
    const data = await getLocalTransactions();
    return data;
  }
}

// Constructor example
// const transactionProxy = new TransactionProxy();
// const date = new Date("2022-01-01");
