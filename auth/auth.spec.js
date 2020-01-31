const request = require("supertest");
const jwt = require("jsonwebtoken");
const server = require("../api/server.js");

describe('server.js', () => {
    it("login", function () {
        return request(server).post("/api/auth/login")
            .then(res => {
                expect(res.type).toMatch(/json/i)
            });
    });
});

