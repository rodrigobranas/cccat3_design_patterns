import UseCase from "./UseCase";

export default class SimulateFreight implements UseCase {

	constructor () {
	}

	execute (input: any) {
		console.log("Executando o simulate freight");
	}
}
