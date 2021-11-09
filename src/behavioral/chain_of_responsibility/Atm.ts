import Handler from "./Handler";

export default class Atm {

	constructor (readonly handler: Handler) {
	}

	withdraw (amount: number) {
		const bills: any[] = [];
		this.handler.handle(bills, amount);
		return bills;
	}
}
