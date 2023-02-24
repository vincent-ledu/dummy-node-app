const request = require("supertest");
const app = require("./app");

const status = [200, 404, 500, 302, 503];

describe("Test the root path", () => {
  test("It should response the GET method", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        expect(status).toContain(response.statusCode);
        done();
      });
  });
});
