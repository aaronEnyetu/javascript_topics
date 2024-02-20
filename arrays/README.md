# JavaScript - Arrays

Arrays in JavaScript will store heterogeneous values.

* Create an array:

    ```javascript
    const nameOfArray = [item1, item2, ...]; 
    ```

* Accessing the elements:

    ```javascript
    const avengers = ["Ironman", "Thor", "Thanos", 3000];
    let avenger = avengers[0]; 
    ```

* Add element to the array:

    ```javascript
    avengers.push("Captain"); //add at the end
    avengers[0] = "Captain"; //index based adding
    ```

* Properties and Methods:

    ```javascript
    avengers.length   // returns the number of avengers
    avengers.sort()   // sorts the avengers
    avengers.indexOf("ironman") // return index value of ironman
    avengers.pop() // delete last indexed value of avengers
    ```

* `NOTE:` adding elements with high indexes can create undefined values in an array.
