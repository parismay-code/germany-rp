const TuningSpecification = (props) => {
    return <div className='tuning-specification'>
        <img src={props.thumb}/>
        <div className='tuning-specification__bar'>
            <div style={{width: `${props.value / props.maxValue * 100}%`}} />
        </div>
    </div>
}

export default TuningSpecification;