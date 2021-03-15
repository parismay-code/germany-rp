import CDClass from "./CDClass";

import food from '../../../../assets/images/shop/food.svg';
import drink from '../../../../assets/images/shop/drink.svg';
import misc from '../../../../assets/images/shop/misc.svg';

import './CDClasses.scss';

const CDClasses = (props) => {
    return <div className='car-dealer-class'>
        <CDClass image={food} currentType='food' type={props.type} setType={props.setType}/>
        <CDClass image={drink} currentType='drink' type={props.type} setType={props.setType}/>
        <CDClass image={misc} currentType='misc' type={props.type} setType={props.setType}/>
    </div>
}

export default CDClasses;