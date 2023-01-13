const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "Hello World from railway";
});

const PORT = 1000;
app.listen(process.env.PORT || PORT, () => console.log("run server " + PORT));
