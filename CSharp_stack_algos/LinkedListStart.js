


class SLNode {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class SLList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

}