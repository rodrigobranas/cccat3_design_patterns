import AbstractWidgetFactory from "./AbstractWidgetFactory";
import Button from "./Button";
import Label from "./Label";
import LightButton from "./LightButton";
import LightLabel from "./LightLabel";

export default class LightThemeFactory implements AbstractWidgetFactory {

	createLabel(): Label {
		return new LightLabel();
	}

	createButton(): Button {
		return new LightButton();
	}
}
