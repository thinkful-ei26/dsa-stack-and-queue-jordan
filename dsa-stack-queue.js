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

//create a stack called starTrek
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
    console.log(starTrek)
    return main;
}

main()

function is_palindrome(s){
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    sArr = s.split("");
    sRev = sArr.reverse();
    sRevJoin = sRev.join("");

    if(s === sRevJoin){
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
console.log(is_palindrome("Tauhida"));