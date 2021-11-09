import UseCase from "./UseCase";

export default class LoggerUseCaseDecorator implements UseCase {

	constructor (readonly usecase: UseCase) {
	}

	execute(input: any): void {
		console.log("executando decorator de log");
		this.usecase.execute(input);
	}
}