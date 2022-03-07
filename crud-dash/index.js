import express, {Router} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import route from './route/routes.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/products',route);

const PORT = 8001; 
const URL = `mongodb+srv://kedarpednekar:12345@ecommerceweb.5kf5z.mongodb.net/PROJECT0?retryWrites=true&w=majority`;


mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify: false}).then(()=>{

    app.listen(PORT, ()=> {
        console.log(`Server is running successfully on Port ${PORT}`);
        console.log('Database Connected Successfully');
    });

}).catch(error=>{
    console.log('Error:', error.message);

})
