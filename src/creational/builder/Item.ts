import ItemBuilder from "./ItemBuilder";

export default class Item {
	idItem: number;
	category: string;
	description: string;
	width: number | undefined;
	height: number | undefined;
	length: number | undefined;
	weight: number | undefined;

    constructor (itemBuilder: ItemBuilder) {
		this.idItem = itemBuilder.idItem;
		this.category = itemBuilder.category;
		this.description = itemBuilder.description;
		this.width = itemBuilder.width;
		this.height = itemBuilder.height;
		this.length = itemBuilder.length;
		this.weight = itemBuilder.weight;
    }

    getVolume () {
		if (!this.width || !this.height || !this.length) return 0;
        return this.width/100 * this.height/100 * this.length/100;
    }

    getDensity () {
		if (!this.width || !this.height || !this.length || !this.weight) return 0;
        return this.weight/this.getVolume();
    }
}
