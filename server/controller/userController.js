// const fs = require("fs").promises;
// const path = require("path");
// const { title } = require("process");

// const userFilePath = path.join(
//     __dirname,
//     "../../src/components/usuariosRegistrados.json"
// );

// const controller = {
//     register: async function (req, res) {
//         try {
//             //Leer el archivo JSON una sola vez
//             const usersData = await fs.readFile(userFilePath, "utf-8");
//             const users = JSON.parse(usersData);

//             const ultimo = users.length;
//             const usuarioNuevo = {
//                 number: ultimo + 1,
//                 id: req.body.id,
//                 names: req.body.names,
//                 lastname: req.body.lastname,
//                 email: req.body.email,
//                 adress: req.body.adress,
//                 phone: req.body.phone,
//                 borndate: req.body.borndate,
//                 password: req.body.password,
//                 status: "activo",
//                 rol: "Usuario",
//                 creationDate: new Date(),
//             };

//             for(x of users){
//                 if(x.email === req.body.email || x.id === req.body.id){
//                     res.status(400).send("El email o correo ya existen");
//                     return;
//                 }
//             }

//             users.push(usuarioNuevo);

//             //Escribir en el archivo JSON
//             await fs.writeFile(userFilePath, JSON.stringify(users, null, 4));

//             res.status(200).send("Usuario creado con exito");
//         } catch (error){
//             console.error("Error al procesar el registro: ", error);
//             res.status(500).send("Error interno del servidor");
//         }
//     },

//     login: async function(req, res){
//         try {
//             const usersData = await fs.readFile(userFilePath, "utf-8");
//             const users = JSON.parse(usersData);

//             for(x of users){
//                 if(x.email === req.body.email && x.password === req.body.password && x.rol === req.body.rol){
//                     return res.json({
//                         names: x.names,
//                         lastname: x.lastname,
//                         email: x.email,
//                     });
//                 }
//             }
//             res.json({ title: "error"});
//         }catch(error){
//             console.error("Error al procesar el registro: ", error);
//             res.status(500).send("Error interno del servidor");
//         }
//     }
// };

// module.exports = controller;

const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const connection = require('../configDB/configDB');
app.use(cors());

const controller = {
    register: function (req, res) {
        let config = {
            method: "GET",
            maxBodyLength: Infinity,
            url: 'https://api.jsonbin.io/v3/b/6654d656e41b4d34e4fa5b15',
            headers: {
                'Content-Type': 'application/json',
                "X-Master-Key": "$2a$10$rewnAHPFibJMjkaY3d0ttuinkSq0YRYJ8.8qjtjI.OkTZdefwGqyi"
            }
        };
        axios(config)
        .then(result => {
            let id = result.data.record.length + 1
            const usuarioNuevo = {
                id: req.body.id,
                names: req.body.names,
                lastname: req.body.lastname,
                email: req.body.email,
                adress: req.body.adress,
                phone: req.body.phone,
                borndate: req.body.borndate,
                password: req.body.password,
                status: "activo",
                rol: "Usuario",
                creationDate: new Date(),
            };
            if (result.data.record.length === 0) {
                result.data.record.push(usuarioNuevo)
            }
            else {
                for (x of result.data.record) {
                    if (x.email === req.body.email) {
                        res.status(400).send("Usuario ya existe en la Base de Datos")
                        return
                    }
                }
                result.data.record.push(usuarioNuevo)
            }

            fetch("https://api.jsonbin.io/v3/b/6654d656e41b4d34e4fa5b15", {
                method: "PUT",
                headers: {
                    "Content-Type": "Application/json",
                    "X-Master-Key": "$2a$10$rewnAHPFibJMjkaY3d0ttuinkSq0YRYJ8.8qjtjI.OkTZdefwGqyi"
                },
                body: JSON.stringify(result.data.record),
            })
            .then(response => {
                if (response.status === 200) {
                    res.status(200).send('ok')
                    return
                }
                else {
                    res.status(400).send("No Ok")
                    return
                }
            })
        })

    },
    registerDB: function (req, res) {
        console.log(req.body)
        const { id, names, lastname, email, adress, phone, borndate, password } = JSON.parse(JSON.stringify(req.body))
        try{
            const sql = "INSERT INTO sql10715860.new_table (identificacion, nombre, apellido, correo, direccion, telefono, fechaNacimiento, password, fechaCreacion) VALUES (?,?,?,?,?,?,?,?,?)"
            connection.execute(sql, [id, names, lastname, email, adress, phone, borndate, password, new Date()])
            res.status(200).send("Registro exitoso")
        }catch(error){
            console.error("Error al insertar en la Base de Datos", error);
            res.status(500).send("Error interno del servidor");
        }
    }
}

module.exports = controller;