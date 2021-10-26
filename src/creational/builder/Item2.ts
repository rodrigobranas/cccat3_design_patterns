export default class Item {
	idItem: number;
	category: string;
	description: string;
	width: number;
	height: number;
	length: number;
	weight: number;

    constructor ({ idItem, category, description, width, height, length, weight }: { idItem: number, category: string, description: string, price: number, width: number, height: number, length: number, weight: number }) {
		this.idItem = idItem;
		this.category = category;
		this.description = description;
		this.width = width;
		this.height = height;
		this.length = length;
		this.weight = weight;
    }

    getVolume () {
        return this.width/100 * this.height/100 * this.length/100;
    }

    getDensity () {
        return this.weight/this.getVolume();
    }
}
