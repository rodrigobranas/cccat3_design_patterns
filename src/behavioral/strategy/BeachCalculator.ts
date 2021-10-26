import Period from "./Period";
import TicketCalculator from "./TicketCalculator";

export default class BeachCalculator implements TicketCalculator {
	hourlyRate = 5;

	calculate(period: Period): number {
		return this.hourlyRate * period.getDiffInHours();
	}
}
