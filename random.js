/*
	RANDOM NUMBER GENERATOR
		Options
			(max)
			(min, max)
			(min, max, interval)
*/

var random = function(r1, r2, r3) {
	var
		min      = 0,
		max      = 0,		
		interval = 1;
	
	if (typeof(r1) != "undefined") {
		min = 0;
		max = r1;
	}
	
	if (typeof(r2) != "undefined") {
		min = r1;
		max = r2;			
	}
	
	if (typeof(r3) != "undefined") {
		interval = r3;
	}
	
	var result = Math.floor(Math.random() * (max - min)) + min;
	
	if (interval > 1) {
		result = Math.round(result / interval) * interval;
	}

	return result;
};