import {
    action,
    makeObservable,
    observable,
    runInAction
} from "mobx";

import {Meta} from '@utils/meta';

export default class HUDStore {
    meta = {
        house: Meta.initial,
        hotel: Meta.initial,
    };

    houseData = {
        id: 87,
        houseLocked: true,
        garageLocked: true,
        price: 999999999,
        family: 'Garcia',
        garage: 10,
        garden: 999999999,
        daysPaid: 31
    };

    hotelData = {
        id: 87,
        price: 999999999,
        guests: [
            {
                roomId: 1,
                name: 'Paris May',
                isLocked: false,
            },
            {
                roomId: 2,
                name: 'Paris May',
                isLocked: false,
            },
            {
                roomId: 3,
                name: 'Paris May',
                isLocked: false,
            },
            {
                roomId: 4,
                name: 'Paris May',
                isLocked: false,
            },
            {
                roomId: 5,
                name: 'Paris May',
                isLocked: false,
            },
        ],
        rooms: [
            {
                id: 1,
                category: 'Premium',
                isLocked: true,
                price: 68
            },
            {
                id: 2,
                category: 'Platinum',
                isLocked: true,
                price: 131
            },
            {
                id: 3,
                category: 'Standard',
                isLocked: true,
                price: 39
            },
            {
                id: 4,
                category: 'Premium',
                isLocked: true,
                price: 51
            },
            {
                id: 5,
                category: 'Standard',
                isLocked: true,
                price: 70
            },
        ]
    };

    constructor() {
        makeObservable(this, {
            meta: observable,

            houseData: observable,
            hotelData: observable,

            fetchHouseData: action.bound,
            fetchHotelData: action.bound,
            toggleHouseLock: action.bound,

        })
    }

    toggleHouseLock(type) {
        if (type === 0) this.houseData.houseLocked = !this.houseData.houseLocked;
        else this.houseData.garageLocked = !this.houseData.garageLocked;
    }

    async fetchHouseData(event) {
        this.meta.house = Meta.loading;
        this.houseData = {};

        const {isError, data} = await event;
        if (isError) {
            return this.meta.house = Meta.error;
        }

        runInAction(() => {
            this.houseData = data;
            this.meta.house = Meta.success;
        })
    }

    async fetchHotelData(event) {
        this.meta.hotel = Meta.loading;
        this.hotelData = {};

        const {isError, data} = await event;
        if (isError) {
            return this.meta.hotel = Meta.error;
        }

        runInAction(() => {
            this.hotelData = data;
            this.meta.hotel = Meta.success;
        })
    }

    destroy() {
    }
}