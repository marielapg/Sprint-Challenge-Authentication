const Jokes = require('../jokes/model.js');
const db = require('../data/dbConfig.js');
const request = require('supertest');
const authRouter = require('../auth/auth-router.js')

describe('jokes model', function() {
    
    
    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })
    
    describe('insert()', function() {
        beforeEach(async () => {
            await db('users').truncate();
        })

        it('adds the new user to the db', async function() {
            
            await Jokes.insert({ username: 'sam', password: "123"  });
            await Jokes.insert({ username: 'frodo', password: "333" });

            
            const jokes = await db('users');

            expect(jokes).toHaveLength(2);
        })
    })     
       

 })