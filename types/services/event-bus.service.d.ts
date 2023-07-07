export interface Registry {
    unregister: () => void;
}
export interface Callable {
    [key: string]: Function;
}
export interface Subscriber {
    [key: string]: Callable;
}
export interface IEventBus {
    dispatch<T>(event: string, arg?: T): void;
    register(event: string, callback: Function): Registry;
}
export type EventList = 'inited' | 'question-added' | 'set-current' | 'set-value';
export declare class EventBus implements IEventBus {
    private subscribers;
    private static nextId;
    constructor();
    dispatch<T>(event: EventList, arg?: T): void;
    register(event: EventList, callback: Function): Registry;
    private getNextId;
}
