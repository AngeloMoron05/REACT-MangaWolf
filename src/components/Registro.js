import React from 'react'
import Header from "./header/Header";
import Footer from './footer/Footer';
import './registro/registro.css'
import { useState } from 'react';

export default function Registro() {
  const [values, setValues] = useState({
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

  function func_errorId(){
    seterrorID(false);
  }
  function func_errorNames(){
    seterrorNames(false);
  }
  function func_errorLastName(){
    seterrorLastName(false);
  }
  function func_errorEmail(){
    seterrorEmail(false);
  }
  function func_errorAdress(){
    seterrorAdress(false);
  }
  function func_errorPhone(){
    seterrorPhone(false);
  }
  function func_errorBornDate(){
    seterrorBornDate(false);
  }
  function func_errorPassword(){
    seterrorPassword(false);
  }
  function func_errorVrfPassword(){
    seterrorVrfPassword(false);
    seterrorVrfPasswordEmpty(false);
  }

  const [errorID, seterrorID] = useState(false);
  const [errorNames, seterrorNames] = useState(false);
  const [errorLastName, seterrorLastName] = useState(false);
  const [errorEmail, seterrorEmail] = useState(false);
  const [errorAdress, seterrorAdress] = useState(false);
  const [errorPhone, seterrorPhone] = useState(false);
  const [errorBornDate, seterrorBornDate] = useState(false);
  const [errorPassword, seterrorPassword] = useState(false);
  const [errorVrfPassword, seterrorVrfPassword] = useState(false);
  const [errorVrfPasswordEmpty, seterrorVrfPasswordEmpty] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    const newValues = {
      ...values,
      [name]: value,
    }
    setValues(newValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const vefEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const vefPassword = /^(?=.*[A-Z])(?=(?:.*\d){2,}).{9,}$/;

    if(values.id.length < 5 || values.id.length > 10 || values.id.length==0) {
      seterrorID(true);
      return;
    }else if(values.names.length < 3 || values.names.length==0){
      seterrorNames(true);
      return;
    }else if(values.lastname.length < 3 || values.lastname.length==0){
      seterrorLastName(true);
      return;
    }else if(values.email.length==0){
      seterrorEmail(true);
      return;
    }else if(!vefEmail.test(values.email)){
      seterrorEmail(true);
      return;
    }else if(values.adress.length==0){
      seterrorAdress(true);
      return;
    }else if(values.phone.length < 10 || values.phone.length==0){
      seterrorPhone(true);
      return;
    }else if(values.borndate.length==0){
      seterrorBornDate(true);
      return;
    }else if(values.password.length == 0){
      seterrorPassword(true);
      return;
    }else if(!vefPassword.test(values.password)){
      seterrorPassword(true);
      return;
    }else if(values.vrfpassword.length == 0){
      seterrorVrfPasswordEmpty(true);
      return;
    }else if(values.vrfpassword!=values.password){
      seterrorVrfPassword(true);
    }
  }


  return (
    <div>
      <Header/>
      <div className='bigcont'>
        <div className='cont'>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Identificacion</label>
              <input id="id" type="number" class="form-control" placeholder="1234567890" name='id' onChange={handleChange} onClick={func_errorId}></input>
              {errorID ? <p className='error'>La identificacion debe tener de 4 a 10 caracteres.</p> : ""}
            </div>
            <br></br>

            <div class="form-group">
              <label for="exampleInputPassword1">Nombre</label>
              <input id="names" type="text" class="form-control" placeholder="Juan" name='names' onChange={handleChange} onClick={func_errorNames}></input>
              {errorNames ? <p className='error'>El nombre debe tener 3 o mas caracteres.</p> : ""}
            </div>
            <br></br>

            <div class="form-group">
              <label for="exampleInputEmail1">Apellido</label>
              <input id="lastname" type="text" class="form-control" placeholder="Gomez" name='lastname' onChange={handleChange} onClick={func_errorLastName}></input>
              {errorLastName ? <p className='error'>El apellido debe tener 3 o mas caracteres.</p> : ""}
            </div>
            <br></br>

            <div class="form-group">
              <label for="exampleInputEmail1">Correo Electronico</label>
              <input id="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="ejemplo@mail.com" name='email' onChange={handleChange} onClick={func_errorEmail}></input>
              {errorEmail ? <p className='error'>Debe ingresar una direccion de email valida.</p> : ""}
            </div>
            <br></br>

            <div class="form-group">
              <label for="exampleInputEmail1">Direccion</label>
              <input id="adress" type="text" class="form-control" placeholder="Dosquebradas, Pereira, Colombia" name='adress' onChange={handleChange} onClick={func_errorAdress}></input>
              {errorAdress ? <p className='error'>Debe ingresar su direccion.</p> : ""}
            </div>
            <br></br>

            <div class="form-group">
              <label for="exampleInputEmail1">Telefono</label>
              <input id="phone" type="number" class="form-control" placeholder="310 000 0000" name='phone' onChange={handleChange} onClick={func_errorPhone}></input>
              {errorPhone ? <p className='error'>Debe ingresar un numero telefonico valido.</p> : ""}
            </div>
            <br></br>

            <div class="form-group">
              <label for="exampleInputEmail1">Fecha Nacimiento</label>
              <input id="borndate" type="date" class="form-control" name='borndate' onChange={handleChange} onClick={func_errorBornDate}></input>
              {errorBornDate ? <p className='error'>Debe ingresar su fecha de nacimiento.</p> : ""}
            </div>
            <br></br>

            <div class="form-group">
              <label for="exampleInputEmail1">Contraseña</label>
              <input id="password" type="password" class="form-control" name='password' onChange={handleChange} onClick={func_errorPassword}></input>
              {errorPassword ? <p className='error'>Ingrese una contraseña con al menos una letra mayuscula y dos caracteres numericos.</p> : ""}
            </div>
            <br></br>

            <div class="form-group">
              <label for="exampleInputEmail1">Repita su contraseña</label>
              <input id="vrfpassword" type="password" class="form-control" name='vrfpassword' onChange={handleChange} onClick={func_errorVrfPassword}></input>
              {errorVrfPasswordEmpty ? <p className='error'>Debe ingresar de nuevo la contraseña.</p> : ""}
              {errorVrfPassword ? <p className='error'>Las contraseñas no coinciden.</p> : ""}
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
