import CancelledStatus from "./CancelledStatus";
import ConfirmedStatus from "./ConfirmedStatus";
import Order from "./Order";
import OrderStatus from "./OrderStatus";

export default class PendingStatus extends OrderStatus {
	value: string;

	constructor (order: Order) {
		super(order);
		this.value = "pending";
	}

	confirm(): void {
		this.order.status = new ConfirmedStatus(this.order);
	}

	cancel(): void {
		this.order.status = new CancelledStatus(this.order);
	}
}
