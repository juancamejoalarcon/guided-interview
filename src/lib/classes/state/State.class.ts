export class State {

    private _state: any = {}

    constructor() {}

    get() {
        return this._state
    }

    setPropertyInState(key: string, value: any) {
        this._state[key] = value
    }
}