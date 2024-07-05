interface ISubject {
    subscribe(observer: IFunction): void;
    unsubscribe(observer: IFunction): void;
    next(value: any): void;
}

export interface ISubscription {
    unsubscribe(): void;
}
  
type IFunction = (data: any) => void;
  
class Subject implements ISubject {
    public observers: IFunction[] = [];

    subscribe(observer: IFunction) {
        this.observers.push(observer);

        return {
            unsubscribe: () => {
                this.unsubscribe(observer);
            },
        };
    }

    unsubscribe(observer: IFunction): void {
        this.observers = this.observers.filter((obs) => obs != observer);
    }

    next(value: any): void {
        this.observers.forEach((observer) => {
            observer(value);
        });
    }
}

export default new Subject();