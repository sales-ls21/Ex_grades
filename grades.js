
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var gradesArrA = [];
var gradesArrB = [];
var gradesArrC = [];
var gradesArrD = [];
var gradesArrF = [];

/* Logic: if the scores fall within a certain range, 
test the loop with a console.log, then, using the empty arrays created above, 
push that value to the appropriate array. */

for (let j = 0; j <= scores.length; j++) {
	if (scores[j] <= 60) {
		// console.log("F");
		gradesArrF.push(scores[j]);
		console.log(gradesArrF);		
	}

	else if (scores[j] > 60 && scores[j] < 70) {
		// console.log("D");
		gradesArrD.push(scores[j]);
		console.log(gradesArrD);
	}

	else if (scores[j] > 70 && scores[j] < 80) {
		// console.log("C");
		gradesArrC.push(scores[j]);
		console.log(gradesArrC);
	}
	
	else if (scores[j] >= 81 && scores[j]< 90) {
		// console.log("B");
		gradesArrB.push(scores[j]);
		console.log(gradesArrB);
	}

	else if (scores[j] >= 91 && scores[j] <= 100) {
		// console.log("A");
		gradesArrA.push(scores[j]);
		console.log(gradesArrA);
	}
}

// To find the # of occurences of each grade
console.log(gradesArrA.length);
console.log(gradesArrB.length);
console.log(gradesArrC.length);
console.log(gradesArrD.length);



// Highest Score
var highestScore = Math.max.apply(Math, scores);
console.log(highestScore);

// Lowest Score
var lowestScore = Math.min.apply(Math, scores);
console.log(lowestScore);


