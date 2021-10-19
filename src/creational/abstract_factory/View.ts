import AbstractWidgetFactory from "./AbstractWidgetFactory";
import Button from "./Button";
import Label from "./Label";

export default class View {
	label: Label;
	button: Button;

	constructor (abstractWidgetFactory: AbstractWidgetFactory) {
		this.label = abstractWidgetFactory.createLabel();
		this.button = abstractWidgetFactory.createButton();
	}
}
