//Remember that Stacks are LIFO (LAST IN FIRST OUT)
//Operations are done at top of the stack 
//SLL, pointer to top
//uses push and pop O(1);


class _Node {
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

//create the stack class 
class Stack {
    constructor(){
        this.top = null;
        this.count = 0;
    }

    //add data, set it to the top of the stack
    push(data){
        if (this.top === null){
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
        this.count++;
    }

    //remove data
    pop(){
        let node = this.top;
        this.top = node.next;
        this.count--;
        return node.data;
    }

    //get the count/number of items
    length(){
        return this.count +1;
    }

    peek(){
        return this.top.data;
    }
}

//add Kirk, Spock, McCoy, Scotty
//in here call starTrek === new stack
//send the stack through the peek function (like yesterday LL)
function main(){
    let starTrek = new Stack();
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    starTrek.pop('Scotty');
    starTrek.pop('McCoy');
    starTrek.push('Scotty');
    console.log(starTrek.peek());
    console.log(starTrek.length());
}
// main()

// if original string = the reverse one, it's a palindrome
// push each character of the string onto a stack
// when we pop off of the stack, concat and that will be reversed

function is_palindrome(s){
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let stack = new Stack();
    let rev = ""
//create a stack by pushing each letter from the string
    for (let i = 0; i < s.length; i++){
        stack.push(s[i]);
    }

//pop off each letter starting from the END and add it to rev
    for (let i = 0; i <s.length; i++){
        rev += stack.pop(s[i]);
    }
//check if the original string equals the newly reversed string
    if(s === rev){
        return true;
    }
    else{
        return false;
    }

};

//expected output: true, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Jordan"));