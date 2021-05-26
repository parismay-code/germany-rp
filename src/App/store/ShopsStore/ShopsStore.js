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
        dealer: Meta.initial,
    };

    carDealerList = [];

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

    dealerData = [
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
    ];

    constructor() {
        makeObservable(this, {
            meta: observable,

            carDealerList: observable,
            tuning: observable,
            shopData: observable,
            dealerData: observable,

            fetchShopData: action.bound,
            changeShopData: action.bound,
            fetchDealerData: action.bound,
            changeDealerData: action.bound,
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
        const index = this.shopData.findIndex(e => e.ItemId === id);
        this.shopData[index] = data;
    }

    async fetchDealerData(event) {
        this.meta.dealer = Meta.loading;
        this.dealerData = [];

        const {isError, data} = await event;
        if (isError) return this.meta.dealer = Meta.error;

        runInAction(() => {
            this.dealerData = data;
            this.meta.dealer = Meta.success;
        })
    }

    changeDealerData(id, data) {
        const index = this.dealerData.findIndex(e => e.ItemId === id);
        this.dealerData[index] = data;
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