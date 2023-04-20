const Card = (props) => {
    return(
        <div className="card" onClick={props.onClick} id={props.card}>
            <h1 id={props.card}>{props.card}</h1>
        </div>
    )
}

export default Card;