import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose  from 'mongoose';

// importing our routes here
import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes);
app.use(bodyParser.json({limit: '30mb', extended : true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended : true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://imtiyajkhan789:11020170@cluster0.uzmfm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser : true, useUnifiedTopology : true})
    .then(() => app.listen(PORT, () => console.log(`Server running on Port : ${PORT}`)))
    .catch((e) => console.log(e.message));

// mongoose.set("useFindAndModify", false);