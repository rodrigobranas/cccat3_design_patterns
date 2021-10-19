import StripeTransaction from "./StripeTransaction";
import Transaction from "./Transaction";

export default class StripeTransactionAdapter implements Transaction {
	trackNumber: string;
	amount: number;
	status: string;

	constructor (readonly stripeTransaction: StripeTransaction) {
		this.trackNumber = stripeTransaction.code;
		this.amount = stripeTransaction.grossAmount;
		this.status = this.convertStatus(stripeTransaction.situation);
	}

	convertStatus (situation: number): string {
		switch (situation) {
			case 1:
				return "waiting_payment";
			case 2:
				return "paid";
			case 3:
				return "cancelled";
			default:
				return "";
		}
	}
}
