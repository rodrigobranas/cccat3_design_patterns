import ParkingLot from "./ParkingLot";

test("Deve criar um estacionamento", function () {
	const parkingLot = new ParkingLot("airport", 500);
	expect(parkingLot.getSlots()).toBe(500);
});

test("Deve estacionar um carro", function () {
	const parkingLot = new ParkingLot("airport", 500);
	parkingLot.checkin("AAA-1111", new Date("2021-10-01T10:00"));
	expect(parkingLot.getSlots()).toBe(499);
});

test("Deve estacionar o carro na praia por 2 horas e ao sair o valor deve ser 10 reais, 5 reais por hora", function () {
	const parkingLot = new ParkingLot("beach", 500);
	parkingLot.checkin("AAA-1111", new Date("2021-10-01T10:00"));
	parkingLot.checkout("AAA-1111", new Date("2021-10-01T12:00"));
	const ticket = parkingLot.getTicket("AAA-1111");
	expect(ticket.price).toBe(10);
});

test("Deve estacionar o carro no shopping por 7 horas e ao sair o valor deve ser 22 reais, 10 reais as primeiras 3 horas e depois 3 reais por hora", function () {
	const parkingLot = new ParkingLot("shopping", 500);
	parkingLot.checkin("AAA-1111", new Date("2021-10-01T10:00"));
	parkingLot.checkout("AAA-1111", new Date("2021-10-01T17:00"));
	const ticket = parkingLot.getTicket("AAA-1111");
	expect(ticket.price).toBe(22);
});

test("Deve estacionar o carro no aeroporto por 3 dias e ao sair o valor deve ser 150 reais, 50 reais por dia", function () {
	const parkingLot = new ParkingLot("airport", 500);
	parkingLot.checkin("AAA-1111", new Date("2021-10-01T10:00"));
	parkingLot.checkout("AAA-1111", new Date("2021-10-04T10:00"));
	const ticket = parkingLot.getTicket("AAA-1111");
	expect(ticket.price).toBe(150);
});
