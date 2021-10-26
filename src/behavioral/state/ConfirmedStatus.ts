import CancelledStatus from "./CancelledStatus";
import Order from "./Order";
import OrderStatus from "./OrderStatus";

export default class ConfirmedStatus extends OrderStatus {
	value: string;

	constructor (order: Order) {
		super(order);
		this.value = "confirmed";
	}

	confirm(): void {
		throw new Error("O pedido já está confirmado");
	}

	cancel(): void {
		this.order.status = new CancelledStatus(this.order);
	}
}
