import Stack from "../src/Stack";


describe('Stack 测试', () => {
    const testStack = new Stack();
    test('Stack is empty', () => {
        expect(testStack.isEmpty()).toBeTruthy()
    })

    test('test add element', () => {
        testStack.push(5);
        expect(testStack.items).toEqual({
            1: 5
        })
    })

    test('test size and isEmpty', () => {
        expect(testStack.isEmpty()).toBeFalsy()
        expect(testStack.size()).toBe(1)
    })

    test('test pop', () => {
        expect(testStack.pop()).toBe(5)
    })

    test('test decimalToBinary', () => {
        function decimalToBinary(num: number, stack: Stack = new Stack()): string {
            const resNum = Math.floor(num / 2);
            stack.push(Math.floor(num % 2));
            if (resNum > 0) {
                return decimalToBinary(resNum, stack)
            }
            return Object.values(stack.items).reverse().join('')
        }
        expect(decimalToBinary(1000)).toBe('1111101000')
    })
})
