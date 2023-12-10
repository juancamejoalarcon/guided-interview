import { Subject } from "./Subject.class";

export interface Observer {
    update(subject: Subject): void;
}