enum WORK_TYPE {
    CODER = 'coder',
    PRODUCT_MANAGER = 'product',
}

class User {
    name;
    age;
    career;

    constructor(name: string, age: number, career: string) {
        this.name = name;
        this.age = age;
        this.career = career;
    }
}


class UserFactory extends User{
    works: string[];

    constructor(name, age, career, workType: WORK_TYPE) {
        super(name, age, career);
        switch(workType) {
            case WORK_TYPE.CODER:
                this.works = ['编程', '测试'];
                break;
            case WORK_TYPE.PRODUCT_MANAGER:
                this.works = ['需求', '挨打']
        }
    }
}

const user = new User('', 2, '');
console.log(user, 'user信息');

export {User, UserFactory, WORK_TYPE}
