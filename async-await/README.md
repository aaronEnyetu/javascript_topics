# JavaScript - Async & Await

Async/await is a syntax sugar built on top of promises.

It internally resolves promises as well as makes it easier for developers to write readable code.

Async/await is a better way than promises to resolve the callback hell situation.

* Example of async & await

    ```javascript
    const getScore = async () => {
        const player = await getPlayer();
        return player.score;
    };
    ```
