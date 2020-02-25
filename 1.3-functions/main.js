//задача 1
function getSolutions(a, b, c) {
	let D = Math.pow(b, 2) - (4 * a * c);
	let x1, x2;
	if (D < 0) {
		return {D: D};
	} else if (D == 0) {
		x1 = (- b) / (2 * a);
		return {roots: [x1], D: D};
	} else {
		x1 = (- b + Math.sqrt(D)) / (2 * a);
		x2 = (- b - Math.sqrt(D)) / (2 * a);
		return {roots: [x1,x2], D: D};
	}
}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\n`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if (result.D < 0) {
		console.log('Уравнение не имеет вещественных корней');
	} else if (result.D == 0) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots}`)
	} else {
		console.log(`равнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
	}
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

//задача 2
function getAverageScore(data) {
	let averageData = {};
	let averages = [];

	for(itemData in data) {
		let averageMark = averageValueArr(data[itemData]);
		averageData[itemData] = averageMark;
		averages.push(averageMark);
	}

	averageData.average = averageValueArr(averages);

	return averageData;
}

function averageValueArr(itemArr){
	let sumValue = 0;

	for(items of itemArr) {
		sumValue += items;
	}
	
	return sumValue / itemArr.length;
}

console.log(getAverageScore({
	algebra: [2, 4, 5, 2, 3, 4],
	geometry: [2, 4, 5],
	russian: [3, 3, 4, 5],
	physics: [5, 5],
	music: [2, 2, 6],
	english: [4, 4, 3],
	poetry: [5, 3, 4],
	chemistry: [2],
	french: [4, 4]
	}));
