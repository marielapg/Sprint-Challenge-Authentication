const request = require('supertest');

const server = require('../api/server.js');

describe('server', function() {
    it('runs the tests', function() {
        expect(true).toBe(true);
    })

    describe('GET /', function() {
        it('should return 200 OK', function() {
            // make a GET request to /
            return request(server).get('/')
                .then(res => {
                expect(res.status).toBe(200);
            })
        })
     
    })
})

