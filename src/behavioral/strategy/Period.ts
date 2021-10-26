export default class Period {

	constructor (readonly startDate: Date, readonly endDate: Date) {
	}

	getDiffInMilli () {
		return this.endDate.getTime() - this.startDate.getTime();
	}

	getDiffInHours () {
		return ((this.getDiffInMilli())/(1000*60*60));
	}

	getDiffInDays () {
		return ((this.getDiffInMilli())/(1000*60*60*24));
	}
}
