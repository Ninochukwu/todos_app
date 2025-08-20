import { Router } from 'express';
import { sendResponse } from '../common/utils.common.js';
import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from "../todos/todo.controller.js";

const baseRouter = Router();

baseRouter.get( '/todos', getTodos );
baseRouter.get( '/todos/:id', getTodoById );
baseRouter.post( '/todos', createTodo );
baseRouter.put( '/todos/:id', updateTodo );
baseRouter.delete( '/todos/:id', deleteTodo );


baseRouter.get('/', (req, res) => sendResponse(req, res, 200, true, 'API is running'));

export default baseRouter;