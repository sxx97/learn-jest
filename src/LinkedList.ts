
class LinkedNode {
    element: unknown;
    next: LinkedNode | undefined;

    constructor(element: unknown) {
        this.element = element;
        this.next = undefined;
    }
}

type baseType = number | string;
type referenceType = {[str: string]: unknown} | any[] | Map<any, any> | Set<unknown> | Function;

class LinkedList {
    count: number;
    head: LinkedNode | undefined;

    constructor() {
        this.count = 0;
        this.head = undefined;
    }

    getHead() {
        return this.head;
    }

    equals(itemA: baseType, itemB: baseType) {
        return itemA === itemB;
    }

    // TODO: 比较有问题，以后再说懒得修改
    equalsObj(itemA: referenceType, itemB: referenceType) {
        let itemAStr = [],
            itemBStr = [];
        switch(Object.prototype.toString.call(itemA)) {
            case '[object Set]':
            case '[object Map]':
            case '[object Array]':
                (itemA as [] | Map<any, any> | Set<unknown>).forEach((val, key) => {
                    itemAStr.push(`${key}=${val}`)
                });
                (itemB as [] | Map<any, any> | Set<unknown>).forEach((val, key) => {
                    itemBStr.push(`${key}=${val}`)
                })
                break;
            case '[object Object]':
                Object.entries(itemA).forEach((val, key) => {
                    itemAStr.push(`${key}=${val}`)
                })
                Object.entries(itemB).forEach((val, key) => {
                    itemBStr.push(`${key}=${val}`)
                })
                break;
            case '[object Function]':
                itemAStr.push(itemA.toString())
                itemBStr.push(itemB.toString())
                break;
        }
        return itemAStr.join(',') === itemBStr.join(',');
    }

    /**
     * 获取元素在链表中的位置
     * @param {*} element 元素
     * */
    indexOf(element: unknown) {
        let currentNode = this.head,
            index = 0,
            equalsFn;
        if (['number', 'string'].includes(typeof element)) {
            equalsFn = this.equals;
        } else {
            equalsFn = this.equalsObj;
        }

        while(currentNode && currentNode.next && !equalsFn(element as any, currentNode.element as any)) {
            currentNode = currentNode.next;
            index++;
        }
        return index;
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

    /**
     * 在任意位置插入元素
     * @param {*} element 插入的元素
     * @param {Number} index 插入的位置
     * */
    insert(element: unknown, index: number) {
        const previous = this.getElementAt(index - 1);
        if (previous) {
            const currentNode = new LinkedNode(element);
            currentNode.next = previous.next;
            previous.next = currentNode;
            this.count++;
            return true;
        }
        this.push(element);
        return true;
    }

    getElementAt(index: number): LinkedNode | undefined {
        let loopCount = 0,
            currentNode = this.head;
        while(currentNode && currentNode.next && loopCount < index) {
            currentNode = currentNode.next;
            loopCount++;
        }
        return currentNode;
    }

    /**
     * 根据下标删除链表元素
     * @param {Number} index 要删除的元素索引
     * */
    removeAt(index: number): unknown {
        let currentNode = this.head;
        if (index === 0 && currentNode) {
            this.head = currentNode.next;
        }
        let previous = this.getElementAt(index - 1);
        if (previous) {
            currentNode =  previous.next;
            previous.next = currentNode?.next;
        }
        this.count--;
        return currentNode?.element
    }


    remove(element: unknown) {
        return this.removeAt(this.indexOf(element));
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
        while(currentNode?.next) {
            strArr.push(currentNode.element);
            currentNode = currentNode.next;
        }
        strArr.push(currentNode?.element);
        return strArr.join(',');
    }
}


export {
    LinkedList,
    LinkedNode
}
