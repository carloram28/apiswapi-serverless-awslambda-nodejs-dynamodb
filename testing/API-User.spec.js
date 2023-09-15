const request = require('supertest');

describe('Testing API-User', () => {
    describe('GET /users/:id', () => {
        test('Should respond with a 200 status code', async () => {
            try{
                const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').get('/users/1b1aef22-4021-4804-9179-783427e0312a').send();
                expect(response.statusCode).toBe(200);
            }catch(e){
                console.log('Error: ', e);
            }
        });
        test('Should body is a object', async () => {
            try{
                const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').get('/users/1b1aef22-4021-4804-9179-783427e0312a').send();
            expect(typeof response.body).toBe('object');
            }catch(e){
                console.log('Error: ', e);
            }
        });
    });

    describe('GET /users', () => {
        test('Should respond with a 200 status code', async () => {
            try{
                const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').get('/users').send();
                expect(response.statusCode).toBe(200);
            }catch(e){
                console.log('Error: ', e);
            }
        });
        test('Should body is a array', async () => {
            try{
                const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').get('/users').send();
                const data = response.body;
                expect(data.body).toBeInstanceOf(Array);
            }catch(e){
                console.log('Error: ', e);
            }
        });
    });

    describe('POST /users', () => {
        const newUser = {
            username: "carlos",
            lastname: 'ramirez',
            job: "backend developer",
            age:27
        }
        
        describe('POST goods', () => {
            test('Should repond a 200 status code', async () => {
                try{
                    const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').post('/users').send(newUser);
                    expect(response.statusCode).toBe(200);
                }catch(e){
                    console.log('Error: ', e);
                }
            });
        
            test('Should defined username in response body', async () => {
                try{
                    const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').post('/user').send(newUser);
                    const data = response.body;
                    expect(data.body.name_planet).toBeDefined();
                }catch(e){
                    console.log('Error: ', e);
                }
            });
    
            test('Should have a content-type: appication/json in header', async () => {
                try{
                    const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').post('/users').send(newUser);
                    expect(response.headers["content-type"]).toEqual(
                        expect.stringContaining('json')
                    );
                }catch(e){
                    console.log('Error: ', e);
                }
            });
        });

        describe('POST fails', () => {
            test('Should respond with  a 400 status code', async() => {
                try{
                    const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').post('/users').send(newUser);
                    const data = response.body;
                    expect(data.status).toBe(400);
                }catch(e){
                    console.log(' Error: ', e);
                }
            })
        })
    });

    describe('PUT /users/:id', () => {
        const newUser = {
            
            username: 'Carlo',
            lastname: 'ramirez',
            job: 'fullstack',
            age: 27
        }

        const id = '5c4e17c4-2e83-4d8b-acf8-3fc67516a24e';
    
        test('Should repond a 200 status code', async () => {
            try{
                const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').put(`/users/${id}`).send(newUser);
                expect(response.statusCode).toBe(200);
            }catch(e){
                console.log('Error: ', e);
            }          
        });
        test('Should body is a object', async () => {
            try{
                const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').put(`/users/${id}`).send(newUser);
                expect(typeof response.body).toBe('object');
            }catch(e){
                console.log('Error: ', e);
            }
        });
        test('Should respond with finally message', async ()=>{
            try{
                const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').put(`/users/${id}`).send(newUser);
                expect(typeof response.body.body).toBe('string');
                expect(JSON.parse(response.body.body).message).toEqual('Planet updated successfully');
            }catch(e){
                console.log('Error: ', e);
            }
        });
    });

    describe('DELETE /users/:id', () => {
        const id = '5c4e17c4-2e83-4d8b-acf8-3fc67516a24e';
        test('Should repond a 200 status code', async () => {
            try{
                const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').delete(`/users/${id}`).send();
                expect(response.statusCode).toBe(200);
            }catch(e){
                console.log('Error: ', e);
            }
        });
        test('Should body is a object', async () => {
            try{
                const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').delete(`/users/${id}`).send();
                expect(typeof response.body).toBe('object');
            }catch(e){
                console.log('Error: ', e);
            }
        });
        test('Should respond with finally message', async ()=>{
            try{
                const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').delete(`/users/${id}`).send();
                expect(typeof response.body.body).toBe('string');
                expect(JSON.parse(response.body.body).message).toEqual('Deleted planet successfully');
            }catch(e){
                console.log('Error: ', e);
            }
        });
    });
});