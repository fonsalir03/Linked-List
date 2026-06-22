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
            size(){
        if (this.#head == null){
            return 0
        }
        
        let tmp = this.#head
        let size = 1
        while (tmp.nextNode){
            size++
            tmp = tmp.nextNode
        }
        return size
    }
    head(){
        if (this.#head == null){
            return undefined
        }
        return this.#head.value
    }
    tail(){
        if (this.#head == null){
            return undefined
        }
        return this.#tail.value
    }
    at(index){
        if (index < 0){
            return undefined
        }
        if (index >= this.size()){
            return undefined
        }

        let currentNode = this.#head
        for (let i = 0; i < index; i++){
            currentNode = currentNode.nextNode
        }
        return currentNode.value
    }

}