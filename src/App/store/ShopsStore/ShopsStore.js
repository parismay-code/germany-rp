import {
    action,
    makeObservable,
    observable,
    runInAction
} from "mobx";

import {Meta} from '@utils/meta';

export default class ShopsStore {
    meta = {
        shop: Meta.initial,
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
            name: 'Donut',
            price: 123490,
            count: 100,
            imageName: 'Donut'
        },
        {
            id: 1,
            name: 'Energy Drink',
            price: 5435,
            count: 100,
            imageName: 'EnergyDrink'
        },
        {
            id: 2,
            name: 'Ausweis',
            price: 123490,
            count: 100,
            imageName: 'Ausweis'
        },
        {
            id: 3,
            name: 'Bankkarte',
            price: 5435,
            count: 100,
            imageName: 'Bankkarte'
        },
        {
            id: 4,
            name: 'Bargeld',
            price: 123490,
            count: 100,
            imageName: 'Bargeld'
        },
        {
            id: 5,
            name: 'Cola',
            price: 5435,
            count: 100,
            imageName: 'Cola'
        },
    ];

    constructor() {
        makeObservable(this, {
            meta: observable,

            carDealerList: observable,
            tuning: observable,
            shopData: observable,

            fetchShopData: action.bound,
            changeShopData: action.bound,
            fetchCarDealerList: action.bound,
            fetchCarTuning: action.bound,
        })
    }

    async fetchShopData(event) {
        this.meta.shop = Meta.loading;
        this.shopData = [];

        const {isError, data} = await event;
        if (isError) return this.meta.shop = Meta.error;

        runInAction(() => {
            this.shopData = data;
            this.meta.shop = Meta.success;
        })
    }

    changeShopData(id, data) {
        const index = this.shopData.findIndex(e => e.id === id);
        this.shopData[index] = data;
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