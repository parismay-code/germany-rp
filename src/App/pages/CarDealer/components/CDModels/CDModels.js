import CDModel from "./CDModel";

import carsData from "../../../../store/carDealer/carsData";

import './CDModels.scss';

const CDModels = (props) => {
    return <div className='car-dealer-models'>
        <div className='car-dealer-models__title'>Select model car</div>
        {carsData[props.autoClass].cars.map((el, key) => {
            return <CDModel
                model={props.model}
                setModel={props.setModel}
                key={key}
                name={el.name}
                id={el.id}
            />
        })}
    </div>
}

export default CDModels;