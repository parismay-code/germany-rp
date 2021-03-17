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
            cars: [
                {
                    id: 0,
                    name: 'Default Car',
                    price: 99999,
                    maxSpeed: 200,
                    acceleration: 10
                },
                {
                    id: 1,
                    name: 'Default Car',
                    price: 99999,
                    maxSpeed: 200,
                    acceleration: 11
                },
                {
                    id: 2,
                    name: 'Default Car',
                    price: 99999,
                    maxSpeed: 200,
                    acceleration: 12
                },
            ]
        },
        {
            cars: [
                {
                    id: 0,
                    name: 'Premium Car',
                    price: 999999,
                    maxSpeed: 280,
                    acceleration: 5
                },
                {
                    id: 1,
                    name: 'Premium Car',
                    price: 999999,
                    maxSpeed: 280,
                    acceleration: 6
                },
                {
                    id: 2,
                    name: 'Premium Car',
                    price: 999999,
                    maxSpeed: 280,
                    acceleration: 7
                },
                {
                    id: 3,
                    name: 'Premium Car',
                    price: 999999,
                    maxSpeed: 280,
                    acceleration: 8
                },
            ]
        },
        {
            cars: [
                {
                    id: 0,
                    name: 'Luxury Car',
                    price: 999999999,
                    maxSpeed: 320,
                    acceleration: 1
                },
                {
                    id: 1,
                    name: 'Luxury Car',
                    price: 999999999,
                    maxSpeed: 320,
                    acceleration: 2
                },
                {
                    id: 2,
                    name: 'Luxury Car',
                    price: 999999999,
                    maxSpeed: 320,
                    acceleration: 3
                },
                {
                    id: 3,
                    name: 'Luxury Car',
                    price: 999999999,
                    maxSpeed: 320,
                    acceleration: 4
                },
                {
                    id: 4,
                    name: 'Luxury Car',
                    price: 999999999,
                    maxSpeed: 320,
                    acceleration: 5
                },
                {
                    id: 5,
                    name: 'Luxury Car',
                    price: 999999999,
                    maxSpeed: 320,
                    acceleration: 5
                },
                {
                    id: 6,
                    name: 'Luxury Car',
                    price: 999999999,
                    maxSpeed: 320,
                    acceleration: 5
                },
                {
                    id: 7,
                    name: 'Luxury Car',
                    price: 999999999,
                    maxSpeed: 320,
                    acceleration: 5
                },
                {
                    id: 8,
                    name: 'Luxury Car',
                    price: 999999999,
                    maxSpeed: 320,
                    acceleration: 5
                },
                {
                    id: 9,
                    name: 'Luxury Car',
                    price: 999999999,
                    maxSpeed: 320,
                    acceleration: 5
                },
                {
                    id: 10,
                    name: 'Luxury Car',
                    price: 999999999,
                    maxSpeed: 320,
                    acceleration: 5
                },
                {
                    id: 11,
                    name: 'Luxury Car',
                    price: 999999999,
                    maxSpeed: 320,
                    acceleration: 5
                },
                {
                    id: 12,
                    name: 'Luxury Car',
                    price: 999999999,
                    maxSpeed: 320,
                    acceleration: 5
                },
            ]
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

    constructor() {
        makeObservable(this, {
            meta: observable,

            carDealerList: observable,
            tuning: observable,

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