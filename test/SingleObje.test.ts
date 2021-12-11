import {FNSingle, SingleObj} from "../src/SingleObj";

describe('singleObj', () => {
    test('singleObj 测试', () => {
        const s1 = SingleObj.init(),
            s2 = SingleObj.init();
        s1.addCount();
        expect(s1 === s2).toBeTruthy()
    })

    test('FNSingle 测试', () => {
        const s1 = FNSingle.getInstance(),
            s2 = FNSingle.getInstance();
        console.log(s1.__proto__, 'count----值', s2.__proto__.constructor);
        s1.addCount();
        console.log(s1, 'count值', s2);
        expect(s1.count === s2.count).toBeTruthy();
    })
})
