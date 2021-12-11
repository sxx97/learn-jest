import {Button} from "../src/Decorator";

describe('装饰器测试', () => {
    test('返回1', () => {
        expect(Button.count).toBeGreaterThan(2)
    })
})
