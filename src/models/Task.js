// en palabras simples esquema es el nombre de la tabla y el task los campos
// Model es como colocarle unn nombre a nuestro conjunto de propieades que queremos guardar
import { Schema,model } from "mongoose";

const task=new Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        // Tring es para eliminar los espacios inecesarios
        tring:true
    },
    description:String,
    done:{
        type:Boolean,
        default:false
    },
    },
    {
        // Para manehar el update y el create
        timestamps:true,
        versionKey:false
    }
    )
// Esto es como el query con esto trabajaremos la base de datos 
export default model('Task',task)

