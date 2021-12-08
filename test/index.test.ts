import {IOSFactory, User, UserFactory, WORK_TYPE} from "../index";


describe('user类测试', () => {
    test('测试User创建', () => {
        const user = new User('a', 2, '');
        expect(user).toEqual({
            name: 'a',
            age: 2,
            career: ''
        })
    })

    test('测试user工厂模式', () => {
        expect(new UserFactory('aa', 2, '3', WORK_TYPE.CODER)).toEqual({
            name: 'aa',
            age: 2,
            career: '3',
            works: ['编程', '测试'],
        })
    })
})

describe('factory测试', () => {
    const applePhone = new IOSFactory();
    test('ios测试', () => {
        expect('createOs' in applePhone).toBeTruthy()
    })
    it('使用ios系统', () => {
        expect(applePhone.createOs().controlHardWare()).toBe('ios系统')
    })
})

