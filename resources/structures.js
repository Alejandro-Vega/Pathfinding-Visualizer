class Queue {
    constructor() {
        this.elements = [];
    }
    
    enqueue(element) {
        this.elements.push(element);
    }
    dequeue() {
        return this.elements.shift();
    }
    isEmpty() {
        return this.elements.length == 0;
    }
    peek() {
        return !this.isEmpty() ? this.elements[0] : undefined;
    }
    length() {
        return this.elements.length;
    }
}


class Stack {
    constructor() {
        this.elements = [];
    }

    push(element) {
        this.elements.push(element);
    }
    pop() {
        if (this.elements.length == 0) {
            return "Underflow";
        }
        return this.elements.pop();
    }
    peek() {
        return this.elements[this.elements.length - 1];
    }
    isEmpty() {
        return this.elements.length == 0;
    }
    printStack() {
        let str = "";
        for (let i = 0; i < this.elements.length; i++) {
            str += this.elements[i] + " ";
            return str;
        }
    }


}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));