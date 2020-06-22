/*
 * Create an example of a JavaScript Singleton.
 * After the first object is created, it will return additional references to itself
 */

let singleton = (function () {
    let objInstance; //private variable

    function create() { //private function to create methods and properties
        let isRunning = false;
        let start = function(){
            isRunning = true;
        };
        let stop = function(){
            isRunning = false;
        };
        let currentState = function(){
            return isRunning;
        };
        return {
            start:start,
            stop:stop,
            currentState:currentState
        }
    }

    return {
        getInstance: function(){
            if(!objInstance){
                objInstance = create();
            }
            return objInstance; 
        }
    };
})();

let obj1 = singleton.getInstance();
let obj2 = singleton.getInstance();

console.log(obj1 === obj2); //true

obj1.start();
console.log(obj1.currentState()); //true
console.log(obj2.currentState()); //true