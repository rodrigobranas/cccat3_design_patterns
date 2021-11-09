import UseCase from "./UseCase";

export default class PerformanceUseCaseDecorator implements UseCase {

	constructor (readonly usecase: UseCase) {
	}

	execute(input: any): void {
		console.time("performance");
		this.usecase.execute(input);
		console.timeEnd("performance");
	}
}