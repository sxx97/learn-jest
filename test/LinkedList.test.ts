import {LinkedList} from "../src/LinkedList";

describe('LinkedList', () => {
    const linked = new LinkedList();
    test('push测试', () => {
        linked.push('asd')
        expect(linked.size()).toBe(1);
        expect(linked.toString()).toBe('asd');
    })

    test('insert测试', () => {
        linked.push('asd1')
        linked.insert('dda', 2);
        expect(linked.size()).toBe(3);
        expect(linked.toString()).toBe('asd,asd1,dda');
        linked.remove('asd1');
        expect(linked.indexOf('dda')).toBe(1);
    })
})
