const express =  require('express')
const app = express()

const UserModel = require('./model/user.model') //REQUIRE MONGO 
const dbConnect = require('./config/db')  //REQUIRE MONGO

const cors = require('cors') // REQUIRE CORS
const bodyparser = require('body-parser') // REQUIRE BODY-PARSER

require('dotenv').config()

const nodemiler = require('nodemailer')
app.use(cors())
app.use(bodyparser.json())
app.set('views', './views')
app.set('view engine', 'ejs') // REQUIRE VIEW-ENGINE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/handcrafted-gem', (req, res) => {
    res.render('handcrafted-gem')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/product', (req, res) => {
    res.render('product')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/buy-your-products', (req, res) => {
    res.render('buy-your-products')
})
app.get('/product1', (req, res) => {
    res.render('product1')
})
app.get('/product2', (req, res) => {
    res.render('product2')
})
app.get('/product3', (req, res) => {
    res.render('product3')
})
app.get('/product4', (req, res) => {
    res.render('product4')
})
app.get('/product5', (req, res) => {
    res.render('product5')
})
app.get('/product6', (req, res) => {
    res.render('product6')
})
app.get('/product7', (req, res) => {
    res.render('product7')
})
app.get('/product8', (req, res) => {
    res.render('product8')
})
app.get('/product9', (req, res) => {
    res.render('product9')
})
app.get('/product10', (req, res) => {
    res.render('product10')
})
app.get('/product11', (req, res) => {
    res.render('product11')
})
app.get('/product12', (req, res) => {
    res.render('product12')
})
app.get('/product13', (req, res) => {
    res.render('product13')
})
app.get('/product14', (req, res) => {
    res.render('product14')
})
app.get('/product15', (req, res) => {
    res.render('product15')
})
app.get('/product16', (req, res) => {
    res.render('product16')
})
app.get('/product17', (req, res) => {
    res.render('product17')
})
app.get('/product18', (req, res) => {
    res.render('product18')
})
app.get('/product19', (req, res) => {
    res.render('product19')
})
app.get('/product20', (req, res) => {
    res.render('product20')
})
app.get('/product21', (req, res) => {
    res.render('product21')
})
app.get('/product22', (req, res) => {
    res.render('product22')
})
app.get('/product23', (req, res) => {
    res.render('product23')
})
app.get('/product24', (req, res) => {
    res.render('product24')
})
app.get('/product25', (req, res) => {
    res.render('product25')
})
app.get('/product26', (req, res) => {
    res.render('product26')
})
app.get('/product27', (req, res) => {
    res.render('product27')
})
app.get('/product28', (req, res) => {
    res.render('product28')
})
app.get('/product29', (req, res) => {
    res.render('product29')
})
app.get('/product30', (req, res) => {
    res.render('product30')
})
app.get('/buy-product', (req, res) => {
    res.render('buy-product')
})


app.get('/submitted', (req, res) => {
    res.send('Email Submited')
})
app.post("/submitted", async (req, res) => {
    const { firstname, lastname, email, phone, message } = req.body;

    if (!firstname || !lastname || !email || !phone || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Configure Nodemailer
    const transporter = nodemiler.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL, // Replace with your email
        subject: "New Form Submission",
        text: `Name: ${firstname}\nLast Name: ${lastname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email");
        // res.status(500).json({ message: "Error sending email." });
    }
    

});



app.listen(3000, () => {
    console.log(`server is running on ${'http://localhost:3000/handcrafted-gem'}`);
    
})