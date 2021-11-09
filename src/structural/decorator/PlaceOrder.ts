import UseCase from "./UseCase";

export default class PlaceOrder implements UseCase {

	constructor () {
	}

	execute (input: any) {
		console.log("Executando o place order");
	}
}
