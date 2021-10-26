import ItemBuilder from "./ItemBuilder";

test("Deve criar um item", function () {
	const item = new ItemBuilder(1, "Instrumentos Musicais", "Guitarra", 1000)
		.setWidth(100)
		.setHeight(50)
		.setLength(30)
		.setWeight(3)
		.build();
	const volume = item.getVolume();
	expect(volume).toBe(0.15);
});
