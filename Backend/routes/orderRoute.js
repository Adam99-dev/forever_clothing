import express from 'express'
import {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import userAuth from '../middleware/auth.js'

const orderRouter = express.Router();

orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/update', adminAuth, updateStatus);

orderRouter.post('/userorders', userAuth, userOrders);

orderRouter.post('/place', userAuth, placeOrder);
orderRouter.post('/stripe', userAuth, placeOrderStripe);

orderRouter.post('/verifyStripe', userAuth, verifyStripe);


export default orderRouter