class Node {
    constructor(){
        this.value = null
        this.nextNode = null
    }
}

class LinkedList {
    #head
    #tail
    constructor(){
        this.#head = null
        this.#tail = null
    }

    append(value){
        const newNode = new Node()
        newNode.value = value

        if (this.#head == null){
            this.#head = newNode
        }else if(this.#head.nextNode == null){
            this.#tail = newNode
            this.#head.nextNode = newNode
        }else{
            this.#tail.nextNode = newNode
            this.#tail = newNode
        }
    }

    prepend(value){
        const newNode = new Node()
        newNode.value = value

        newNode.nextNode = this.#head
        this.#head = newNode
    }

}