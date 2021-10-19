import PayPalTransaction from "./PayPalTransaction";
import Transaction from "./Transaction";

export default class PayPalTransactionAdapter implements Transaction {
	trackNumber: string;
	amount: number;
	status: string;

	constructor (readonly paypalTransaction: PayPalTransaction) {
		this.trackNumber = `${paypalTransaction.id}`;
		this.amount = paypalTransaction.amount;
		this.status = this.convertStatus(paypalTransaction.status);
	}

	convertStatus (status: string) {
		switch (status) {
			case "P":
				return "waiting_payment";
			case "S":
				return "paid";
			case "F":
				return "refunded";
			default:
				return "";
		}
	}
}
