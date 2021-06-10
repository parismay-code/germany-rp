import {
    action,
    makeObservable,
    observable,
    runInAction
} from "mobx";

import {Meta} from '@utils/meta';

export default class ShopsStore {
    constructor() {
        makeObservable(this, {
            meta: observable,
            
            carDealerList: observable,
            tuning: observable,
            shopData: observable,
            dealerData: observable,
            clothesShopData: observable,
            
            fetchShopData: action.bound,
            changeShopData: action.bound,
            fetchDealerData: action.bound,
            changeDealerData: action.bound,
            fetchCarDealerList: action.bound,
            fetchCarTuning: action.bound,
            fetchClothesShopData: action.bound,
        })
    }
    
    meta = {
        shop: Meta.initial,
        carDealer: Meta.initial,
        tuning: Meta.initial,
        dealer: Meta.initial,
        clothesShop: Meta.initial,
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

    shopData = [];

    dealerData = [];
    
    clothesShopData = [];

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
    
    async fetchClothesShopData(event) {
        this.meta.clothesShop = Meta.loading;
        this.clothesShopData = [];
        
        const {isError, data} = await event;
        if (isError) {
            return this.meta.clothesShop = Meta.error;
        }
        
        runInAction(() => {
            this.clothesShopData = data;
            this.meta.clothesShop = Meta.success;
        })
    }
    
    
    destroy() {
    }
}