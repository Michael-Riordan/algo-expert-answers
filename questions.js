
/*----------------------------------------------------------------------------------------------------*/
//TWO NUMBER SUM

/*
const array = [3, 5, -4, 8, 11, -1, 6];
const targetSum = 19;
//least optimal solution - O(n^2) time O(1) space;
function twoNumberSum(array, targetSum) {
    let nums = [];
    array.forEach(num => {
        array.forEach(num2 => {
            if (num + num2 === targetSum && num !== num2) {
                nums = [num, num2];
            }
        })
    })
    return nums;
}
*/

//most optimal solution - O(n) time O(n) space;
/*
const array = [3, 5, -4, 8, 11, -1, 6];
const targetSum = 19;
function twoNumberSum(array, targetSum) {
    const nums = {};
    for (const num of array) {
        potentialMatch = targetSum - num;
        if (potentialMatch in nums) {
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
    }
    return [];
}
console.log(twoNumberSum(array, targetSum));
*/


/*----------------------------------------------------------------------------------------------------*/
//VALIDATE SUBSEQUENCE

/* 
correct answer 1
const originalArray = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

function isValidSubsequence(array, sequence) {
    let isSubsequence = true;

    const filtered = array.filter((num) => {
        return sequence.includes(num);
    })

    if (filtered.length >= sequence.length) {
        filtered.some((num, index) => {
            if (sequence[index] !== num && sequence[index] != undefined) {
                isSubsequence = false;
                return;
            }
        })
    } else {
        isSubsequence = false;
    }
    
    return isSubsequence;
}

console.log(isValidSubsequence(originalArray, sequence));
*/

//optimal answer
//const originalArray = [5, 1, 22, 25, 6, -1, 8, 10];
//const sequence = [1, 6, -1, 10];
/*
function isValidSubsequence(array, sequence) {
    let index = 0;

    for (const value of array) {
        console.log(index);
        if (index === sequence.length) break;
        if (sequence[index] === value) index++;
    }
    
    console.log(index, sequence.length);
    return (index === sequence.length);
}
console.log(isValidSubsequence(originalArray, sequence))
/*

/*----------------------------------------------------------------------------------------------------*/
//SORTED SQUARED ARRAY

/*
const array = [-10, -5, 0, 5, 10]

//most optimal solution
function sortedSquaredArray(array) {
    const sortedSquares = new Array(array.length).fill(0);
    let smallestSortIndex = 0;
    let largestSortIndex = array.length - 1;

    for (let idx = array.length - 1; idx >= 0; idx--) {
        smallerValue = array[smallestSortIndex];
        largerValue = array[largestSortIndex];

        if (Math.abs(smallerValue) > Math.abs(largerValue)) {
            sortedSquares[idx] = smallerValue * smallerValue;
            smallestSortIndex++;
        } else {
            sortedSquares[idx] = largerValue * largerValue;
            largestSortIndex--;
        }
    }

    return sortedSquares;
}

console.log(sortedSquaredArray(array));
*/

/*----------------------------------------------------------------------------------------------------*/
//TOURNAMENT WINNER

/*
const competitions = [
    ['HTML', 'C#'],
    ['C#', 'PYTHON'],
    ['PYTHON', 'HTML'],
];

const results = [0, 0, 1];

function tournamentWinner(competitions, results) {
    const teams = {};
    competitions.forEach(match => {
        match.forEach((team, i) => {
            teams[team] = 0;
        })
    })
    
    results.forEach((result, i) => {
        if (result === 0) {
            const winner = 1;
            const winningTeam = competitions[i][winner];
            teams[winningTeam] += 3;
        } else {
            const winner = 0;
            const winningTeam = competitions[i][winner];
            teams[winningTeam] += 3;
        }
    })

    let winner;
    let highestScore = 0;

    Object.keys(teams).forEach(team => {
        if (teams[team] > highestScore) {
            winner = team;
            highestScore = teams[team];
        }
    })

    return winner;
}

console.log(tournamentWinner(competitions, results));
*/ 

/*
//most optimal solution
const competitions = [
    ['HTML', 'C#'],
    ['C#', 'PYTHON'],
    ['PYTHON', 'HTML'],
];

const results = [0, 0, 1];
const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
    let currentBestTeam = '';
    const scores = {[currentBestTeam]: 0};

    for (let idx = 0; idx < competitions.length; idx++) {
        const result = results[idx];
        const [homeTeam, awayTeam] = competitions[idx];

        const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

        updateScores(winningTeam, 3, scores);

        if (scores[winningTeam] > scores[currentBestTeam]) {
            currentBestTeam = winningTeam;
        }
    }
    console.log(scores);
    return currentBestTeam;
}


function updateScores(team, points, scores) {
    if (!(team in scores)) {
        scores[team] = 0;
    }

    scores[team] += points;
}
console.log(tournamentWinner(competitions, results));
*/

/*----------------------------------------------------------------------------------------------------*/
//NON-CONSTRUCTIBLE CHANGE;
/*
const coins = [1, 1, 1, 1, 1];

function nonConstructibleChange(coins) {
    const sortedCoins = coins.sort((a, b) => a - b);
    let minimumPossibleChange = 0;

    for (const value of sortedCoins) {
        if (value > minimumPossibleChange + 1) {
            break;
        } else if (value <= minimumPossibleChange + 1) {
            minimumPossibleChange += value;
        }
    }

    return minimumPossibleChange + 1;
}

console.log(nonConstructibleChange(coins));
*/

/*----------------------------------------------------------------------------------------------------*/
//TRANSPOSE MATRIX;
//time and space complexity = O(n * m);
/*
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

function transposeMatrix(matrix) {
    let transposedMatrix = new Array(matrix[0].length);
    for (let i = 0; i < matrix[0].length; i++) {
        transposedMatrix[i] = new Array(matrix.length);
    }

    for (let idx = 0; idx < matrix.length; idx++) {
        for (let i = 0; i < matrix[idx].length; i++) {
            transposedMatrix[i][idx] = matrix[idx][i];
        }
    }

    return transposedMatrix;
}

console.log(transposeMatrix(matrix));
*/

/*----------------------------------------------------------------------------------------------------*/
//FIND CLOSEST VALUE IN BST (BINARY SEARCH TREE);
const tree = {
    "nodes": [
      {"id": "10", "left": "5", "right": "15", "value": 10},
      {"id": "15", "left": "13", "right": "22", "value": 15},
      {"id": "22", "left": null, "right": null, "value": 22},
      {"id": "13", "left": null, "right": "14", "value": 13},
      {"id": "14", "left": null, "right": null, "value": 14},
      {"id": "5", "left": "2", "right": "5-2", "value": 5},
      {"id": "5-2", "left": null, "right": null, "value": 5},
      {"id": "2", "left": "1", "right": null, "value": 2},
      {"id": "1", "left": null, "right": null, "value": 1}
    ],
    "root": "10"
  }
const target = 12;

function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
    if (tree === null) return closest;
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value;
    }

    if (target < tree.value) {
        return findClosestValueInBstHelper(tree.left, target, closest);
    } else if (target > tree.value) {
        return findClosestValueInBstHelper(tree.right, target, closest);
    } else {
        return closest;
    }
}

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const closestValue = findClosestValueInBst(tree, target);
console.log(closestValue);










