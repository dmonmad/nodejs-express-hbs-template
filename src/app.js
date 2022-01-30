import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import errorHandler from 'errorhandler';
import routes from "./routes/routes";
import dotenv from 'dotenv';
import path from 'path';
import exphbs from 'express-handlebars';
import helpers from './views/helpers/helpers'

dotenv.config();
const app = express();

//settings
app.set('port', process.env.PORT || 3001);

//handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    partialsDir: path.join(app.get('views'), 'partials'),
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs',
    helpers: helpers
}))
app.set('view engine', '.hbs');

//Middle
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//routes
app.use(routes);

//static files
app.use('/public', express.static(path.join(__dirname, './public')))

app.use(errorHandler);

export default app;