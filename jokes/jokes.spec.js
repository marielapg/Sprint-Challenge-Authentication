const Jokes = require('../jokes/jokes-model.js');
const db = require('../data/dbConfig.js');

describe('joke model', function() {
    
    
    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })

    describe('GET /', function() {
        it('should return 200 OK', function() {
            // make a GET request to /
            return request(server).get('/api/jokes')
                .then(res => {
                // check that the status code is 200
                expect(res.status).toBe(200);
            })
        })

        it('should return JSON', function() {
            // make a GET request to /
            return request(server).get('/api/jokes')
                .then(res => {
                // check that the status code is 200
                expect(res.type).toMatch(/json/i)
            })
        })
    })
})   