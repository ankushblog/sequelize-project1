const { response } = require('express');
var db = require('..');
require('../models/users')
const Users = db.users;

const { Sequelize, Op } = require('sequelize');

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

    insert
    let data = await Users.create({ name: 'demo', email: 'demo@gmal.com', gender: 'M' });
    console.log(data.id)

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

    // let data = await Users.findAll({});


    // let response = {
    //     data: data
    // }
    // res.status(200).json(response)
}

var queryData = async (req, res) => {

    //select
    // let data = await Users.findAll({
    //     attributes: [
    //         'name',
    //         'gender',
    //         [Sequelize.fn('count', Sequelize.col('email')), 'emailcount']
    //     ]
    // })

    //include exclude
    // let data = await Users.findAll({
    //     attributes: {
    //         exclude: 'gender',
    //         include:[ [Sequelize.fn('CONCAT', Sequelize.col('name'), ' patil'), 'fullname']]
    //     }
    // })

    //condition

    // let data = await Users.findAll({
    //     where: {
    //         //id: 2 

    //         // id: {
    //         //     [Op.eq]: 2
    //         // },
    //         email: {
    //             [Op.like]: '%.com%'
    //         }
    //     },
    //     order: [
    //         ['name', 'DESC']
    //     ],
    //     group:['name'],
    //     limit: 2,
    //     offset: 1   //skip the no. of records
    // })


    // to count the number of records
    let data = await Users.count({})

    let response = {
        data: data
    }
    res.status(200).json(response);
}


var finderData = async (req, res) => {

    //let data = await Users.findAll({})
    //let data = await Users.findOne({})
    //let data = await Users.findbyPk(3)
    // let data = await Users.findAndCountAll({
    //     where: {
    //         name: 'demo1'
    //     }
    // })

    let [data, created] = await Users.findOrCreate({
        where: { name: 'rahul' },
        defaults: {
            email: 'rahul@gamil.com',
            gender: 'M'
        }
    })
    let response = {
        data: data,
        add: created
    }
    res.status(200).json(response);
}

module.exports = {

    addUser,
    crudOperation,
    queryData,
    finderData
}