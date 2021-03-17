import {
    action,
    makeObservable,
    observable
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
                type: 'noseWidth',
                title: 'Nose width',
                value: 0
            },
            {
                type: 'noseHeight',
                title: 'Nose height',
                value: 0
            },
            {
                type: 'noseLength',
                title: 'Nose length',
                value: 0
            },
            {
                type: 'noseBridge',
                title: 'Nose bridge',
                value: 0
            },
            {
                type: 'noseBridgeShaft',
                title: 'Nose bridge shaft',
                value: 0
            },
            {
                type: 'noseTip',
                title: 'Nose tip',
                value: 0
            },
            {
                type: 'eyebrowsWidth',
                title: 'Eyebrows width',
                value: 0
            },
            {
                type: 'eyebrowsHeight',
                title: 'Eyebrows height',
                value: 0
            },
            {
                type: 'eyebrowsDeep',
                title: 'Eyebrows deep',
                value: 0
            },
            {
                type: 'cheekboneWidth',
                title: 'Cheekbone width',
                value: 0
            },
            {
                type: 'cheekboneHeight',
                title: 'Cheekbone height',
                value: 0
            },
            {
                type: 'cheekDeep',
                title: 'Cheek deep',
                value: 0
            },
            {
                type: 'eyesWidth',
                title: 'Eyes width',
                value: 0
            },
            {
                type: 'lipsWidth',
                title: 'Lips width',
                value: 0
            },
            {
                type: 'jawWidth',
                title: 'Jaw width',
                value: 0
            },
            {
                type: 'jawHeight',
                title: 'Jaw height',
                value: 0
            },
            {
                type: 'jawDeep',
                title: 'Jaw deep',
                value: 0
            },
            {
                type: 'jawIndent',
                title: 'Jaw indent',
                value: 0
            },
            {
                type: 'chinWidth',
                title: 'Chin width',
                value: 0
            },
            {
                type: 'chinHeight',
                title: 'Chin height',
                value: 0
            },
            {
                type: 'chinLength',
                title: 'Chin length',
                value: 0
            },
            {
                type: 'chinShape',
                title: 'Chin shape',
                value: 0
            },
            {
                type: 'neckWidth',
                title: 'Neck width',
                value: 0
            }
        ],
        limitations: [
            {
                type: 'blemishes',
                title: 'Blemishes',
                value: 0
            },
            {
                type: 'ageing',
                title: 'Ageing',
                value: 0
            },
            {
                type: 'molesFreckles',
                title: 'Moles and freckles',
                value: 0
            }
        ]
    }

    constructor() {
        makeObservable(this, {
            meta: observable,
            creatorData: observable,

            changeNickname: action.bound,
            changeGender: action.bound,
            changeParents: action.bound,
            changeParentsMix: action.bound,
            changeColor: action.bound,
            changeFaceFeatures: action.bound,
            changeHair: action.bound
        })
    }

    changeNickname(type, text) {
        if (type === 0) this.creatorData.player.nickname.firstname = text;
        else this.creatorData.player.nickname.lastname = text;
    }

    changeGender(gender) {
        this.creatorData.player.gender = gender;
    }

    changeParents(parent, number) {
        if (parent === 0) this.creatorData.parents.mother = number;
        else this.creatorData.parents.father = number;
    }

    changeParentsMix(value) {
        this.creatorData.parents.mix = value;
    }

    changeColor(type, value) {
        switch (type) {
            case 'body': return this.creatorData.appearance.color.body = value;
            case 'headHair': return this.creatorData.appearance.color.headHair = value;
            case 'eyebrows': return this.creatorData.appearance.color.eyebrows = value;
            case 'chestHair': return this.creatorData.appearance.color.chestHair = value;
            case 'beard': return this.creatorData.appearance.color.beard = value;
            case 'eyes': return this.creatorData.appearance.color.eyes = value;
            default: return;
        }
    }

    changeFaceFeatures(type, value) {
        switch (type) {
            case 'noseWidth': return this.creatorData.faceFeatures[0].value = value;
            case 'noseHeight': return this.creatorData.faceFeatures[1].value = value;
            case 'noseLength': return this.creatorData.faceFeatures[2].value = value;
            case 'noseBridge': return this.creatorData.faceFeatures[3].value = value;
            case 'noseBridgeShaft': return this.creatorData.faceFeatures[4].value = value;
            case 'noseTip': return this.creatorData.faceFeatures[5].value = value;
            case 'eyebrowsWidth': return this.creatorData.faceFeatures[6].value = value;
            case 'eyebrowsHeight': return this.creatorData.faceFeatures[7].value = value;
            case 'eyebrowsDeep': return this.creatorData.faceFeatures[8].value = value;
            case 'cheekboneWidth': return this.creatorData.faceFeatures[9].value = value;
            case 'cheekboneHeight': return this.creatorData.faceFeatures[10].value = value;
            case 'cheekDeep': return this.creatorData.faceFeatures[11].value = value;
            case 'eyesWidth': return this.creatorData.faceFeatures[12].value = value;
            case 'lipsWidth': return this.creatorData.faceFeatures[13].value = value;
            case 'jawWidth': return this.creatorData.faceFeatures[14].value = value;
            case 'jawHeight': return this.creatorData.faceFeatures[15].value = value;
            case 'jawDeep': return this.creatorData.faceFeatures[16].value = value;
            case 'jawIndent': return this.creatorData.faceFeatures[17].value = value;
            case 'chinWidth': return this.creatorData.faceFeatures[18].value = value;
            case 'chinHeight': return this.creatorData.faceFeatures[19].value = value;
            case 'chinLength': return this.creatorData.faceFeatures[20].value = value;
            case 'chinShape': return this.creatorData.faceFeatures[21].value = value;
            case 'neckWidth': return this.creatorData.faceFeatures[22].value = value;
            case 'blemishes': return this.creatorData.limitations[0].value = value;
            case 'ageing': return this.creatorData.limitations[1].value = value;
            case 'molesFreckles': return this.creatorData.limitations[2].value = value;
            default: return;
        }
    }

    changeHair(type, value) {
        switch (type) {
            case 0: return this.creatorData.appearance.hair[0].value = value;
            case 1: return this.creatorData.appearance.hair[1].value = value;
            case 2: return this.creatorData.appearance.hair[2].value = value;
            case 3: return this.creatorData.appearance.hair[3].value = value;
            default: return;
        }
    }

    destroy() {
    }
}