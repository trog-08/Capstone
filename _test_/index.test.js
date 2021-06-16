const app = require("../src/server/index");
const supertest = require('supertest');
const request = supertest(app);

it("gets the test endpoint", async done => {
    const response = await request.post("/geonames");
    expect(response.status).toBe(200);
    done();
});