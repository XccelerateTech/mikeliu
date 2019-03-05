// mike's codes

// logic
// divisible by 4 -> no -> X leap year,
// yes -> divisible by 200 -> no-> leap year,
// yes -> divisible by 400 -> X leap year, yes -> leap year

export const isLeap = (a) => {
	
	if (a % 4 === 0 && a % 100 !== 0) {
		return true;

	} else if (a % 400 === 0) {
		return true;

	} else if (a % 200 !== 0) {
		return false;

	} else {
		return false;
	}
}