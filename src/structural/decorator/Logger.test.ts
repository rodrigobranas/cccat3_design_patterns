import LoggerUseCaseDecorator from "./LoggerUseCaseDecorator";
import PerformanceUseCaseDecorator from "./PerformanceUseCaseDecorator";
import PlaceOrder from "./PlaceOrder";
import SimulateFreight from "./SimulateFreight";

test("Deve logar as operações realizadas em um caso de uso", function () {
	const input = {
		cpf: "123.456.789-10",
		items: [
			{ idItem: 1, quantity: 1 },
			{ idItem: 2, quantity: 1 },
			{ idItem: 3, quantity: 3 },
		]
	};
	const placeOrder = new LoggerUseCaseDecorator(new PerformanceUseCaseDecorator(new PlaceOrder()));
	placeOrder.execute(input);
	const simulateFreight = new LoggerUseCaseDecorator(new PerformanceUseCaseDecorator(new SimulateFreight()));
	simulateFreight.execute(input);
});
