import Item from "./Item";

export default class ItemBuilder {
	width: number | undefined;
	height: number | undefined;
	length: number | undefined;
	weight: number | undefined;

	constructor (readonly idItem: number, readonly category: string, readonly description: string, readonly price: number) {
	}

	setWidth (width: number) {
		this.width = width;
		return this;
	}

	setHeight (height: number) {
		this.height = height;
		return this;
	}

	setLength (length: number) {
		this.length = length;
		return this;
	}

	setWeight (weight: number) {
		this.weight = weight;
		return this;
	}

	build () {
		const item = new Item(this);
		return item;
	}
}
