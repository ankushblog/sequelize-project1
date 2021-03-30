const { response } = require('express');
var db = require('..');
require('../models/users')
const Users = db.users;


var addUser = async (req, res) => {

    // let data = await Users.build({ name: 'ankush', email: 'ankush@gamil.com' });
    // await data.save();

    let data = await Users.create({ name: 'shyam', email: 'shyam@gmal.com', age: '28' });

    let response = {
        data: 'ok'
    }
    res.status(200).json(response)
}


var crudOperation = async (req, res) => {

    //insert
    // let data = await Users.create({ name: 'demo', email: 'demo@gmal.com', gender:'M' });
    // console.log(data.id)

    //update
    // let data= await Users.update({name:'ankush'},{
    //     where:{
    //         id:2
    //     }
    // })

    //delete
    // let data = await Users.destroy( {
    //     where: {
    //         id: 2
    //     }
    // })

    //truncate
    // let data = await Users.destroy({
    //     truncate: true
    // })

    //bulk insertion 

    // let data = await Users.bulkCreate([
    //     { name: 'demo1', email: 'demo1@gmal.com', gender:'F' },
    //     { name: 'demo2', email: 'demo2@gmal.com', gender:'M' },
    //     { name: 'demo3', email: 'demo3@gmal.com', gender:'F' },
    //     { name: 'demo4', email: 'demo4@gmal.com', gender:'M' }
    // ])

    let data = await Users.findAll({});


    let response = {
        data: data
    }
    res.status(200).json(response)
}

module.exports = {
    crudOperation,
    addUser
}