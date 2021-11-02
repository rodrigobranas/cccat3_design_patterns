import Observable from "./Observable";

export default class InputText extends Observable {
	value: string;

	constructor (readonly name: string) {
		super();
		this.value = "";
	}

	setValue (value: string) {
		this.value = value;
		this.notifyAll(this.name, this.value);
	}
}
