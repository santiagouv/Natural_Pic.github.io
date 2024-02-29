import { useContext } from "react";
import { PhotosContext } from "../context/PhotosContext";

const Favorites = () => {
    const { fotos, setFotos } = useContext(PhotosContext)

    const eliminarFavoritos = (id) => {
        const fotosNuevas = fotos.map((foto)=>{
            if(foto.id === id){
                return{
                    ...foto,
                    isFavorite: false,
                }
            }
            return foto
        })
        setFotos(fotosNuevas)
    }

    return (
        <div>

            <h1>Mis Fotos Favoritas</h1>
            <div className="p-3 gallery grid-columns-4">
                {fotos
                    .filter((foto)=>foto.isFavorite)
                    .map((foto,id)=>(
                        <img
                            src={foto.src.tiny}
                            alt=""
                            onClick={()=>eliminarFavoritos(foto.id)}
                            key={id}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Favorites