console.log("Stack Implementation ");


class Stack {
    constructor (){
        this.Stack = [];
    }

    push(ele){
        this.Stack.push(ele);
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        return this.Stack.pop();
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        return this.Stack[this.size() - 1];
    }
    isEmpty(){
        return this.size() === 0;
    }

    size(){
        return this.Stack.length;
    }
}


const stack = new Stack();

stack.push(20);
stack.push(40);
stack.push(60);
stack.push(80);

stack.pop();
stack.isEmpty();
console.log(stack.size());
console.log(stack.peek());


