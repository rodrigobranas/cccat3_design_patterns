import Order from "./Order";

export default abstract class OrderStatus {
	order: Order;
	abstract value: string;

	constructor (order: Order) {
		this.order = order;
	}

	abstract confirm (): void;

	abstract cancel (): void;
}