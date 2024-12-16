import express from 'express';
import {addCart, deleteCart, editCart, getAllCart, getCartById} from "../controllers/cartController.js"



const router = express.Router();

router.post('/add',addCart);
router.get('/all',getAllCart);
router.delete('/delete/:id',deleteCart);
router.put('/edit/:id',editCart);
router.get('/get/:id',getCartById);


export default router;

