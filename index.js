import app from "./src/config/app.config.js";
import ENV from "./src/config/keys.config.js";



app.listen(ENV.PORT, () =>{
    console.log(`express app running on ${ENV.PORT} port`);
});