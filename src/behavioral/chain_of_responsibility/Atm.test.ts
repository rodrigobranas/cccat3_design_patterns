import Atm from "./Atm";
import BillHandler from "./BillHandler";

test("Deve sacar dinheiro com todas as notas", function () {
	const handler1 = new BillHandler(undefined, 1);
	const handler2 = new BillHandler(handler1, 2);
	const handler5 = new BillHandler(handler2, 5);
	const handler10 = new BillHandler(handler5, 10);
	const handler20 = new BillHandler(handler10, 20);
	const handler50 = new BillHandler(handler20, 50);
	const handler100 = new BillHandler(handler50, 100);
	const atm = new Atm(handler100);
	const bills = atm.withdraw(978);
	expect(bills).toStrictEqual([ 
		{ type: 100, quantity: 9}, 
		{ type: 50, quantity: 1 },
		{ type: 20, quantity: 1 },
		{ type: 10, quantity: 0 },
		{ type: 5, quantity: 1 },
		{ type: 2, quantity: 1 },
		{ type: 1, quantity: 1 } 
	]);
});

test("Deve sacar dinheiro apenas com notas de 1", function () {
	const handler1 = new BillHandler(undefined, 1);
	const atm = new Atm(handler1);
	const bills = atm.withdraw(978);
	expect(bills).toStrictEqual([ 
		{ type: 1, quantity: 978 } 
	]);
});

test("Deve sacar dinheiro apenas com notas de 5 e 10", function () {
	const handler5 = new BillHandler(undefined, 5);
	const handler10 = new BillHandler(handler5, 10);
	const atm = new Atm(handler10);
	const bills = atm.withdraw(500);
	expect(bills).toStrictEqual([ 
		{ type: 10, quantity: 50 },
		{ type: 5, quantity: 0 } 
	]);
});