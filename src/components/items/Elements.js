import React from 'react'
import Item from './Item'
import PropTypes from 'prop-types';

const  Elements = ({ elements }) => {
    return (
        <React.Fragment>
            
            {
                elements.length > 0 ?
                <div className="grid-3">
                {    elements.map( item => (
                        <Item key={item.id} item={item} />
                    )) }
                </div>
                : <div className="noData">
                    <h2>No data was found</h2>
                    <p>Try a different search criteria</p>
                  </div>
            }
        
        </React.Fragment>
    )
}

Elements.propTypes = {
    elements: PropTypes.array.isRequired
}

export default Elements
