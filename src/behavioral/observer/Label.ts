import Observer from "./Observer";

export default class Label implements Observer {
	value: string;

	constructor (readonly expression: string) {
		this.value = "";
	}

	notify(name: string, value: string): void {
		this.value = this.expression.replace(`{{${name}}}`, value);
	}
}
