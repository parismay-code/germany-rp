/* global alt */

import {useState, useEffect} from 'react';

import CCNavigation from "./components/CCNavigation";
import PlayerInfo from "./menus/PlayerInfo";
import FaceFeatures from "./menus/FaceFeatures";
import Hair from "./menus/Hair";

import gendersIcon from '../../assets/images/cCreator/gendersIcon.svg';
import faceFeaturesIcon from '../../assets/images/cCreator/faceFeaturesIcon.svg';
import hairIcon from '../../assets/images/cCreator/hairIcon.svg';
import close from '../../assets/images/close.svg';

import creatorData from "../../store/cCreator/creatorData";

import './CharacterCreator.scss';

const _creatorData = creatorData;

const CharacterCreator = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [navIcon, setNavIcon] = useState(gendersIcon);
    const [gender, setGender] = useState(_creatorData.player.gender);
    const [mother, setMother] = useState(_creatorData.parents.mother);
    const [father, setFather] = useState(_creatorData.parents.father);
    const [parentsMix, setParentsMix] = useState(_creatorData.parents.mix);
    const [bodyColor, setBodyColor] = useState(_creatorData.appearance.color.body);
    const [headHairColor, setHeadHairColor] = useState(_creatorData.appearance.color.headHair);
    const [eyebrowsColor, setEyebrowsColor] = useState(_creatorData.appearance.color.eyebrows);
    const [chestHairColor, setChestHairColor] = useState(_creatorData.appearance.color.chestHair);
    const [beardColor, setBeardColor] = useState(_creatorData.appearance.color.beard);

    useEffect(() => {
        _creatorData.player.gender = gender;
        _creatorData.parents.mother = mother;
        _creatorData.parents.father = father;
        _creatorData.parents.mix = parentsMix;
        _creatorData.appearance.color.body = bodyColor;
        _creatorData.appearance.color.headHair = headHairColor;
        _creatorData.appearance.color.eyebrows = eyebrowsColor;
        _creatorData.appearance.color.chestHair = chestHairColor;
        _creatorData.appearance.color.beard = beardColor;

        if ('alt' in window) {
            alt.emit('cef::characterCreator:preview', _creatorData);
        }
    }, [gender, mother, father, parentsMix, bodyColor, headHairColor, eyebrowsColor, chestHairColor, beardColor])

    useEffect(() => {
        switch (currentPage) {
            case 0:
                setNavIcon(gendersIcon);
                break;
            case 1:
                setNavIcon(faceFeaturesIcon);
                break;
            case 2:
                setNavIcon(hairIcon);
                break;
            default:
                break;
        }
    }, [currentPage])

    const nextPage = (bool) => {
        let next;

        if (bool) next = currentPage + 1;
        else next = currentPage - 1;

        if (next < 0) next = 2;
        if (next > 2) next = 0;

        setCurrentPage(next);
    }

    const pagesManager = () => {
        switch (currentPage) {
            case 0:
                return <PlayerInfo
                    creatorData={_creatorData}
                    gender={gender}
                    setGender={setGender}
                    mother={mother}
                    setMother={setMother}
                    father={father}
                    setFather={setFather}
                    parentsMix={parentsMix}
                    setParentsMix={setParentsMix}
                    bodyColor={bodyColor}
                    setBodyColor={setBodyColor}
                    palette={testPalette}
                />
            case 1:
                return <FaceFeatures
                    creatorData={_creatorData}
                />
            case 2:
                return <Hair
                    creatorData={_creatorData}
                    palette={testPalette}
                    headHairColor={headHairColor}
                    setHeadHairColor={setHeadHairColor}
                    eyebrowsColor={eyebrowsColor}
                    setEyebrowsColor={setEyebrowsColor}
                    chestHairColor={chestHairColor}
                    setChestHairColor={setChestHairColor}
                    beardColor={beardColor}
                    setBeardColor={setBeardColor}
                />
            default:
                return <></>
        }
    }

    const testPalette = [
        '#1C1B19',
        '#2E2926',
        '#40312C',
        '#39201B',
        '#603024',
        '#572019',
        '#844C31',
        '#82553E',
        '#81573E',
        '#845C43',
        '#957252',
        '#A38560',
        '#AC8B57',
        '#A78558',
        '#8E6A4A',
        '#713E2B',
        '#732F26',
        '#65191B',
        '#731B19',
        '#B04222',
        '#98482F',
        '#9C412A',
        '#897164',
        '#9D8678'
    ]

    return <div className='character-creator'>
        <div className='character-creator__menu'>
            <CCNavigation
                nextPage={nextPage}
                gender={gender}
                icon={navIcon}
            />
            {pagesManager()}
        </div>
        <img className='character-creator__exit' src={close} alt='#' onClick={() => {
            if ('alt' in window) {
                alt.emit('cef::component:close');
            }
        }}/>
        <div className='character-creator__create' onClick={() => {
            if ('alt' in window) {
                alt.emit('cef::characterCreator:create', _creatorData);
            }
        }}>Create
        </div>
    </div>
}

export default CharacterCreator;