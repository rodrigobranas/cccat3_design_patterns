export default interface Handler {
	handle(bills: any[], amount: number): void;
}
