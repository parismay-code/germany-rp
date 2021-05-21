/* global alt */
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
            gender: 0,
            birthday: undefined,
            birthPlace: undefined
        },
        parents: {
            father: 0,
            mother: 0,
            mix: 0,
        },
        appearance: {
            hair: [
                {
                    title: 'Haare',
                    value: 0
                },
                {
                    title: 'Augenbrauen',
                    value: 0
                },
                {
                    title: 'Brustbehaarung',
                    value: 0
                },
                {
                    title: 'Bart',
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
                title: 'Nasenbreite',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'noseHeight',
                title: 'Nasenhöhe',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'noseLength',
                title: 'Nasenlänge',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'noseBridge',
                title: 'Nasenrücken',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'noseDisplacement',
                title: 'Nasenverschiebung', //todo:Nasenverschiebung?
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'noseTip',
                title: 'Nasenspitze',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'eyebrowsWidth',
                title: 'Augenbrauenbreite',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'eyebrowsHeight',
                title: 'Augenbrauenhöhe',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'eyebrowsDeep',
                title: 'Augenbrauentiefe',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'cheekboneWidth',
                title: 'Wangenknochenbreite',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'cheekboneHeight',
                title: 'Wangenknochenhöhe',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'cheekDeep',
                title: 'Wangenbreite',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'eyesWidth',
                title: 'Augengröße',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'lipsWidth',
                title: 'Lippenfülle',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'jawWidth',
                title: 'Kieferbreite',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'jawHeight',
                title: 'Kieferhöhe',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'jawDeep',
                title: 'Kiefertiefe',
                value: 0,
                min: 0,
                max: 100,
                step: 1
            },
            {
                type: 'jawIndent',
                title: 'Kiefereinzug', //todo:Was das?
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'chinWidth',
                title: 'Kinnbreite',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'chinHeight',
                title: 'Kinnhöhe',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'chinLength',
                title: 'Kinnposition',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'chinShape',
                title: 'Kinnform',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'neckWidth',
                title: 'Nackenbreite',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'test',
                title: 'Tester',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
            {
                type: 'cheekWidth',
                title: '',
                value: 0,
                min: -1,
                max: 1,
                step: 0.01
            },
        ],
        limitations: [
            {
                type: 'blemishes',
                title: 'Schönheitsfehler',
                value: 1,
                min: 0,
                max: 24,
                step: 1
            },
            {
                type: 'ageing',
                title: 'Alterung',
                value: 1,
                min: 0,
                max: 15,
                step: 1
            },
            {
                type: 'molesFreckles',
                title: 'Muttermale und Sommersprossen',
                value: 1,
                min: 0,
                max: 18,
                step: 1
            }
        ]
    }

    constructor() {
        makeObservable(this, {
            meta: observable,
            creatorData: observable,

            changeNickname: action.bound,
            changeBirthInfo: action.bound,
            changeGender: action.bound,
            changeParents: action.bound,
            changeParentsMix: action.bound,
            changeColor: action.bound,
            changeSkinColor: action.bound,
            changeFaceFeatures: action.bound,
            changeHair: action.bound
        })
    }

    changeNickname(type, text) {
        if (type === 0) this.creatorData.player.nickname.firstname = text;
        else this.creatorData.player.nickname.lastname = text;
    }

    changeBirthInfo(type, text) {
        if (type === 0) this.creatorData.player.birthday = text;
        else this.creatorData.player.birthPlace = text;
    }

    changeGender(gender) {
        this.creatorData.player.gender = gender;

        if ('alt' in window) {
            alt.emit('client::characterCreator:preview', this.creatorData);
        }
    }

    changeParents(parent, number) {
        if (parent === 0) this.creatorData.parents.mother = number;
        else this.creatorData.parents.father = number;

        if ('alt' in window) {
            alt.emit('client::characterCreator:preview', this.creatorData);
        }
    }

    changeParentsMix(value) {
        this.creatorData.parents.mix = value;

        if ('alt' in window) {
            alt.emit('client::characterCreator:preview', this.creatorData);
        }
    }

    changeSkinColor(value) {
        this.creatorData.appearance.color.body = value;
        if ('alt' in window) {
            alt.emit('client::characterCreator:preview', this.creatorData);
        }
    }

    changeColor(type, value) {
        switch (type) {
            case 'body':
                this.creatorData.appearance.color.body = value;
                break;
            case 'headHair':
                this.creatorData.appearance.color.headHair = value;
            break;
            case 'eyebrows':
                this.creatorData.appearance.color.eyebrows = value;
                break;
            case 'chestHair':
                this.creatorData.appearance.color.chestHair = value;
                break;
            case 'beard':
                this.creatorData.appearance.color.beard = value;
                break;
            case 'eyes':
                this.creatorData.appearance.color.eyes = value;
                break;
            default: break;
        }

        if ('alt' in window) {
            alt.emit('client::characterCreator:preview', this.creatorData);
        }
    }

    changeFaceFeatures(type, value) {
        switch (type) {
            case 'noseWidth':
                this.creatorData.faceFeatures[0].value = value;
                break;
            case 'noseHeight':
                this.creatorData.faceFeatures[1].value = value;
                break;
            case 'noseLength':
                this.creatorData.faceFeatures[2].value = value;
                break;
            case 'noseBridge':
                this.creatorData.faceFeatures[3].value = value;
                break;
            case 'noseDisplacement':
                this.creatorData.faceFeatures[4].value = value;
                break;
            case 'noseTip':
                this.creatorData.faceFeatures[5].value = value;
                break;
            case 'eyebrowsWidth':
                this.creatorData.faceFeatures[6].value = value;
                break;
            case 'eyebrowsHeight':
                this.creatorData.faceFeatures[7].value = value;
                break;
            case 'eyebrowsDeep':
                this.creatorData.faceFeatures[8].value = value;
                break;
            case 'cheekboneWidth':
                this.creatorData.faceFeatures[9].value = value;
                break;
            case 'cheekboneHeight':
                this.creatorData.faceFeatures[10].value = value;
                break;
            case 'cheekDeep':
                this.creatorData.faceFeatures[11].value = value;
                break;
            case 'eyesWidth':
                this.creatorData.faceFeatures[12].value = value;
                break;
            case 'lipsWidth':
                this.creatorData.faceFeatures[13].value = value;
                break;
            case 'jawWidth':
                this.creatorData.faceFeatures[14].value = value;
                break;
            case 'jawHeight':
                this.creatorData.faceFeatures[15].value = value;
                break;
            case 'jawDeep':
                this.creatorData.faceFeatures[16].value = value;
                break;
            case 'jawIndent':
                this.creatorData.faceFeatures[17].value = value;
                break;
            case 'chinWidth':
                this.creatorData.faceFeatures[18].value = value;
                break;
            case 'chinHeight':
                this.creatorData.faceFeatures[19].value = value;
                break;
            case 'chinLength':
                this.creatorData.faceFeatures[20].value = value;
                break;
            case 'chinShape':
                this.creatorData.faceFeatures[21].value = value;
                break;
            case 'neckWidth':
                this.creatorData.faceFeatures[22].value = value;
                break;
            case 'test':
                this.creatorData.faceFeatures[23].value = value;
                break;
            case 'blemishes':
                this.creatorData.limitations[0].value = value;
                break;
            case 'ageing':
                this.creatorData.limitations[1].value = value;
                break;
            case 'molesFreckles':
                this.creatorData.limitations[2].value = value;
                break;
            default: break;
        }

        if ('alt' in window) {
            alt.emit('client::characterCreator:preview', this.creatorData);
        }
    }

    changeHair(type, value) {
        switch (type) {
            case 0:
                this.creatorData.appearance.hair[0].value = value;
                break;
            case 1:
                this.creatorData.appearance.hair[1].value = value;
                break;
            case 2:
                this.creatorData.appearance.hair[2].value = value;
                break;
            case 3:
                this.creatorData.appearance.hair[3].value = value;
                break;
            default: break
        }

        if ('alt' in window) {
            alt.emit('client::characterCreator:preview', this.creatorData);
        }
    }

    destroy() {
    }
}