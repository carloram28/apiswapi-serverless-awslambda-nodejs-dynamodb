const { v4 } = require('uuid');
const AWS  = require('aws-sdk');
const middy = require('@middy/core');
const jsonBodyParser = require('@middy/http-json-body-parser');

const createUser = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const createdAt = new Date();
    const id = v4();
    const { username, lastname, job, age } = event.body;
    console.log(event.body);
    if(!username) {
        return {
            status: 400,
            body: JSON.stringify({
                message: "Object data incomplete",
            })
        }
    }

    const newUser = {
        id,
        createdAt,
        username,
        lastname,
        job,
        age,
    } 
    try{
        await dynamodb.put({
            TableName: 'userTable',
            Item: newUser,
        })
        .promise()
    
        return {
            status: 200,
            body:newUser,
            
            
        }
    }catch(e){
        console.log('Se detecto un error al crear el elemento: ', e);
    }
};

const getUser = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
   

    try{
        

        const result = await dynamodb.get({
            TableName: 'userTable',
            Key: {
                id
            }
        }).promise();
    
        const user = result.Item;
        console.log(user)
        return {
            status: 200,
            body: user 
        }
    }catch(e){
        console.log('Error detectado: ', e);
    }
}

const getUsers = async (event) => {
    
    try{
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const result = await dynamodb.scan({
            TableName: 'userTable'
        }).promise();

        const users = result.Items;

        console.log('Resultados del SCAN: ', users);

        return {
            status: 200,
            body: users
        }
    }catch(e){
        console.log('Error detectado: ', e);
    }
}

const updateUser = async (event) => {
    try{
      const dynamodb = new AWS.DynamoDB.DocumentClient();
      const { id } = event.pathParameters;
      const { username, lastname, job, age } = JSON.parse(event.body);
  
      await dynamodb
        .update({
          TableName: "userTable",
          Key: { id },
          UpdateExpression: "set username = :username, lastname = :lastname, job = :job, age = :age",
          ExpressionAttributeValues: {
            
            ":username": username,
            ":lastname": lastname,
            ":job": job,
            ":age": age
          },
          ReturnValues: "ALL_NEW",
        })
        .promise();
      
      return {
        status: 200,
        body: JSON.stringify({
          message: "User updated successfully",
        }),
        
      };
    }catch(e){
      console.log('Se detecto el siguiente error: ', e);
    }
  };
  const deleteUser = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
  
    try{
      await dynamodb
      .delete({
        TableName: "userTable",
        Key: {
          id,
        },
      })
      .promise();
  
      return {
        status: 200,
        body: JSON.stringify({
          message: "Deleted user successfully",
        })
      };
    }catch(e){
      console.log('Se detecto un error: ', e);
    }
  };
  module.exports = {
    createUser:middy(createUser).use(jsonBodyParser()),
    getUser,
    getUsers,
    updateUser,
    deleteUser
  };