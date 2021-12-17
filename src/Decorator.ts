

function classDecorator<T>(target: T): T {
    // @ts-ignore
    if (target && target.count !== undefined){
        // @ts-ignore
        target.count = 3;
    }
    return target;
}

function funcDecorator<T>(target: T, name: string, descriptor: TypedPropertyDescriptor<() => void>): TypedPropertyDescriptor<() => void> {
    let val = descriptor.value;
    descriptor.value = function(...arr: unknown[]) {
        (val as any).apply(this, arr);
    }
    return descriptor;
}


@classDecorator
class Button {
    static count: number = 0;
    @funcDecorator
    onClick() {
        console.log('按钮点击')
    }
}

export {Button}


