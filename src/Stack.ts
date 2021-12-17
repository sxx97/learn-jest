interface StackItems {
    [index: string | number]: unknown
}

class Stack {
    count: number = 0;
    items: StackItems;

    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(item: unknown) {
        this.items[++this.count] = item;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.count];
        delete this.items[this.count];
        this.count--;
        return result;
    }

    peek () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count];
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    clear() {
        this.count = 0;
        this.items = {};
    }

    toString() {
        if(this.isEmpty()) {
            return '';
        }
        return Object.values(this.items).toString();
    }

}

export default  Stack;
