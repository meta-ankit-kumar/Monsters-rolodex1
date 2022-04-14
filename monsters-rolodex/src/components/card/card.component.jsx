const Card = ({monster}) => {
    return (
        <div>
            <div className="monster-container">
                <img src={`https://robohash.org/${monster.id}?set=set2`} alt={`Robot Image ${monster.id}`} />
                <p>{monster.name}</p>
                <p>{monster.email}</p>
            </div>
        </div>
    )
}

export default Card;