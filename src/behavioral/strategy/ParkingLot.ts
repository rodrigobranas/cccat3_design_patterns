import Period from "./Period";
import TicketCalculator from "./TicketCalculator";
import TicketCalculatorFactory from "./TicketCalculatorFactory";

export default class ParkingLot {
	tickets: { plate: string, checkinDate: Date, price?: number }[];
	ticketCalculator: TicketCalculator;

	constructor (readonly location: string, readonly totalSlots: number) {
		this.tickets = [];
		this.ticketCalculator = TicketCalculatorFactory.create(this.location);
	}

	checkin (plate: string, checkinDate: Date) {
		this.tickets.push({ plate, checkinDate });
	}

	checkout (plate: string, checkoutDate: Date) {
		const ticket = this.getTicket(plate);
		const period = new Period(ticket.checkinDate, checkoutDate);
		ticket.price = this.ticketCalculator.calculate(period);
	}

	getTicket (plate: string) {
		const ticket = this.tickets.find(ticket => ticket.plate === plate);
		if (!ticket) throw new Error("Ticket not found");
		return ticket;
	}

	getSlots () {
		return this.totalSlots - this.tickets.length;
	}
}
