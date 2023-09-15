describe('GET /people', () => {
    test('Should respond with a 200 status code', async () => {
        try{
            const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').get('/people').send();
            expect(response.statusCode).toBe(200);
        }catch(e){
            console.log('Error: ', e);
        }
    });
    test('Should body is a array', async () => {
        try{
            const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').get('/people').send();
            const data = response.body;
            expect(data.body).toBeInstanceOf(Array);
        }catch(e){
            console.log('Error: ', e);
        }
    });
});

describe('GET /films', () => {
    test('Should respond with a 200 status code', async () => {
        try{
            const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').get('/films').send();
            expect(response.statusCode).toBe(200);
        }catch(e){
            console.log('Error: ', e);
        }
    });
    test('Should body is a array', async () => {
        try{
            const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').get('/films').send();
            const data = response.body;
            expect(data.body).toBeInstanceOf(Array);
        }catch(e){
            console.log('Error: ', e);
        }
    });
});

describe('GET /planets', () => {
    test('Should respond with a 200 status code', async () => {
        try{
            const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').get('/planets').send();
            expect(response.statusCode).toBe(200);
        }catch(e){
            console.log('Error: ', e);
        }
    });
    test('Should body is a array', async () => {
        try{
            const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').get('/planets').send();
            const data = response.body;
            expect(data.body).toBeInstanceOf(Array);
        }catch(e){
            console.log('Error: ', e);
        }
    });
});

describe('GET /species', () => {
    test('Should respond with a 200 status code', async () => {
        try{
            const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').get('/species').send();
            expect(response.statusCode).toBe(200);
        }catch(e){
            console.log('Error: ', e);
        }
    });
    test('Should body is a array', async () => {
        try{
            const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').get('/species').send();
            const data = response.body;
            expect(data.body).toBeInstanceOf(Array);
        }catch(e){
            console.log('Error: ', e);
        }
    });
});

describe('GET /starships', () => {
    test('Should respond with a 200 status code', async () => {
        try{
            const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').get('/starships').send();
            expect(response.statusCode).toBe(200);
        }catch(e){
            console.log('Error: ', e);
        }
    });
    test('Should body is a array', async () => {
        try{
            const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').get('/starships').send();
            const data = response.body;
            expect(data.body).toBeInstanceOf(Array);
        }catch(e){
            console.log('Error: ', e);
        }
    });
});

describe('GET /vehicles', () => {
    test('Should respond with a 200 status code', async () => {
        try{
            const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').get('/vehicles').send();
            expect(response.statusCode).toBe(200);
        }catch(e){
            console.log('Error: ', e);
        }
    });
    test('Should body is a array', async () => {
        try{
            const response = await request('https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com').get('/vehicles').send();
            const data = response.body;
            expect(data.body).toBeInstanceOf(Array);
        }catch(e){
            console.log('Error: ', e);
        }
    });
});