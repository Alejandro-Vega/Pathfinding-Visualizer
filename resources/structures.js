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