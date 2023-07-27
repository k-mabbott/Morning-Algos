/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.items = [];
    }

    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        this.items.push(item);
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        return this.items.shift();
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        return this.items[0];
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        // if(this.length < 1){
        //     return true;
        // }
        // return false;
        return this.items.length < 1;
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length;
    }

    /**
     * Logs the items of this queue.
     * - Time: O(n) linear.
     * - Space: O(n) linear.
     * @returns {string} The same string that is logged.
     */
    print() {
        const str = this.items.join(" ");
        console.log(str);
        return str;
    }
    /**
   * Compares this queue to another given queue to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(n^2) quadratic, n = queue length. Quadratic due to dequeue on an
   *     array queue being O(n).
   * - Space: O(1) constant.
   * @param {Queue} q2 The queue to be compared against this queue.
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
    compareQueues(q2){
        if(this.size() != q2.size()){
            return false;
        }
        let arr = true;
        for (let i = 0; i < q2.items.length; i++) {
            if(arr && this.front() != q2.front()){
                arr = false;
            }
            this.enqueue(this.dequeue());
            q2.enqueue(q2.dequeue());
        }
        return arr
    }

    /**
   * Determines if the queue is a palindrome (same items forward and backwards).
   * Avoid indexing queue items directly via bracket notation, instead use the
   * queue methods for practice.
   * Use only 1 stack as additional storage, no other arrays or objects.
   * The queue should be returned to its original order when done.
   * - Time: O(n^2) quadratic, n = queue length. Quadratic due to dequeue on an
   *     array queue being O(n).
   * - Space: O(n) from the stack being used to store the items again.
   * @returns {boolean}
   */
    isPalindrome(){
        if(this.items.length < 1 ){
            return false;
        }
        let stack = []
        for (let i = 0; i < this.items.length; i++) {
            const curr = this.dequeue()
            stack.push(curr);
            this.enqueue(curr);
        }
        let res = true;
        for (let i = 0; i < this.items.length; i++) {
            const curr = this.dequeue();
            const temp = stack.pop();
            // console.log("Curr =>", curr, "Temp =>", temp)
            if (res && curr != temp){
                res = false;
            }
            this.enqueue(curr);
        }
        return res;
    }
}

/* EXTRA: Rebuild the above class using a linked list instead of an array. */

/*
    In order to maintain an O(1) enqueue time complexity like .push with an array
    We add a tail to our linked list so we can go directly to the last node
*/

class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    }

    class LinkedListQueue {
    constructor() {
        this.top = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if the list is empty.
     */
    isEmpty() {
        return this.size < 1;
    }

    /**
     * Adds a given val to the back of the queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} val
     * @returns {number} The new size of the queue.
     */
    enqueue(val) {
        let node = new QueueNode(val);

        if(this.isEmpty()){
            this.top = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        this.size += 1;
        return this.size;
    }

    /**
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item.
     */
    dequeue() {
        if(this.isEmpty()){
            return undefined;
        }
        const top = this.top;
        this.top = top.next;
        this.size -= 1;
        return top;
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item.
     */
    front() {
        return this.top;  //.data?
    }

    /**
     * Determines if the given item is in the queue.
     * - Time: O(n) linear.
     * - Space: O(1) constant.
     * @param {any} searchVal
     * @returns {boolean}
     */
    contains(searchVal) {
        let pointer = this.top;
        if(pointer === null ) return false;
        while (pointer != null) {
            if( pointer.data == searchVal ){
                return true;
            }
            pointer = pointer.next;
        }
        return false;
    }
    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return "Queue is empty.";
        }

        let currentNode = this.top;
        const items = [];

        while (currentNode !== null) {
            items.push(currentNode.data);
            currentNode = currentNode.next;
        }
        const str = items.join(" ");
        console.log(str);
        return str;
    }
}




let queue = new Queue();
let queue2 = new Queue();
// console.log(queue.isEmpty());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(2);
queue.enqueue(1);
queue2.enqueue(1);
queue2.enqueue(2);
queue2.enqueue(3);
queue2.enqueue(4);
// queue.print();
// console.log(queue.compareQueues(queue2), "=> Should be same");
// queue.print();

// queue2.enqueue(4);
// console.log(queue.compareQueues(queue2), "=> Should be diff size");

// queue.enqueue(3);
// console.log(queue.compareQueues(queue2), "=> Should be same size diff vals");
// queue.print();
// queue2.print();

// console.log(queue.isPalindrome())
// console.log(queue2.isPalindrome())


// queue.print();
// console.log(queue.size());
// console.log(queue.front());
// console.log(queue.dequeue());
// console.log(queue.size());
// console.log(queue.isEmpty());
// console.log(queue.front());
// console.log(queue.dequeue());


const linkedqueue = new LinkedListQueue();
console.log(linkedqueue.isEmpty())
linkedqueue.enqueue(1)
linkedqueue.enqueue(2)
linkedqueue.enqueue(3)
linkedqueue.enqueue(4)
console.log(linkedqueue.isEmpty())
linkedqueue.print()
console.log(linkedqueue.front())
console.log(linkedqueue.dequeue())
linkedqueue.print()
console.log(linkedqueue.contains(5))

