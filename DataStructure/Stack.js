//stack functions: push, pop, peek, size/length

//1. Array is a stack
/*
function isPalindrome(word){

    let letters =[];
    let rword = "";

    for(let i = 0; i < word.length; i++){
        letters.push(word[i]);
    }

    for(let i = 0; i < word.length; i++){
        rword +=  letters.pop();
    }

    return word === rword;
}

console.log(isPalindrome("racecar")); //true
console.log(isPalindrome("windows")); //false
*/

//2. Prototypical stack
/*
function Stack(){
    this.count = 0;
    this.storage = {};
}

Stack.prototype.push = function(value){
    this.storage[this.count] = value;
    this.count++;
};

Stack.prototype.pop = function(){
    if(this.count === 0){
        return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];

    return result;
};

Stack.prototype.peek = function(){
    return this.storage[this.count-1];
};

Object.defineProperty(Stack.prototype,'size',{
    get: function(){
        return this.count;
    }
});
*/

//3. ES6 Stack class

class Stack{
    constructor(){
        this.count = 0;
        this.storage = {};
    }

    push(value){
       this.storage[this.count] = value;
       this.count++; 
    }

    pop(){
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];

        return result;       
    }

    peek(){
        return this.storage[this.count - 1];
    }

    get size(){
        return this.count;
    }
}

let s1 = new Stack();
s1.push('red');
s1.push('green');
s1.push('blue');
console.log(s1.size); // 3
console.log(s1.peek()); // blue
console.log(s1.pop()); // blue
console.log(s1.pop()); // greeen