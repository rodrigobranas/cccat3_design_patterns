import Item from "./Item";

export default class Water extends Item {

	constructor (readonly description: string, readonly price: number) {
		super("Water", description, price);
	}
}
