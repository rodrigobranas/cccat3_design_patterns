import AirportCalculator from "./AirportCalculator";
import BeachCalculator from "./BeachCalculator";
import ShoppingCalculator from "./ShoppingCalculator";
import TicketCalculator from "./TicketCalculator";

export default class TicketCalculatorFactory {

	static create (location: string): TicketCalculator {
		switch (location) {
			case "beach": {
				return new BeachCalculator();
			}
			case "shopping": {
				return new ShoppingCalculator();
			}
			case "airport": {
				return new AirportCalculator();
			}
		}
		throw new Error("Ticket calculator not found");
	}
}
