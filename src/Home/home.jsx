import './Home.css'
import { NavHome } from '../navbar/navbar'

import { Noticias } from '../Noticias/noticias'
import { Seccion1 } from '../secciones/seccion1'
import { Seccion2 } from '../secciones/seccion2'
import { Services } from '../servicios/servicios'
import { Footer } from '../footer/footer'
export function Home() {
    return (
        <>

            
            
            <body>
            <NavHome></NavHome>
            <a href="#top"><img src="/src/assets/img/empty.gif" alt="" style={{position: 'fixed', bottom: 20, right: '3%'}} width="100" className='ir-arriba'></img> </a>
            
           
                    <Seccion1></Seccion1>    
                    
                    <Services></Services>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-10 my-5 mx-auto">
                            <Noticias></Noticias>
                            </div>
                        </div>
                    </div>
                    </body>
                    <Seccion2></Seccion2>
                    <Footer></Footer>
          
            
            
        </>
    )
}