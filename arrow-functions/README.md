# JavaScript - Arrow functions

Arrow functions are used to define shorter functions as per the syntax.

* Syntax of Arrow function

    ```javascript
    const nameOfFunction = (parameters) => {
        //statements
    };
    nameOfFunction(arguments)
    ```

* We can remove the parenthesis `()` if we have only one parameter.

    ```javascript
    const greet = avenger => {
        return `Hello, ${avenger}`
    };
    ```

* We can remove the flower brackets `{}` if we have single statement which is returning something.

    ```javascript
    const greet = avenger => `Hello, ${avenger}`;
    ```
