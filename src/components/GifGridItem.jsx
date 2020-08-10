import React from 'react';
import PropTypes from 'prop-types';
const GrifGridItem = ({id,title,url}) => {
    // console.log(id,title,url);
    return ( 
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
     );
}
 
export default GrifGridItem;

GrifGridItem.propTypes={
    title:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired
}