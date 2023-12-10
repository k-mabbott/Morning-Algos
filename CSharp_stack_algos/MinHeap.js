/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
    constructor() {
        /**
         * 0th index not used, so null is a placeholder. Not using 0th index makes
         * calculating the left and right children's index cleaner.
         * This also effectively makes our array start at index 1.
         */
        this.heap = [null];
    }

    size() {
        return this.heap.length - 1;
    }

    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    top() {
        return this.heap[1] ? this.heap[1] : null;
    }

    /**
     * Inserts a new number into the heap and maintains the heaps order.
     * 1. Push new num to back then.
     * 2. Iteratively swap the new num with it's parent while it is smaller than
     *    it's parent.
     * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
     * - Space: O(1) constant.
     * @param {number} num The num to add.
     */

    // ******* FIX THIS ONEEEEE

    // get idx of parent.  Node at end of heap (heap.size)
    // while parent val is greater than new node swap values keep track of IDX // so smallest is on top
    // if swapped after swap check to see if newest node's left is less than self. 
    // if so swap.
    // insert(num) {
    //     this.heap.push(num);

    //     let index = this.heap.size();
    //     let parent = this.IdxOfParent(index);
    //     // let temp;
    //     while (this.heap[parent] > this.heap[index]) {
    //         [ this.heap[parent], this.heap[index]] = [this.heap[index] , this.heap[parent]]
    //         // temp = this.heap[parent]
    //         // this.heap[parent] = this.heap[index]
    //         // this.heap[index] = temp
    //         index = parent;
    //         leftChild = this.IdxOfLeftChild(index);
    //         if ( this.heap[leftChild] < this.heap[index] ){
    //             [ this.heap[leftChild], this.heap[index]] = [this.heap[index] , this.heap[leftChild]]
    //         }
    //         parent = this.IdxOfParent(index);
    //     }


    //     return "Good job!";
    // }

    insert(num) {
        this.heap.push(num);
        let currentIndex = this.heap.length - 1;

        while (currentIndex > 1) {
            const parentIndex = Math.floor(currentIndex / 2);
            if (this.heap[currentIndex] < this.heap[parentIndex]) {
                [this.heap[currentIndex], this.heap[parentIndex]] = [
                    this.heap[parentIndex],
                    this.heap[currentIndex],
                ];
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    /**
 * Extracts the min num from the heap and then re-orders the heap to
 * maintain order so the next min is ready to be extracted.
 * 1. Save the first node to a temp var.
 * 2. Pop last node off and set idx1 equal to the popped value.
 * 3. Iteratively swap the old last node that is now at idx1 with it's
 *    smallest child IF the smallest child is smaller than it.
 * - Time: O(log n) logarithmic due to shiftDown.
 * - Space: O(1) constant.
 * @returns {?number} The min number or null if empty.
 */
    extract() {
        const min = this.top();
        if(min===null){
            return null;
        }
        this.heap[1]=this.heap.pop();
        let i=1;
        while(true){
            if(this.heap[this.idxOfLeftChild(i)]<this.heap[this.idxOfRightChild(i)]||this.heap[this.idxOfRightChild(i)]==undefined){
                if(this.heap[i]>this.heap[this.idxOfLeftChild(i)]){
                    [this.heap[i],this.heap[this.idxOfLeftChild(i)]]=[this.heap[this.idxOfLeftChild(i)],this.heap[i]];
                    i=this.idxOfLeftChild(i);
                }else{
                    break;
                }
            }else{
                if(this.heap[i]>this.heap[this.idxOfRightChild(i)]){
                    [this.heap[i],this.heap[this.idxOfRightChild(i)]]=[this.heap[this.idxOfRightChild(i)],this.heap[i]];
                    i=this.idxOfRightChild(i);
                }else{
                    break;
                }
            }
        }return min;
    }


    /**
     * Logs the tree horizontally with the root on the left and the index in
     * parenthesis using reverse inorder traversal.
     */


    // ---------------- GET INDEX
    IdxOfParent(i) {
        return Math.floor(i / 2);
    }

    IdxOfLeftChild(i) {
        return i * 2;
    }

    IdxOfRightChild(i) {
        return (i * 2) + 1;
    }




    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
        if (parentIdx > this.heap.length - 1) {
            return;
        }

        spaceCnt += spaceIncr;
        this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${this.heap[parentIdx]} (${parentIdx})`
        );

        this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }
}

// -------------------------------TESTS

let heap = new MinHeap();

console.log(heap.size(), " => Expected 0") // Should be 0
console.log(heap.top(), " => Expected null") // Should be 0















