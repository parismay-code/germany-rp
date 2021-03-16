import {
    action,
    makeObservable,
    observable,
    runInAction
} from "mobx";

import {Meta} from '@utils/meta';

export default class CreatorStore {
    meta = Meta.initial;

    creatorData = {
        player: {
            nickname: {
                firstname: undefined,
                lastname: undefined
            },
            gender: 0
        },
        parents: {
            father: 0,
            mother: 0,
            mix: 0,
        },
        appearance: {
            hair: [
                {
                    title: 'Hairstyle',
                    value: 0
                },
                {
                    title: 'Eyebrows',
                    value: 0
                },
                {
                    title: 'Chest hair',
                    value: 0
                },
                {
                    title: 'Beard and mustache',
                    value: 0
                }
            ],
            color: {
                body: 0,
                headHair: 0,
                eyebrows: 0,
                chestHair: 0,
                beard: 0,
                eyes: 0,
            }
        },
        faceFeatures: [
            {
                title: 'Nose width',
                value: 0
            },
            {
                title: 'Nose height',
                value: 0
            },
            {
                title: 'Nose length',
                value: 0
            },
            {
                title: 'Nose bridge',
                value: 0
            },
            {
                title: 'Nose bridge shaft',
                value: 0
            },
            {
                title: 'Nose tip',
                value: 0
            },
            {
                title: 'Eyebrows width',
                value: 0
            },
            {
                title: 'Eyebrows height',
                value: 0
            },
            {
                title: 'Eyebrows deep',
                value: 0
            },
            {
                title: 'Cheekbone width',
                value: 0
            },
            {
                title: 'Cheekbone height',
                value: 0
            },
            {
                title: 'Cheek deep',
                value: 0
            },
            {
                title: 'Eyes width',
                value: 0
            },
            {
                title: 'Lips width',
                value: 0
            },
            {
                title: 'Jaw width',
                value: 0
            },
            {
                title: 'Jaw height',
                value: 0
            },
            {
                title: 'Jaw deep',
                value: 0
            },
            {
                title: 'Jaw indent',
                value: 0
            },
            {
                title: 'Chin width',
                value: 0
            },
            {
                title: 'Chin height',
                value: 0
            },
            {
                title: 'Chin length',
                value: 0
            },
            {
                title: 'Chin shape',
                value: 0
            },
            {
                title: 'Neck width',
                value: 0
            }
        ],
        limitations: [
            {
                title: 'Blemishes',
                value: 0
            },
            {
                title: 'Ageing',
                value: 0
            },
            {
                title: 'Moles and freckles',
                value: 0
            }
        ],
        hair: [
            ['1', '2', '3', '4'], // head
            ['1', '2', '3', '4', '5'], // eyebrows
            ['1', '2', '3', '4', '5', '6'], // chest
            ['1', '2', '3', '4', '5', '6', '7'], // beard
        ]
    }

    constructor() {
        makeObservable(this, {
            meta: observable,
            creatorData: observable,
        })
    }

    destroy() {
    }
}