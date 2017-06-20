export class ParseValueService {

	parseValue(value, min, max):number {
		value = parseInt(value);

		if(value != value)
			return min;

		if(value >= min && value <= max) {
			return value;
		}

		return min;
	}
}