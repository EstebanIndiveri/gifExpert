import React, { Fragment } from 'react';
import { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';
const GifExpertApp = ({defaultCategories=[]}) => {
    // const categories=['One Punch','Samurai X','Dragon Ball']

    const [categories,setCategories]=useState(defaultCategories);


    return ( 
        <Fragment>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
        <ul>
            {categories.map(categorie=>(
                <GifGrid 
                key={categorie}
                categorie={categorie}/>
            ))}
        </ul>
        </Fragment>
     );
}
 
export default GifExpertApp;