export default class Participant {

	constructor (readonly name: string) {
	}

	send (to: Participant, message: string) {
		to.receive(this, message);
	}

	receive (from: Participant, message: string) {
		console.log(`O participante ${from.name} mandou para ${this.name}: ${message}`);
	}
}
