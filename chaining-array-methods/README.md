# JavaScript - Chaining Array methods

Chaining the arrays methods will make our code to look prettier and less.

* Example:
  * Find the total score of positive scores.

    ```javascript
    const scores = [-1, 10, -20, 30, 100, 12, 132, -20, -90, 143, 68, -76];
    const positiveScoresSum  = scores.filter(score => score > 0)
                                     .reduce((sum, score) => sum += score, 0);
    console.log(positiveScoresSum);
    ```
