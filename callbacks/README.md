# JavaScript - Callbacks

A callback is a function passed as an argument to another function.

* Syntax of Callback function

    ```javascript
    const nameOfFunction = (parameters, callback) => {
        //statements
        callback();
    };
    const callbackFunction = () => {
        //statements
    };
    nameOfFunction(arguments, callbackFunction)
    ```
