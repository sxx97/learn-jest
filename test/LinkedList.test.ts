import {LinkedList} from "../src/LinkedList";

describe('LinkedList', () => {
    const linked = new LinkedList();
    test('push测试', () => {
        linked.push('asd')
        expect(linked.size()).toBe(1);
        expect(linked.toString()).toBe('asd');
    })
})
