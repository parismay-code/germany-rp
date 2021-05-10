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
            name: 'Adder',
            CategoryId: 0, // 0 = cars, 1 = motorcycles, 2 = air, 3 = water
            Price: 99999,
            Topspeed: 200,
            Kofferraumgroesse: 10
        },
        {
            id: 1,
            name: 'Adder',
            CategoryId: 0, // 0 = cars, 1 = motorcycles, 2 = air, 3 = water
            Price: 99999,
            Topspeed: 200,
            Kofferraumgroesse: 10
        },
        {
            id: 2,
            name: 'Adder',
            CategoryId: 0, // 0 = cars, 1 = motorcycles, 2 = air, 3 = water
            Price: 99999,
            Topspeed: 200,
            Kofferraumgroesse: 10
        },
        {
            id: 3,
            name: 'Adder',
            CategoryId: 1, // 0 = cars, 1 = motorcycles, 2 = air, 3 = water
            Price: 99999,
            Topspeed: 200,
            Kofferraumgroesse: 10
        },
        {
            id: 4,
            name: 'Adder',
            CategoryId: 1, // 0 = cars, 1 = motorcycles, 2 = air, 3 = water
            Price: 99999,
            Topspeed: 200,
            Kofferraumgroesse: 10
        },
        {
            id: 5,
            name: 'Adder',
            CategoryId: 1, // 0 = cars, 1 = motorcycles, 2 = air, 3 = water
            Price: 99999,
            Topspeed: 200,
            Kofferraumgroesse: 10
        },
        {
            id: 6,
            name: 'Adder',
            CategoryId: 1, // 0 = cars, 1 = motorcycles, 2 = air, 3 = water
            Price: 99999,
            Topspeed: 200,
            Kofferraumgroesse: 10
        },
        {
            id: 7,
            name: 'Adder',
            CategoryId: 2, // 0 = cars, 1 = motorcycles, 2 = air, 3 = water
            Price: 99999,
            Topspeed: 200,
            Kofferraumgroesse: 10
        },
        {
            id: 8,
            name: 'Adder',
            CategoryId: 2, // 0 = cars, 1 = motorcycles, 2 = air, 3 = water
            Price: 99999,
            Topspeed: 200,
            Kofferraumgroesse: 10
        },
        {
            id: 9,
            name: 'Adder',
            CategoryId: 2, // 0 = cars, 1 = motorcycles, 2 = air, 3 = water
            Price: 99999,
            Topspeed: 200,
            Kofferraumgroesse: 10
        },
        {
            id: 10,
            name: 'Adder',
            CategoryId: 3, // 0 = cars, 1 = motorcycles, 2 = air, 3 = water
            Price: 99999,
            Topspeed: 200,
            Kofferraumgroesse: 10
        },
        {
            id: 11,
            name: 'Adder',
            CategoryId: 3, // 0 = cars, 1 = motorcycles, 2 = air, 3 = water
            Price: 99999,
            Topspeed: 200,
            Kofferraumgroesse: 10
        },
        {
            id: 12,
            name: 'Adder',
            CategoryId: 3, // 0 = cars, 1 = motorcycles, 2 = air, 3 = water
            Price: 99999,
            Topspeed: 200,
            Kofferraumgroesse: 10
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
            ItemId: 0,
            Name: 'Donut',
            Price: 123490,
            Count: 100,
            Image: 'Donut.svg'
        },
        {
            ItemId: 1,
            Name: 'Energy Drink',
            Price: 5435,
            Count: 100,
            Image: 'EnergyDrink.svg'
        },
        {
            ItemId: 2,
            Name: 'Ausweis',
            Price: 123490,
            Count: 100,
            Image: 'Ausweis.svg'
        },
        {
            ItemId: 3,
            Name: 'Bankkarte',
            Price: 5435,
            Count: 100,
            Image: 'Bankkarte.svg'
        },
        {
            ItemId: 4,
            Name: 'Bargeld',
            Price: 123490,
            Count: 100,
            Image: 'Bargeld.svg'
        },
        {
            ItemId: 5,
            Name: 'Cola',
            Price: 5435,
            Count: 100,
            Image: 'Cola.svg'
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

        const {isError, data} = await event;
        if (isError) return this.meta.shop = Meta.error;

        runInAction(() => {
            this.shopData = data;
            this.meta.shop = Meta.success;
        })
    }

    changeShopData(id, data) {
        const index = this.shopData.findIndex(e => e.ItemId === id);
        this.shopData[index] = data;
    }

    async fetchCarDealerList(event) {
        this.meta.carDealer = Meta.loading;

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