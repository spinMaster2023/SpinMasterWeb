import './servicios.css'

export function Services() {
  return (
    <>
      <div className='fondo'>

        <div className="container-fluid ">
          <div className="row">
            <div className="col-12">
              <div className="contenedor">
                <div className="item item-1 m-2 "><img src="../../src/assets/img/jugador.png" alt="" className='principal' /></div>
                <div className="item item-2 "><img src="../../src/assets/img/saques.png" alt="" className=' imagenes ' /></div>
                <div className="item item-3 "><img src="../../src/assets/img/posicion.png" alt="" className='imagenes ' /></div>
                <div className="item item-4 "><img src="../../src/assets/img/tecnicas.png" alt="" className=' imagenes ' /></div>
                <div className="item-5 "><p>En nuestra página, te sumergirás en el fascinante mundo del ping pong, aprendiendo desde los fundamentos esenciales hasta las técnicas avanzadas. Descubrirás la perfección en la ejecución de saques, dominarás las posiciones estratégicas en la mesa y adquirirás habilidades técnicas que te convertirán en un jugador de ping pong más hábil y competitivo. ¡Prepárate para elevar tu juego con nosotros!</p></div>
                <div className="item-6 "><button className='btn  fs-5 botonic'> Registrate!</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="container-fluid cont2">
        <div className="row">
          <div className="col-12">

            <div className="contenedor2">
              <div className="item item-1 m-2">
              <p>En nuestra página, te sumergirás en el fascinante mundo del ping pong, aprendiendo desde los fundamentos esenciales hasta las técnicas avanzadas. Descubrirás la perfección en la ejecución de saques, dominarás las posiciones estratégicas en la mesa y adquirirás habilidades técnicas que te convertirán en un jugador de ping pong más hábil y competitivo. ¡Prepárate para elevar tu juego con nosotros!</p>
              <button className='btn  fs-5 botonic'>Registrate!</button>
              </div>
              
                
              
              <div className="item item-2 col-12 col-md-6 col-lg-4">
                <img src="../../src/assets/img/saques.png" alt="" className='imagenes' />
              </div>
              <div className="item item-3 col-12 col-md-6 col-lg-4">
                <img src="../../src/assets/img/posicion.png" alt="" className='imagenes' />
              </div>
              <div className="item item-4 col-12 col-md-6 col-lg-4">
                <img src="../../src/assets/img/tecnicas.png" alt="" className='imagenes' />
              </div>

              
            </div>
          </div>
        </div>
      </div>



    </>
  )
}