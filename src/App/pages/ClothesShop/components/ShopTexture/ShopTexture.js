import * as React from 'react';
import {observer} from 'mobx-react-lite';

import circleArrow from "@assets/images/cCreator/circleArrow.svg";

import './ShopTexture.scss';

const ShopTexture = ({ store, currentComponent, texture, setTexture, item }) => {
    return <div className='shop-texture'>
        <div className='shop-texture-header'>
            <div className='shop-texture-header__count'>{texture} color</div>
            <div className='shop-texture-header-input'>
                <img
                    className='shop-texture-header-input__leftArrow'
                    src={circleArrow}
                    alt='#'
                    onClick={() => {
                        if (texture - 1 < 0) setTexture(store.clothesShopData.filter(el => el.category === currentComponent)[item]?.textures.length - 1);
                        else setTexture(texture => texture - 1);
                    }}
                />
                <input
                    type='range'
                    min='0'
                    max={store.clothesShopData.filter(el => el.category === currentComponent)[item]?.textures.length - 1}
                    value={texture}
                    onChange={(e) => setTexture(Number(e.target.value))}
                />
                <img
                    className='shop-texture-header-input__rightArrow'
                    src={circleArrow}
                    alt='#'
                    onClick={() => {
                        if (texture + 1 > store.clothesShopData.filter(el => el.category === currentComponent)[item]?.textures.length - 1) setTexture(0)
                        else setTexture(texture => texture + 1);
                    }}
                />
            </div>
        </div>
    </div>
}

export default observer(ShopTexture);