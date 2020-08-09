export const getGifs=async(categorie)=>{
    const serch='rickandmorty'
    const api_key='gs2MkNPA7u0xdAqh3u1rTva6smue9sOT'
    const limit=10;
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorie)}&limit=${limit}&api_key=${api_key}`
    const res=await fetch(url);
    const {data}=await res.json();
    const gifs=data.map(img=>{
        return{
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })
    return gifs
}