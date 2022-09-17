import {Router} from 'express'
import { deleteTask, renderTasks, showSingleTask, taskAdd, taskEdit, toggleDoneTask } from '../controllers/task.controller';
// Importando mi modelo
import Task from '../models/Task'
const router=Router()

router.get('/',renderTasks)
// gUARDANDO DATOS
router.post('/tasks/add',taskAdd)

router.get('/tasks/:id/edit',showSingleTask)

router.post('/tasks/:id/edit',taskEdit)

router.get('/tasks/:id/delete',deleteTask)

// inviertiendo el done
router.get('/tasks/:id/toggleDone',toggleDoneTask)


export default router;