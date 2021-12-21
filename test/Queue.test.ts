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
        expect(deque.size()).toBe(1)
        deque.addBack('end')
        expect(deque.size()).toBe(2)
        deque.addFront('front1')
        deque.addFront(['front2', 'front3'])
        expect(deque.toString()).toEqual(JSON.stringify(['front2', 'front3', 'front1', 'front', 'end']))
    })

    test('击鼓传花', () => {
        /**
         * 击鼓传花实现
         * @param {Array} elementsList 参与对象
         * @param {Number} num 传递次数
         * @return item 最终剩下的参与对象
         * */
        function hotPotato<T>(elementsList: T[], num: number): T {
            const deque = new Deque();
            elementsList.forEach(item => deque.addBack(item));
            while(deque.size() > 1) {
                for (let i = 0; i < num; i++) {
                    deque.addBack(deque.removeFront());
                }
                console.log(deque.removeFront() + '是被删除的参与对象,剩余对象', deque.toString());
            }
            return deque.peek() as T;
        }

        expect(hotPotato(['a', 'b', 'c', 'd', 'e'], 7)).toBe('a')
    })


    test('回文检查', () => {
        /**
         * 判断是不是回文
         * @param {String} str 需要判断的字符串
         * */
        function palindromeChecker(str: string): boolean {
            let result = true;
            if (!str) {
                return false;
            }
            str = str.toLocaleLowerCase().split(' ').join('');
            const deque = new Deque();
            for(let chat of str) {
                deque.addBack(chat);
            }
            let first = '', end = '';
            while (deque.size() > 1 && result) {
                first += deque.removeFront();
                end += deque.removeBack();
                console.log('deque 删除后的样子', deque.toString())
                result = first === end;
            }
            return result;
        }
        expect(palindromeChecker('level')).toBeTruthy()
    })
})
