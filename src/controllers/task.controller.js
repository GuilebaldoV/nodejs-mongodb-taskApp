import Task from "../models/Task";

export const renderTasks=async (req,res)=>{
    // MOSTRANDO DATOS (TASKS)
    // la operacion de abajo devuelve un objeto de mongodb debemos pedirlo en formato js
    // const tasks=await Task.find()
    const tasks=await Task.find().lean()
    // console.log(tasks)
    // pasar las tareas al index
    res.render('index',{tasks});
    
}

export const taskAdd=async (req,res)=>{
    // objeto preparado pa insertarse en la base de datos
    // simplemente usando el saved del task tendriamos para subirlo a la base de datos
    try {
        const task=Task(req.body)
        await task.save();
   } catch (error) {
    console.log(error)
   }
    res.redirect('/');
};

export const taskEdit=async (req,res)=>{
    console.log(req.body)
    // Actualizando la tarea dado un formulario

    await Task.findByIdAndUpdate(req.params.id,req.body)
    res.redirect('/')
} 

export const showSingleTask=async (req,res)=>{
    // Encontrando la task especifica en la base de datos
    console.log(req.params.id)
    const task= await Task.findById(req.params.id).lean();
    console.log(task)
    res.render('edit',{task})

}

export const deleteTask=async (req,res)=>{
    await Task.findByIdAndDelete(req.params.id)
    res.redirect('/')
}

export const toggleDoneTask=async (req,res)=>{
    const {id}=req.params;
    const task= await Task.findById(id);
    task.done=!task.done
    await task.save();
    res.redirect('/')

}