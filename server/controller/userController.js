const fs = require("fs").promises;
const path = require("path");

const userFilePath = path.join(
    __dirname,
    "../../src/components/usuariosRegistrados.json"
);

const controller = {
    register: async function (req, res) {
        try {
            //Leer el archivo JSON una sola vez
            const usersData = await fs.readFile(userFilePath, "utf-8");
            const users = JSON.parse(usersData);

            const ultimo = users.length;
            const usuarioNuevo = {
                number: ultimo + 1,
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

            for(x of users){
                if(x.email === req.body.email || x.id === req.body.id){
                    res.status(400).send("El email o correo ya existen");
                    return;
                }
            }

            users.push(usuarioNuevo);

            //Escribir en el archivo JSON
            await fs.writeFile(userFilePath, JSON.stringify(users, null, 4));

            res.status(200).send("Usuario creado con exito");
        } catch (error){
            console.error("Error al procesar el registro: ", error);
            res.status(500).send("Error interno del servidor");
        }
    },

    login: async function(req, res){
        try {
            const usersData = await fs.readFile(userFilePath, "utf-8");
            const users = JSON.parse(usersData);

            for(x of users){
                if(x.email === req.body.email && x.password === req.body.password && x.rol === req.body.rol){
                    res.status(200).send("Ok");
                    return;
                }
            }
            res.status(400).send("Error");
        }catch(error){
            console.error("Error al procesar el registro: ", error);
            res.status(500).send("Error interno del servidor");
        }
    }
};

module.exports = controller;