import Period from "./Period";
import TicketCalculator from "./TicketCalculator";

export default class ShoppingCalculator implements TicketCalculator {
	baseRate = 10;
	basePeriod = 3;
	hourlyRate = 3;

	calculate(period: Period): number {
		let price = this.baseRate;
		const remainingHours = period.getDiffInHours() - this.basePeriod;
		if (remainingHours > 0) price += remainingHours * this.hourlyRate;
		return price;
	}
}
