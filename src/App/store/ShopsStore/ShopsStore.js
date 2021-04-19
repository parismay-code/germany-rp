import {
    action,
    makeObservable,
    observable,
    runInAction
} from "mobx";

import {Meta} from '@utils/meta';

export default class ShopsStore {
    meta = {
        carDealer: Meta.initial,
        tuning: Meta.initial,
    };

    carDealerList = [
        {
            id: 0,
            name: 'Default Car',
            type: 'default',
            price: 99999,
            maxSpeed: 200,
            acceleration: 10
        },
        {
            id: 1,
            name: 'Default Car',
            type: 'default',
            price: 99999,
            maxSpeed: 200,
            acceleration: 11
        },
        {
            id: 2,
            name: 'Default Car',
            type: 'default',
            price: 99999,
            maxSpeed: 200,
            acceleration: 12
        },
        {
            id: 3,
            name: 'Premium Car',
            type: 'premium',
            price: 999999,
            maxSpeed: 280,
            acceleration: 5
        },
        {
            id: 4,
            name: 'Premium Car',
            type: 'premium',
            price: 999999,
            maxSpeed: 280,
            acceleration: 6
        },
        {
            id: 5,
            name: 'Premium Car',
            type: 'premium',
            price: 999999,
            maxSpeed: 280,
            acceleration: 7
        },
        {
            id: 6,
            name: 'Premium Car',
            type: 'premium',
            price: 999999,
            maxSpeed: 280,
            acceleration: 8
        },
        {
            id: 7,
            name: 'Luxury Car',
            type: 'luxury',
            price: 999999999,
            maxSpeed: 320,
            acceleration: 1
        },
        {
            id: 8,
            name: 'Luxury Car',
            type: 'luxury',
            price: 999999999,
            maxSpeed: 320,
            acceleration: 2
        },
        {
            id: 9,
            name: 'Luxury Car',
            type: 'luxury',
            price: 999999999,
            maxSpeed: 320,
            acceleration: 3
        },
        {
            id: 10,
            name: 'Luxury Car',
            type: 'luxury',
            price: 999999999,
            maxSpeed: 320,
            acceleration: 4
        },
        {
            id: 11,
            name: 'Luxury Car',
            type: 'luxury',
            price: 999999999,
            maxSpeed: 320,
            acceleration: 5
        },
        {
            id: 12,
            name: 'Luxury Car',
            type: 'luxury',
            price: 999999999,
            maxSpeed: 320,
            acceleration: 5
        },
        {
            id: 13,
            name: 'Luxury Car',
            type: 'luxury',
            price: 999999999,
            maxSpeed: 320,
            acceleration: 5
        },
        {
            id: 14,
            name: 'Luxury Car',
            type: 'luxury',
            price: 999999999,
            maxSpeed: 320,
            acceleration: 5
        },
        {
            id: 15,
            name: 'Luxury Car',
            type: 'luxury',
            price: 999999999,
            maxSpeed: 320,
            acceleration: 5
        },
        {
            id: 16,
            name: 'Luxury Car',
            type: 'luxury',
            price: 999999999,
            maxSpeed: 320,
            acceleration: 5
        },
        {
            id: 17,
            name: 'Luxury Car',
            type: 'luxury',
            price: 999999999,
            maxSpeed: 320,
            acceleration: 5
        },
        {
            id: 18,
            name: 'Luxury Car',
            type: 'luxury',
            price: 999999999,
            maxSpeed: 320,
            acceleration: 5
        },
        {
            id: 19,
            name: 'Luxury Car',
            type: 'luxury',
            price: 999999999,
            maxSpeed: 320,
            acceleration: 5
        },
    ];

    tuning = {
        engine: 0,
        muffler: 0,
        color: {
            first: 0,
            second: 0
        },
        wheels: 0,
        turbo: 0,
        sound: 0
    }

    shopData = [
        {
            id: 0,
            name: 'Test name',
            price: 123490,
            type: 'food',
            satiety: 100
        },
        {
            id: 1,
            name: 'Test name',
            price: 5435,
            type: 'food',
            satiety: 20
        },
        {
            id: 2,
            name: 'Test name',
            price: 43761356,
            type: 'food',
            satiety: 34
        },
        {
            id: 3,
            name: 'Test name',
            price: 123123,
            type: 'food',
            satiety: 12
        },
        {
            id: 4,
            name: 'Test name',
            price: 4343,
            type: 'food',
            satiety: 21
        },
        {
            id: 5,
            name: 'Test name',
            price: 2355,
            type: 'food',
            satiety: 30
        },
        {
            id: 6,
            name: 'Test name',
            price: 555555,
            type: 'food',
            satiety: 123
        },
        {
            id: 7,
            name: 'Test name',
            price: 616,
            type: 'food',
            satiety: 15
        },
        {
            id: 8,
            name: 'Test name',
            price: 616,
            type: 'food',
            satiety: 15
        },
        {
            id: 9,
            name: 'Test name',
            price: 616,
            type: 'food',
            satiety: 15
        },
        {
            id: 10,
            name: 'Test name',
            price: 616,
            type: 'food',
            satiety: 15
        },
        {
            id: 11,
            name: 'Test name',
            price: 616,
            type: 'food',
            satiety: 15
        },
        {
            id: 12,
            name: 'Test name',
            price: 616,
            type: 'food',
            satiety: 15
        },
        {
            id: 13,
            name: 'Test name',
            price: 616,
            type: 'food',
            satiety: 15
        },
    ];

    constructor() {
        makeObservable(this, {
            meta: observable,

            carDealerList: observable,
            tuning: observable,
            shopData: observable,

            fetchCarDealerList: action.bound,
            fetchCarTuning: action.bound,
        })
    }

    async fetchCarDealerList(event) {
        this.meta.carDealer = Meta.loading;
        this.carDealerList = [];

        const {isError, data} = await event;
        if (isError) {
            return this.meta.carDealer = Meta.error;
        }

        runInAction(() => {
            this.carDealerList = data;
            this.meta.carDealer = Meta.success;
        })
    }

    async fetchCarTuning(event) {
        this.meta.tuning = Meta.loading;
        this.tuning = [];

        const {isError, data} = await event;
        if (isError) {
            return this.meta.tuning = Meta.error;
        }

        runInAction(() => {
            this.tuning = data;
            this.meta.tuning = Meta.success;
        })
    }

    destroy() {
    }
}