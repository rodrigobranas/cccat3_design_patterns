import Period from "./Period";

export default interface TicketCalculator {

	calculate (period: Period): number;
}
