import InputText from "./InputText";
import Label from "./Label";

test("Deve escrever no input e exibir os dados atualizados na label", function () {
	const inputText = new InputText("country");
	const labelA = new Label("País: {{country}}");
	const labelB = new Label("Country: {{country}}");
	inputText.subscribe(labelA);
	inputText.subscribe(labelB);
	inputText.setValue("Brasil");
	expect(labelA.value).toBe("País: Brasil");
	expect(labelB.value).toBe("Country: Brasil");
	inputText.setValue("França");
	expect(labelA.value).toBe("País: França");
	expect(labelB.value).toBe("Country: França");
});