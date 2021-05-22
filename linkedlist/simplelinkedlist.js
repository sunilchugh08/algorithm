class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    addElement(element){
        var node = new Node(element);
        var current;

        if(this.head == null){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(element,index){
        if(index > 0 && this.size < index){
            return false;
        }

        var node = new Node(element);
        var curr, prev;
        curr = this.head;
        if(index == 0){
            node.next = this.head;
            this.head = node;
        }else{

            while(index){
                index--;
                prev= curr;
                curr = curr.next;
            }

            prev.next = node;
            node.next = curr;
        }
        this.size++;
    }

    removeFrom(index){
        var curr, prev;
        if(index > 0 && this.size < index){
            return false;
        }
        curr = this.head;
        if(index ==0){
            this.head = curr.next;

        }else{
            while(index){
                index--;
                prev = curr;
                curr = curr.next;
            }
            prev.next = curr.next;
        }
        this.size --;
    }

    removeElement(element){
        var curr = this.head;
        var prev = null;

       
        
        while(curr != null ){

            if(curr.element == element){
                    if(prev == null){
                        this.head = curr.next;
                    }else{
                        prev.next = curr.next;
                    }
                    this.size--;
                    return true;
                }
                prev = curr;
                curr = curr.next;
            }
            return -1;
           
        }

        indexOf(element){
            var count =0;
            var curr = this.head;

            while(curr != null){
              
               
                if(curr.element == element){
                    return count;
                }

                curr = curr.next;
                count++;
            }
            return -1;
        }
        printList() { 
            var curr = this.head; 
            var str = ""; 
            while (curr) { 
                str += curr.element + " "; 
                curr = curr.next; 
            } 
            console.log(str); 
        } 
    
}

var ll = new LinkedList(); 
ll.addElement(10);
ll.addElement(20);
ll.addElement(30);
ll.addElement(40);

ll.addElement(50);
console.log("index of 40 is", ll.indexOf(40));
ll.printList();
ll.removeElement(30);
ll.printList();
ll.insertAt(3,4);
ll.printList();