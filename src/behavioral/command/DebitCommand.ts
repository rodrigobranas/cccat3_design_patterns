import Account from "./Account";
import Command from "./Command";

export default class DebitCommand implements Command {

	constructor (readonly account: Account, readonly amount: number) {
	}

	execute () {
		this.account.debit(this.amount);
	}
}