class SingleObj {
    static instance;

    count = 0;
    constructor() {
        this.count = 0;
    }

    static init() {
        if (!SingleObj.instance) {
            SingleObj.instance = new SingleObj();
        }
        return SingleObj.instance;
    }

    addCount() {
        return this.count++;
    }
}

function FNSingle() {
    this.count = 0;
}

FNSingle.getInstance = (function () {
    let instance;
    return () => {
        if (!instance) {
            instance = new FNSingle();
        }
        return instance;
    }
})()

FNSingle.prototype.addCount = function() {
    this.count++;
}


export {
    SingleObj,
    FNSingle
}
