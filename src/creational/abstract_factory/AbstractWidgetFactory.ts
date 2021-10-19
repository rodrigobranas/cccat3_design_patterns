import Button from "./Button";
import Label from "./Label";

export default interface AbstractWidgetFactory {
	createLabel(): Label;
	createButton(): Button;
}
