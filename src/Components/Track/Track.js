import React from 'react';
import './Track.css';

class Track extends React.Component {

    renderAction() {
        if(this.props.isRemoval){
            return <button className="Track-action">-</button>
        }else {
            return <button className="Track-action">+</button>
        }
    }

    render() {
        return (
            <div className="Track">
                
            </div>
        )
    }
}

export default Track;