import {
    action,
    makeObservable,
    observable,
    runInAction
} from "mobx";

import {Meta} from '@utils/meta';

export default class GlobalStore {
    meta = {
        inventory: Meta.initial,
        shop: Meta.initial,
    };

    constructor() {
        makeObservable(this, {
            meta: observable,
        })
    }

    destroy() {
    }
}