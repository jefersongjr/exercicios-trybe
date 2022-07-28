import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { name, tipo , peso , image } = this.props;
        return (
            <div className='card'>
                <div className='circle'>
                <img src={image} alt={name} />
                </div>
                <div className='square'>
                <p>{ name }</p>
                <p>{ tipo }</p>
                <p>{`${peso} kg`}</p>
                </div>
            </div>
        );
    }
}

export default Pokemon;