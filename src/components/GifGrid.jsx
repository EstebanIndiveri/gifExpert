import React,{ Fragment} from 'react'
import GrifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


const GifGrid = ({categorie}) => {

    const {data:images,loading}= useFetchGifs(categorie);
    
    return ( 
        <Fragment>
        <h3>{categorie}</h3>
        {loading&&'Cargando'}
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