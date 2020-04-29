import React from 'react'
import PropTypes from 'prop-types';

const Item = ({item:  { name, type, img }}) => {

    return (
        <div className="card text-center">
            <img src={type} alt="" className="round-img" style={{ width: '60px' }} /> 
            <h3>{name}</h3>

            <div>
            <img src={img} alt="" className="round-img" style={{ width: '60px' }} /> 
            </div>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Item