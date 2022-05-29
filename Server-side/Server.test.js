import renderer from "react-test-renderer";
import request from "supertest";
const Server = require("./Server");
//Heres where I run my tests for server.
describe("Server component", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Server />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should return a 404 when invalid route", (done) => {
    request.post("Cannot GET /").expect(404).end(done);
  });
});
