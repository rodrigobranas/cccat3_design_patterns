import Transaction from "./Transaction";

export default class Account {
	private transactions: Transaction[];

	constructor () {
		this.transactions = [];
	}

	credit (amount: number) {
		const transaction = new Transaction("credit", amount);
		this.transactions.push(transaction);
	}

	debit (amount: number) {
		const transaction = new Transaction("debit", amount);
		this.transactions.push(transaction);
	}

	getBalance () {
		let balance = 0;
		for (const transaction of this.transactions) {
			if (transaction.type === "credit") balance += transaction.amount;
			if (transaction.type === "debit") balance -= transaction.amount;
		}
		return balance;
	}
}
