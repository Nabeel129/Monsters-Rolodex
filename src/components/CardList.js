import React from 'react'
import Card from './Card';

function CardList(props) {
    const { monsters } = props;
    return (
        <>
            <div className="card-list">

                {monsters.map((monster) =>
                    <Card monster={monster} />
                )}
            </div>
        </>
    )
}

export default CardList