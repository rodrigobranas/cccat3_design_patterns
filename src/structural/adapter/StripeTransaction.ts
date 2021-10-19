export default class StripeTransaction {

	constructor (readonly code: string, readonly grossAmount: number, readonly situation: number) {
	}
}
