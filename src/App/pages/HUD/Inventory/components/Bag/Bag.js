import './Bag.scss';
import Header from "../Header";
import Cell from "../Cell";

const Bag = (props) => {

    if (props.inventoryData) {
        const bagWeight = props.inventoryData.reduce((acc, el) => {
            return acc + el.data.weight;
        }, 0);

        return <div className='bag'>
            <Header
                title='Bag'
                weight={bagWeight}
                slots={props.inventoryData.length}
                notBlank={props.inventoryData.filter(el => el.visual.thumb !== undefined).length}
            />
            <div className='bag__slots'>
                {props.inventoryData.map((el, key) => {
                    return <Cell
                        key={key}
                        position={el.position}
                        thumb={el.visual.thumb}
                    />
                })}
            </div>
        </div>
    } else return <></>
}

export default Bag;