import { NavHome } from '../navbar/navbar'
import { Seccion } from '../secciones/secciones'
import '../Noticias/style.css'
import { Noticias } from '../Noticias/noticias'

export function Home() {
    return (
        <>
            <NavHome></NavHome>
            
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-10 my-5 border border-dark border-5 mx-auto ">
                    <Noticias></Noticias>
                    </div>
                </div>
            </div>
            

            
        </>
    )
}