
import './navbar.css'




export function NavHome(){
    return(
        <>
           
            <nav class="navbar navbar-expand-lg  " >
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">  SpinMaster</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link ip" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  ip" href="#">Conocenos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  ip" href="#">Noticias</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  ip" href="#">Deporte</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
      <button className="btn  ip" type="submit"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
</svg> Invitado</button>
      
      
        <button className="btn btn-outline-secondary mx-2 text-white bn" type="submit">Iniciar Sesion</button>
        <button className="btn btn-outline-secondary text-white bn" type="submit">Registrar</button>
      </form>
    </div>
  </div>
</nav>

        </>
    )
}