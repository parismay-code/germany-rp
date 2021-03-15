import CCOption from "../../components/CCOption";

const FaceFeatures = (props) => {
    return <>
        {props.creatorData.faceFeatures.map((el, key) => {
            return <CCOption key={key} title={el.title} el={el} data={props.creatorData}/>
        })}
        {props.creatorData.limitations.map((el, key) => {
            return <CCOption key={key} title={el.title} el={el} data={props.creatorData}/>
        })}
    </>
}

export default FaceFeatures;