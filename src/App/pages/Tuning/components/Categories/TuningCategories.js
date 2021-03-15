import TuningCategory from "./Category";

import tuningData from "../../../../store/tuning/tuningData";

import './TuningCategories.scss';

const TuningCategories = () => {
    return <div className='tuning-categories'>
        <div className='tuning-categories__title'>Categories</div>
        <div className='tuning-categories-content'>
            {tuningData.map((el, key) => {
                return <TuningCategory key={key} id={el.id} type={el.type} image={el.image} />
            })}
        </div>
    </div>
}

export default TuningCategories;