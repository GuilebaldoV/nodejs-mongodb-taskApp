
// morgan es un middleware para ver las peticiones
import morgan from 'morgan';
import express from 'express';
import './database'
import indexRoutes from './routers/index.routers';
// Configurar handlebars un motor de plantilla
import  {engine,exphbs}  from 'express-handlebars';
import {create} from 'express-handlebars'
// import exphbs from 'express-handlebars';
// Modulo path que permite trabajar con directorios
import path from 'path'
const app=express();
// para que sepa donde estan las views
app.set("views", path.join(__dirname, 'views'));
// app.engine(
    //     ".hbs",
//     exphbs({
    //     layoutsDir:path.join(app.get("views"),"layouts"),
    //     defaultLayout:'main',
    //     extname:'.hbs',
    
    // }));
    // establecemos la configuracoin
    
    // aqui decimos que motor usamos y configuramos sus propieades
    const hbs=create({
    //     // Atraves del path join concatenamos dos strings,app.get views trae la direccion de las vistas
    // 
    layoutsDir:path.join(app.get("views"),"layouts"),
    // el archivo que tiene el html en comun
    defaultLayout:'main',
    // La extebsuib que se usara
    extname:'.hbs',
})

app.engine(
    'hbs',
    hbs.engine,
)

app.set("view engine",".hbs");
// Middleware
console.log('holass?')

app.use(morgan('dev'));
// para convertilo a json
app.use(express.urlencoded({extended:false}))


app.use(indexRoutes);
// static files
app.use(express.static(path.join(__dirname,'public')))

export default app