import { ServerError } from "app/models/server-error";
import { makeAutoObservable } from "mobx";

export default class CommonStore {
    error: ServerError | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    setServerError = (error: ServerError) => {
        this.error = error
    }
}