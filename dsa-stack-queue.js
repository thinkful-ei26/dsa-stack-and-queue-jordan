//Create a stack called starTrek and add Kirk, Spock, McCoy, Scotty to the stack. 
//Remember that Stacks are LIFO (LAST IN FIRST OUT)

class _Node {
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor(){
        this.top = null;
    }

    //add data
    push(data){
        if (this.top === null){
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }

    //remove data
    pop(){
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

}