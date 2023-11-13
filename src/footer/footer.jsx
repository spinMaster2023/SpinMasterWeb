import './footer.css'
export function Footer(){
    return(
        <>
             <div className="content">


<div className="contact-wrapper animated bounceInUp">
    <div className="contact-form">
        <h3 className='logo'>Contact <span> us</span></h3>
        <form action="">
            <p>
                <label>Nombre</label>
                <input type="text" name="fullname"/>
            </p>
            <p>
                <label>Apellido </label>
                <input type="text" name="email"/>
            </p>
            <p>
                <label>Email</label>
                <input type="email" name="phone"/>
            </p>
            <p>
                <label>Telefono</label>
                <input type="tel" name="affair"/>
            </p>
            <p className="block">
               <label>Mensaje</label> 
                <textarea name="message" rows="3"></textarea>
            </p>
            <p className="block">
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-danger" type="button">Enviar</button>
  
            </div>
            </p>
        </form>
     </div>
     <div className="contact-info">
        <h4>Mas Informacion</h4>
        <ul>
            <li><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
             <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
             <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
             <path d="M11 4h2" />
             <path d="M12 17v.01" />
             </svg> 3253613345</li>
            <br />
            <li><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail " width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
             <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
             <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
             <path d="M3 7l9 6l9 -6" />
             </svg> spinMaster@gmail.com</li>
             <br />
             <li><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
             <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
             <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
             </svg>
             <svg xmlns="http://www.w3.org/2000/svg" className ="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24"              stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
             <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
             <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
             <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
             <path d="M16.5 7.5l0 .01" />
             </svg>
             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-x" width="44" height="44" viewBox="0 0 24 24"              stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
             <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
             <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
             <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
             </svg>
             
             <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none" viewBox="0 0 256 256"> <path d="M72,104a32,32,0,0,1,32-32l16,32-12.32,18.47a48.19,48.19,0,0,0,25.85,25.85L152,136l32,16a32,32,0,0,1-32,32A80,80,0,0,1,72,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
            </li>
        </ul>
        
     </div>
     </div>

       </div>

        </>
    )
}