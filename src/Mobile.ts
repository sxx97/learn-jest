abstract class MobilePhoneFactory {
    createOs() {}

    createHardWare() {}
}

class AndoridFactory extends MobilePhoneFactory {
    createOs() {
        return new AndroidOS()
    }
    createHardWare() {
        return new HuaweiHardWare()
    }
}

class IOSFactory extends MobilePhoneFactory {
    createOs() {
        return new AppleOS()
    }
    createHardWare() {
        return new AppleHardWare()
    }
}

abstract class OS {
    controlHardWare() {}
}

class AndroidOS extends OS {
    controlHardWare() {
        super.controlHardWare();
        return '安卓系统'
    }
}

class AppleOS extends OS {
    controlHardWare() {
        super.controlHardWare();
        return 'ios系统'
    }
}

abstract class HardWare {
    operateByOrder() {}
}

class HuaweiHardWare extends HardWare {
    operateByOrder() {
        return 'huawei'
    }
}

class AppleHardWare extends HardWare {
    operateByOrder() {
        return 'apple';
    }
}

 export {
    IOSFactory,
    AndoridFactory
 }
