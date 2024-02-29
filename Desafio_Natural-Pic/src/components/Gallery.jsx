import { useContext } from "react"
import IconHeart from "./IconHeart"
import { PhotosContext } from "../context/PhotosContext"

const Gallery = () => {
    const { fotos, setFotos } = useContext(PhotosContext)

    const agregarFavorito = (id) => {
        const fotosNuevas = fotos.map((foto) => {
            if(foto.id === id){
                return{
                    ...foto,
                    isFavorite: !foto.isFavorite
                }
            }
            return foto
        })
        setFotos(fotosNuevas)
    }
  
    return (
    <div className="gallery grid-columns-5 p-3">
        {
            fotos.map((foto, id) => (
                <div
                    onClick={()=> agregarFavorito(foto.id)}
                    className="photo"
                    style={{ backgroundImage: `url(${foto.src.tiny})` }}
                    key={id}
                >
                    <IconHeart relleno={foto.isFavorite} />
                    <p>{foto.desc}</p>
                </div>
            ))
        }

    </div>
  )
}

export default Gallery