import app from "./src/config/app.config.js";
import ENV from "./src/config/keys.config.js";
import DB from "./src/config/db.config.js";
import appRoutes from "./src/routes/index.route.js";



app.use("/api/v1", appRoutes);

app.listen(ENV.PORT, () =>{
    DB();
    console.log(`express app running on ${ENV.PORT} port`);
});