let doubleValues = function(array) {
	return array.map(function(value) {
		return value * 2;
	});
};
console.log(doubleValues([ 1, 2, 3 ]));
console.log(doubleValues([ 5, 1, 2, 3, 10 ]));

let onlyEvenValues = function(array) {
	return array.filter(function(value) {
		return value % 2 === 0;
	});
};
console.log(onlyEvenValues([ 1, 2, 3 ]));
console.log(onlyEvenValues([ 5, 1, 2, 3, 10 ]));

let showFirstAndLast = function(array) {
	return array.map(function(value) {
		let first = value[0];
		let last = value[value.length - 1];
		return first + last;
	});
};
console.log(showFirstAndLast([ 'colt', 'matt', 'tim', 'test' ]));
console.log(showFirstAndLast([ 'hi', 'goodbye', 'smile' ]));

let addKeyAndValue = function(array, key, value) {
	return array.map(function(item) {
		let object = item;
		object[key] = value;
		return object;
	});
};
console.log(
	addKeyAndValue([ { name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' } ], 'title', 'instructor')
);

let vowelCount = function(string) {
	let object = {};
	let array = Array.from(string).map(function(value) {
		let number = 0;
		value = value.toLowerCase();
		for (let i of string) {
			i = i.toLowerCase();
			if (i === value) {
				number++;
			}
		}
		object[value] = number;
	});
	for (let i in object) {
		if ('aeiou'.indexOf(i) == -1) {
			delete object[i];
		}
	}
	return object;
};
console.log(vowelCount('Elie'));
console.log(vowelCount('Tim'));
console.log(vowelCount('Matt'));
console.log(vowelCount('hmmm'));
console.log(vowelCount('I Am awesome and so are you'));

let doubleValuesWithMap = function(array) {
	return array.map(function(value) {
		return value * 2;
	});
};
console.log(doubleValuesWithMap([ 1, 2, 3 ]));
console.log(doubleValuesWithMap([ 1, -2, -3 ]));

let valTimesIndex = function(array) {
	return array.map(function(value, index) {
		return value * index;
	});
};
console.log(valTimesIndex([ 1, 2, 3 ]));
console.log(valTimesIndex([ 1, -2, -3 ]));

let extractKey = function(array, key) {
	return array.map(function(value) {
		return value[key];
	});
};
console.log(extractKey([ { name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' } ], 'name'));

let extractFullName = function(array) {
	return array.map(function(value) {
		return `${value['first']} ${value['last']}`;
	});
};
console.log(
	extractFullName([
		{ first: 'Elie', last: 'Schoppik' },
		{ first: 'Tim', last: 'Garcia' },
		{ first: 'Matt', last: 'Lane' },
		{ first: 'Colt', last: 'Steele' }
	])
);

let filterByValue = function(array, key) {
	return array.filter(function(value) {
		if (value[key]) {
			return true;
		} else {
			return false;
		}
	});
};
console.log(
	filterByValue(
		[
			{ first: 'Elie', last: 'Schoppik' },
			{ first: 'Tim', last: 'Garcia', isCatOwner: true },
			{ first: 'Matt', last: 'Lane' },
			{ first: 'Colt', last: 'Steele', isCatOwner: true }
		],
		'isCatOwner'
	)
);

let find = function(array, value) {
	let filter = array.filter(function(item) {
		if (item === value) {
			return true;
		}
	});
	if (filter[0]) {
		return filter[0];
	}
};
console.log(find([ 1, 2, 3, 4, 5 ], 3));
console.log(find([ 1, 2, 3, 4, 5 ], 10));

let findInObj = function(array, key, value) {
	let filter = array.filter(function(item) {
		if (item[key] === value) {
			return true;
		} else {
			return false;
		}
	});
	if (filter[0]) {
		return filter[0];
	}
};
console.log(
	findInObj(
		[
			{ first: 'Elie', last: 'Schoppik' },
			{ first: 'Tim', last: 'Garcia', isCatOwner: true },
			{ first: 'att', last: 'Lane' },
			{ first: 'Colt', last: 'Steele', isCatOwner: true }
		],
		'isCatOwner',
		true
	)
);

let removeVowels = function(string) {
	string = string.toLowerCase();
	return Array.from(string)
		.filter(function(value) {
			return 'aeiou'.indexOf(value) === -1;
		})
		.join('');
};
console.log(removeVowels('Elie'));
console.log(removeVowels('TIM'));
console.log(removeVowels('ZZZZZZ'));

let doubleOddNumbers = function(array) {
	return array
		.filter(function(value) {
			return value % 2 === 1;
		})
		.map(function(value) {
			return value * 2;
		});
};
console.log(doubleOddNumbers([ 1, 2, 3, 4, 5 ]));
console.log(doubleOddNumbers([ 4, 4, 4, 4, 4 ]));
