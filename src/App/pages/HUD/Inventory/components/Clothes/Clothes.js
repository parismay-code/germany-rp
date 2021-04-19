import * as React from 'react';
import {observer} from "mobx-react-lite";

import Cell from "../Cell";

import man from '@assets/images/inventory/man.svg';

import { images } from "@store/images";

import './Clothes.scss';

const Clothes = ({ store }) => {
    const putOnClothes = React.useMemo(() => store.inventoryData.filter(el => el.type === 'clothes' && el.data.isPutOn === true), [store.inventoryData]);

    const hat = React.useMemo(() => putOnClothes.filter(el => el.data.item === 'hat'), [putOnClothes]);
    const glasses = React.useMemo(() => putOnClothes.filter(el => el.data.item === 'glasses'), [putOnClothes]);
    const tShirt = React.useMemo(() => putOnClothes.filter(el => el.data.item === 'tShirt'), [putOnClothes]);
    const bag = React.useMemo(() => putOnClothes.filter(el => el.data.item === 'bag'), [putOnClothes]);
    const accessory = React.useMemo(() => putOnClothes.filter(el => el.data.item === 'accessory'), [putOnClothes]);
    const pants = React.useMemo(() => putOnClothes.filter(el => el.data.item === 'pants'), [putOnClothes]);
    const top = React.useMemo(() => putOnClothes.filter(el => el.data.item === 'top'), [putOnClothes]);
    const armour = React.useMemo(() => putOnClothes.filter(el => el.data.item === 'armour'), [putOnClothes]);
    const watch = React.useMemo(() => putOnClothes.filter(el => el.data.item === 'watch'), [putOnClothes]);
    const gloves = React.useMemo(() => putOnClothes.filter(el => el.data.item === 'gloves'), [putOnClothes]);
    const shoes = React.useMemo(() => putOnClothes.filter(el => el.data.item === 'shoes'), [putOnClothes]);

    return <div className='inventory-clothes'>
        <img className='inventory-clothes__man' src={man} alt='#'/>
        <div className='inventory-clothes__top'>
            <Cell cell={hat} defaultThumb={images.defaultHat} />
        </div>
        <div className='inventory-clothes__left'>
            <Cell cell={glasses} defaultThumb={images.defaultGlasses} />
            <Cell cell={tShirt} defaultThumb={images.defaultTShirt} />
            <Cell cell={bag} defaultThumb={images.defaultBag} />
            <Cell cell={accessory} defaultThumb={images.defaultAccessory} />
            <Cell cell={pants} defaultThumb={images.defaultPants} />
        </div>
        <div className='inventory-clothes__right'>
            <Cell cell={top} defaultThumb={images.defaultTop} />
            <Cell cell={armour} defaultThumb={images.defaultArmour} />
            <Cell cell={watch} defaultThumb={images.defaultWatch} />
            <Cell cell={gloves} defaultThumb={images.defaultGloves} />
            <Cell cell={shoes} defaultThumb={images.defaultShoes} />
        </div>
    </div>
}

export default observer(Clothes);