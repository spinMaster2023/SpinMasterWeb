import './style.css'
export function Noticias() {

    return (
        <>
            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card-container">
                            <div className="card">
                                <div className="img-content ">
                                    <img src="/src/assets/img/trofeo.jfif" alt="" width="500px" />
                                </div>
                                <div className="content wn">
                                    <p className="heading">Inicio de Torneo</p>
                                    <p className='wn'>
                                    El emocionante torneo ha comenzado, y la sala está llena de energía vibrante y expectación.
                                    </p>
                                    <button type="button" className="btn btn-dark">VER MAS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card-container">
                            <div className="card">
                                <div className="img-content">
                                    <img src="/src/assets/img/mesa.jfif" alt="" width="400px" height="450px"/>
                                </div>
                                <div className="content">
                                    <p className="wn heading ">Enfrentamiento</p>
                                    <p className='cn text-dark'>
                                    En un futuro cercano, el mundo del tenis de mesa colombiano se prepara para un enfrentamiento épico entre dos profesionales de renombre. La expectación crece a medida que estos titanes se enfrentan en la mesa, cada uno llevando consigo una destreza técnica y estrategias ingeniosas. 
                                    </p>
                                    <button type="button" className="btn btn-dark">VER MAS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card-container">
                            <div className="card">
                                <div className="img-content ">
                                    <img src="/src/assets/img/jugador salto.jfif" alt="" width="400px" height="450px" />
                                </div>
                                <div className="content">
                                    <p className="heading text-black">Imprecionante</p>
                                    <p className="cn text-dark">
                                    En el punto crucial del emocionante encuentro, el talentoso jugador colombiano de tenis de mesa desató una jugada que dejaría a la audiencia atónita. Con una mezcla magistral de velocidad y precisión, ejecutó un espectacular golpe de revés, enviando la pelota a una esquina aparentemente inalcanzable para su oponente.
                                    </p>
                                    <button type="button" className="btn btn-dark">VER MAS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card-container">
                            <div className="card">
                                <div className="img-content">
                                    <img src="/src/assets/img/alien.jfif" alt=""  width="400px" height="450px"/>
                                </div>
                                <div className="content">
                                    <p className="wn heading">Sorprendente</p>
                                    <p className='wn text-black'>
                                    La pelota utilizada en el tenis de mesa puede alcanzar velocidades sorprendentes, a menudo superando los 100 kilómetros por hora en intercambios rápidos. Esta rapidez extrema hace que el tenis de mesa sea uno de los deportes de raqueta más rápidos del mundo.
                                    </p>
                                    <button type="button" className="btn btn-dark">VER MAS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        

            
        </>
    )
}