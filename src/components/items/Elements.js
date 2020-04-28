import React from 'react'
import Item from './Item'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types';

const  Elements = ({ elements, loading }) => {
    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style={elementStyle}>
                {
                    elements.map( item => (
                        <Item key={item.id} item={item} />
                    ))
                }
            </div>
        )
    }
    
}

Elements.propTypes = {
    elements: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const elementStyle = {
    display: 'grid', 
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Elements
