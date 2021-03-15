import CDModel from "./CDModel";

import shopData from "../../../../store/shop/shopData";

import './CDModels.scss';

const CDModels = (props) => {
    return <div className='shop-options'>
        <div className='shop-options__title'>Select product</div>
        {shopData.map((el, key) => {
            return <CDModel
                item={props.item}
                setItem={props.setItem}
                key={key}
                name={el.name}
                id={el.id}
            />
        })}
    </div>
}

export default CDModels;