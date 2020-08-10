import React,{ Fragment} from 'react'
import GrifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

const GifGrid = ({categorie}) => {

    const {data:images,loading}= useFetchGifs(categorie);
    
    return ( 
        <Fragment>
        <h3 className="card animate__animated animate__fadeIn">{categorie}</h3>
        {loading&&<p className="card animate__animated animate__flash">loading</p>}
        <div className="card-grid">
                {
                    images.map(image=>(
                        <GrifGridItem 
                        key={image.id}
                        {...image}
                        />
                    ))
                }
        </div>
        </Fragment>
     );
}
 
export default GifGrid;

GifGrid.propTypes={
    categorie:PropTypes.string.isRequired
}