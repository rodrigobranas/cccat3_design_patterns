import Order from "./Order";

test("Deve criar um pedido com status pendente", function () {
	const order = new Order();
	expect(order.status.value).toBe("pending");
});

test("Deve mudar o status do pedido para confirmado", function () {
	const order = new Order();
	order.confirm();
	expect(order.status.value).toBe("confirmed");
});

test("Deve mudar o status do pedido para cancelado", function () {
	const order = new Order();
	order.cancel();
	expect(order.status.value).toBe("cancelled");
});

test("Se o pedido estiver cancelado não pode mudar o status para confirmado", function () {
	const order = new Order();
	order.cancel();
	expect(() => order.confirm()).toThrow(new Error("O pedido já está cancelado"));
});
