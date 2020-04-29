import React from 'react'
import PropTypes from 'prop-types';

const Item = ({item:  { name, type, img }}) => {

    return (
        <div className="card text-center">
            <img src={type} alt="" className="round-img" style={{ width: '60px' }} /> 
            <h3 style={{ marginBottom: '15px' }}>{name}</h3>

            <img src={img} alt="" style={{ width: '60px' }} /> 
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Item