import app from "./src/config/app.config.js";
import ENV from "./src/config/keys.config.js";
import DB from "./src/config/db.config.js";


app.listen(ENV.PORT, () =>{
    DB();
    console.log(`express app running on ${ENV.PORT} port`);
});