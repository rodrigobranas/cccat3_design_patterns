import Item from "./Item";

export default abstract class TaxItem extends Item {

	calculateTax () {
		return (this.price * this.getTaxRate())/100;
	}

	abstract getTaxRate (): number;
}
