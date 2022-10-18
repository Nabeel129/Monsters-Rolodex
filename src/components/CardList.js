import React, { Component } from 'react'
import Card from './Card';

export class CardList extends Component {
    render() {
        const { monsters } = this.props;
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
}

export default CardList