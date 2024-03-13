import { userRouter, express } from "./Controllers/UserController.js";
import { serviceRouter } from "./Controllers/ServicesController.js";
import { bookingRouter } from "./Controllers/BookingController.js";
import { requireAuth } from './middleware/AuthenticateUser.js';
import cookieParser from "cookie-parser";
import { errorHandling} from "./middleware/ErrorHandling.js";
import {handleValidationErrors} from "./middleware/ValidationUser.js";
import path from "path";
import cors from "cors" 
import { body } from 'express-validator';
import { config } from "dotenv";
config()

const app = express()
const port = +process.env.PORT || 4000

app.use((req, res, next)=>{
    res.header("Access-control-Allow-Origin","*");
    res.header("Access-control-Allow-Credentials","true");
    res.header("Access-control-Allow-Methods","*");
    res.header("Access-control-Allow-Methods","*");
    res.header("Access-control-Allow-Headers","*");
    res.header("Access-control-Allow-Headers","Authorization");
    next();
})
app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    cookieParser(),
   
)
app.use(cors({
   origin:"http://localhost:8080" ,
   credentials:true

}))
app.get('^/$|/capstone', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, './static/index.html'))
})
app.use('/users',userRouter)
app.use('/services', serviceRouter)
app.use('/bookings', bookingRouter)
app.use(errorHandling)
bookingRouter.use(requireAuth);

// Route handler to handle form submissions
app.post('/submit-form', [
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  handleValidationErrors,
], (req, res) => {
  res.json({ message: 'Form submitted successfully' });
});


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})