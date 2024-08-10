const PORT = process.env.PORT || 3000;

const server = require("./src/app")({
  logger: true,
});

const start = async () => {
  try {
    await server.listen(PORT);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
