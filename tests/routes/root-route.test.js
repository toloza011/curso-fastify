const build = require("../../src/app");

let app;
describe("root route", () => {
  beforeEach(() => {
    app = build();
  });

  afterEach(() => {
    app.close();
  });

  it('should return "hello world"', async () => {
    const res = await app.inject({
      url: "/",
    });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({ hello: "world" });
  });
});
