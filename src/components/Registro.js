import React from 'react'
import Header from "./header/Header";
import Footer from './footer/Footer';
import './registro/registro.css'
import { useState } from 'react';

export default function Registro() {
  const [values, setValues] = useState()({
    id: "",
    names: "",
    lastname: "",
    email: "",
    adress: "",
    phone: "",
    borndate: "",
    password: "",
    vrfpassword: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    const newValues = {
      ...values,
      [name]: value,
    }
    setValues(newValues);
  }

  return (
    <div>
      <Header/>
      <div className='bigcont'>
        <div className='cont'>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Identificacion</label>
              <input id="id" type="number" class="form-control" placeholder="1234567890" name='id' onChange={handleChange}></input>
            </div>
            <br></br>

            <div class="form-group">
              <label for="exampleInputPassword1">Nombre</label>
              <input id="names" type="text" class="form-control" placeholder="Juan" name='names' onChange={handleChange}></input>
            </div>
            <br></br>

            <div class="form-group">
              <label for="exampleInputEmail1">Apellido</label>
              <input id="lastname" type="text" class="form-control" placeholder="Gomez" name='lastname' onChange={handleChange}></input>
            </div>
            <br></br>

            <div class="form-group">
              <label for="exampleInputEmail1">Correo Electronico</label>
              <input id="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="ejemplo@mail.com" name='email' onChange={handleChange}></input>
            </div>
            <br></br>

            <div class="form-group">
              <label for="exampleInputEmail1">Direccion</label>
              <input id="adress" type="text" class="form-control" placeholder="Dosquebradas, Pereira, Colombia" name='adress' onChange={handleChange}></input>
            </div>
            <br></br>

            <div class="form-group">
              <label for="exampleInputEmail1">Telefono</label>
              <input id="phone" type="number" class="form-control" placeholder="310 000 0000" name='phone' onChange={handleChange}></input>
            </div>
            <br></br>

            <div class="form-group">
              <label for="exampleInputEmail1">Fecha Nacimiento</label>
              <input id="borndate" type="date" class="form-control" name='borndate' onChange={handleChange}></input>
            </div>
            <br></br>

            <div class="form-group">
              <label for="exampleInputEmail1">Contraseña</label>
              <input id="password" type="password" class="form-control" name='password' onChange={handleChange}></input>
            </div>
            <br></br>

            <div class="form-group">
              <label for="exampleInputEmail1">Repita su contraseña</label>
              <input id="vrfpassword" type="password" class="form-control" name='vrfpassword' onChange={handleChange}></input>
            </div>
            <br></br>

            <div className='btncont'>
              <button type="submit" class="btn btn-primary" id="boton">Registrarse</button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
