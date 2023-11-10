import express from 'express';
const app = express();
import 'dotenv/config'
import ejs from "ejs";
app.set('view engine', 'ejs');

app.use(express.static( "public" ));


const port = process.env.PORT;

// Login Route

app.get("/login", (req, req) => {
    res.render("auth/login")
})

app.post("/login", (req, req) => {
    res.render("auth/login")
})

app.get("/register", (req, req) => {
    res.render("auth/register")
})

app.post("/register", (req, res) => {

})


app.get("/products", (req, res) => {
    res.render("product/index")
})

app.get('/', (req, res) => {
    res.render("landing")
  })
  
app.listen(port, () => {
    console.log(`The Good Surf listening on port ${port}`)
})