import { createContext, useEffect, useState } from "react";

export const PhotosContext = createContext()

const URL = "/photos.json"

const PhotosProvider = ({ children }) =>{

    const [fotos, setFotos] = useState([])

    const getFotos = async () => {
        const res = await fetch(URL)
        const {photos: photosDB} = await res.json()
        setFotos(photosDB.map( (photo)=> ({...photo, isFavorite: false})))
    }

    useEffect( ()=> {
        getFotos()
    }, [])


    return (
        <PhotosContext.Provider
            value={{
                fotos,
                setFotos
            }}
        >
            {children}
        </PhotosContext.Provider>
    )
    
}  
export default PhotosProvider

