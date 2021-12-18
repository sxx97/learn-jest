import {Deque, Queue} from "../src/Queue";

describe('Queue test', () => {
    const queue = new Queue();
    test('test empty', () => {
        const queue = new Queue();
        expect(queue.isEmpty()).toBeTruthy()
    })
    queue.enqueue('John')
    queue.enqueue({
        aa: 'aa',
        b: ['a', 1, 2]
    })
    test('test toString', () => {
        expect(queue.toString()).toEqual(JSON.stringify(['John', {
            aa: 'aa',
            b: ['a', 1, 2]
        }]))
        expect(queue.dequeue()).toEqual('John')
        expect(queue.size()).toBe(1)
    })
})

describe('Deque test', () => {
    const deque = new Deque();
    test('add item', () => {
        deque.addFront('front')
        expect(deque.size()).toBe(0)
        deque.addBack('end')
        expect(deque.size()).toBe(1)
        deque.addFront('front2')
        expect(deque.toString()).toEqual(JSON.stringify(['front2', 'front', 'end']))
    })
})
