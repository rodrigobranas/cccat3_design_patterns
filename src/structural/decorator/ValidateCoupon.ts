import UseCase from "./UseCase";

export default class ValidateCoupon implements UseCase {

	constructor () {
	}

	execute (input: any) {
		console.log("Executando o validate coupon");
	}
}
