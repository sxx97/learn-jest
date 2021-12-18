interface QueueItem {
    [name: string | number]: unknown
}

class Queue {
    count: number;
    lowestCount: number;
    items: QueueItem;

    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    enqueue(item: any) {
        if (Array.isArray(item)) {
            item.forEach((val: any) => {
                this.items[this.count] = val;
                this.count++;
            })
            return ;
        }
        this.items[this.count] = item;
        this.count++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const item = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++
        return item;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.count - this.lowestCount;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        return JSON.stringify(Object.values(this.items));
    }
}

class Deque extends Queue {

    constructor() {
        super();
    }

    addFront(item: any) {
        if(this.isEmpty()) {
            this.addBack(item);
        } else if(this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = item;
        } else {
            let count = 0;
            if (Array.isArray(item)) {
                item.forEach((val: any) => {
                    this.items[this.count + count] = this.items[this.count - 1];
                    this.items[count] = val;
                    count++;
                    this.count++;
                })
                return ;
            }
            this.items[this.count + count] = this.items[this.count - 1];
            this.items[count] = item;
            this.count += count;
        }

    }

    addBack(item: any) {
        this.enqueue(item)
    }

    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        const item = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.lowestCount--;
        return item;
    }

    removeFornt() {
        return this.dequeue()
    }

    peekBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
}

export {
    Queue,
    Deque
}
