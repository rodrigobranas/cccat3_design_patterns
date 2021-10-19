export default class PayPalTransaction {

	constructor (readonly id: number, readonly amount: number, readonly status: string) {
	}
}
