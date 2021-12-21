
class LinkedNode {
    element: unknown;
    next: LinkedNode | undefined;

    constructor(element: unknown) {
        this.element = element;
        this.next = undefined;
    }
}

class LinkedList {
    count: number;
    head: LinkedNode | undefined;

    constructor() {
        this.count = 0;
        this.head = undefined;
    }

    equals(itemA: unknown, itemB: unknown) {
        return itemA === itemB;
    }

    push(element: unknown) {
        let current = new LinkedNode(element),
            prevLinkNode: LinkedNode;
        this.count++;
        if (this.head === undefined) {
            this.head = current;
            return ;
        }
        prevLinkNode = this.head;
        while(prevLinkNode.next) {
            prevLinkNode = prevLinkNode.next;
        }
        prevLinkNode.next = current;
    }

    insert(element: unknown, index: number) {

    }

    getElementAt(element: unknown): number {
        return -1;
    }

    remove(element: unknown) {
        let currentNode = this.head,
            isRemove = false;
        while(currentNode?.next && currentNode.element != element) {
            currentNode = currentNode.next;
            if (currentNode.next?.element === element) {
                currentNode.next = currentNode.next?.next;
                this.count--;
                isRemove = true;
            }
        }
        return isRemove ? element : undefined;
    }

    isEmpty() {
        return this.count === 0
    }

    size() {
        return this.count
    }

    toString() {
        let currentNode = this.head,
            strArr = [];
        if (currentNode === null) {
            return '';
        }
        strArr.push(currentNode?.element);
        while(currentNode?.next) {
            strArr.push(currentNode.element);
            currentNode = currentNode.next;
        }
        return strArr.join(',');
    }
}


export {
    LinkedList
}
