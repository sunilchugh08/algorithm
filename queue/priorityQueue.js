class QElement {
    constructor(element,priority){
        this.element = element;
        this.priority = priority;
    }
}


class PriorityQueue{
    constructor(){
        this.items = [];
    }

    enqueue(element,priority){
        var pElement = new QElement(element,priority);
        if(this.isEmpty()){
            this.items.push(pElement);
            return;
        }
        var contain =false;

        for(var i=0; i< this.items.length; i++){
            if(pElement.priority < this.items[i].priority){
                this.items.splice(i,0,pElement);
                contain = true;
                break;
            }
           
        }
        if(!contain){
            this.items.push(pElement);
        }
    }

    dequeue(){
        if(this.isEmpty()){
            console.log( "underflow");
            return;
        }

        return this.items.shift();
    }
    isEmpty(){
        return this.items.length == 0;
    }

    front(){
        if(this.isEmpty()){
            return "underflow";
        }

        return this.items[0];
    }

    rear(){
        if(this.isEmpty()){
            return "no element in queue";
        }

        return this.items[this.items.length-1];
    }

    printQueue(){
        for(var i=0; i< this.items.length; i++){
            console.log(this.items[i].element," ",this.items[i].priority);
        }
    }
}


var pqueue = new PriorityQueue();

pqueue.enqueue("ashish",10);
pqueue.enqueue("veenu",1);
pqueue.enqueue("sunil",2);
pqueue.enqueue("san",12);
pqueue.printQueue();
pqueue.dequeue();
console.log("--------------");
pqueue.printQueue();
console.log("--------------");
console.log(pqueue.rear().element); 
console.log(pqueue.front().element); 

