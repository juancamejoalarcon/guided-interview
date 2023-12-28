import { Observer } from "./Observer.interface";
export declare class Subject {
    private observers;
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
    updateInterview(): void;
}
