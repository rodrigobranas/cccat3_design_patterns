import PayPalTransaction from "./PayPalTransaction";
import PayPalTransactionAdapter from "./PayPalTransactionAdapter";
import StripeTransaction from "./StripeTransaction";
import StripeTransactionAdapter from "./StripeTransactionAdapter";

test("Deve criar uma transação do Stripe", function () {
	const stripeTransaction = new StripeTransaction("AHN765NHD89", 1000, 2);
	expect(stripeTransaction.code).toBe("AHN765NHD89");
});

test("Deve criar uma transação do PayPal", function () {
	const paypalTransaction = new PayPalTransaction(7897897, 1000, "S");
	expect(paypalTransaction.id).toBe(7897897);
});

test("Deve criar uma transação a partir do Stripe", function () {
	const stripeTransaction = new StripeTransaction("AHN765NHD89", 1000, 2);
	const transaction = new StripeTransactionAdapter(stripeTransaction);
	expect(transaction.trackNumber).toBe("AHN765NHD89");
	expect(transaction.amount).toBe(1000);
	expect(transaction.status).toBe("paid");
});

test("Deve criar uma transação a partir do PayPal", function () {
	const paypalTransaction = new PayPalTransaction(7897897, 1000, "S");
	const transaction = new PayPalTransactionAdapter(paypalTransaction);
	expect(transaction.trackNumber).toBe("7897897");
	expect(transaction.amount).toBe(1000);
	expect(transaction.status).toBe("paid");
});
