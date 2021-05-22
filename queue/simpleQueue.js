class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
            return "underflow";
        }

        return this.items.shift();
    }

    front(){
        if(this.isEmpty()) 
             return "No elements in Queue"; 
        return this.items[0];
    }

    isEmpty(){
        return this.items.length == 0;
    }

    printQueue(){
        for(var i of this.items){
            console.log(i);
        }
    }
}

var queue = new Queue();
console.log(queue.dequeue());
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(6);
queue.enqueue(8);
queue.enqueue(10);
queue.printQueue();

console.log("dequeue",queue.dequeue());
queue.printQueue();

