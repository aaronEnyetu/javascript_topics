# JavaScript - Callback Hell

Callback hell is nesting muiltple callbacks within a function where one callback's output is depend on the previous callback.  

It is generally refers to an ineffective way of writing asynchronous code.

It makes the code very difficult to understand and maintain.

* Example of callback hell

    ```javascript
    getScore("Virat", (score) => {
        totalScore += score;
        getScore("Sachin", (score) => {
            totalScore += score;
            getScore("Sachin", (score) => {
                totalScore += score;
                printScore(totalScore);
            });
        });
    });
    ```

* We can use `promise` or `async/await` to avoid callback hell.
