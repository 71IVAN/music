import './Fans.css'
import 'animate.css'
import WOW from 'wow.js'
import { useEffect } from 'react'

export  function Fans(){
   
  useEffect(function(){
    const wow = new WOW()
  },[])

    return(
        <>
        <div className="fans mt-5">
           <form>
            <h4 className='text-center text-light'>Se parte del mundo POST</h4>
            <div className="container mt-5">
              <div className="row">
                  <div className="col-12 col-md-12">
                      <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1" required><i className="bi bi-person-circle"></i>
                          </span>
                          <input type="text" className="form-control" placeholder="Nombre " />
                      </div>
                  </div>
                  <div className="col-12 col-md-12">
                      <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1" required> @</span>
                          <input type="text" className="form-control" placeholder="Correo cliente" />
                      </div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-12">
                      <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1" required><i class="bi bi-phone-fill"></i></span>
                          <input type="text" className="form-control" placeholder="Telefono Cliente" />
                      </div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-12 col-md-12">
                      <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1"><i class="bi bi-calendar-check-fill"></i></span>
                          <input type="date" className="form-control"  />
                      </div>
                  </div>
              </div>
              </div>
              <button type='submit' className='btn btn-primary mx-auto'>Enviar</button>



            </form>
      <div className='fans2'>
      <form>        
      <h4  className="my-5 text-center text-light">Que tanto sabes de PostMalone</h4>
      <div className="mb-3 mt-5 ">
        <label for="pregunta1" className="form-labe text-white ">¿Quien es PostMalone?</label>
        <select className="form-select" id="pregunta1" required>
          <option value="">Seleccione una respuesta</option>
          <option value="a">Profesor</option>
          <option value="b">Arquitecto</option>
          <option value="c">El donald trump del HipHop</option>
        </select>
        <div className="invalid-feedback">
          Elige una respuesta.
        </div>
      </div>
      <br />
      <div className="mb-3 ">
        <label for="pregunta1" className="form-label text-white">¿Cuando nacio?</label>
        <select className="form-select" id="pregunta1" required>
          <option value="">Elige tu respuesta</option>
          <option value="a">4 de julio, 1990 </option>
          <option value="b">4 de julio, 1985  </option>
          <option value="c">4 de julio, 1995 </option>
        </select>
        <div className="invalid-feedback">
          Elige una respuesta.
        </div>
      </div>
      <br />
      <div className="mb-3">
        <label for="pregunta1" className="form-label text-white">¿Cuál canción lo hizo famoso?</label>
        <select className="form-select" id="pregunta1" required>
          <option value="">Elige tu respuesta</option>
          <option value="a">Better now</option>
          <option value="b">Congratulations</option>
          <option value="c">White iverson</option>
        </select>
        <div className="invalid-feedback">
          Elige una respuesta.
        </div>
      </div>
       
      <br />
      <div className="mb-3">
        <label for="pregunta1" className="form-label text-white">¿Cuál es el nombre real de post malone?</label>
        <select className="form-select" id="pregunta1" required>
          <option value="">Elige una respuesta</option>
          <option value="a">Austin Richard Post</option>
          <option value="b">Jimmy balder</option>
          <option value="c">Jermaine Lamarr Cole</option>
        </select>
        <div className="invalid-feedback">
          Elige una respuesta.
        </div>
      </div>

      <br />
      <div className="mb-3">
        <label for="pregunta1" className="form-label text-white">¿Cuál es el patrimonio neto de post maolne?</label>
        <select className="form-select" id="pregunta1" required>
          <option value="">Elige tu respuesta</option>
          <option value="a">5 millones</option>
          <option value="b">3 millones</option>
          <option value="c">8 millones</option>
        </select>
        <div className="invalid-feedback">
          Elige una respuesta.
        </div>
      </div>
     
      <button type="submit" className='btn btn-primary mx-auto'>Enviar</button>
    
    
     
      
     
      

          </form>
          </div>
          
          </div>

             



        
        </>
    )
}