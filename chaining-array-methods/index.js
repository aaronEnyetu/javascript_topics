const scores = [-1, 10, -20, 30, 100, 12, 132, -20, -90, 143, 68, -76];

const positiveScoresSum  = scores.filter((score) => {
    return score > 0
}).reduce((sum, score) => {
    return sum += score
}, 0);

console.log(positiveScoresSum);