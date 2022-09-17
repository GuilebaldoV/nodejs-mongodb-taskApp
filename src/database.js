import {connect} from 'mongoose';
import {config} from 'dotenv'
import './config'
(async ()=>{
    console.log('holas')
    try {
        // PROCCES accedemos al processo principal
        const db=await connect(process.env.MONGO)
        console.log(db.connection.name)
    } catch (error) {
        
        console.log(error)
    }
    
})()