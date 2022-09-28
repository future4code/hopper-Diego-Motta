import { Product } from "../models/Product";
import { PurchaseDB } from "../models/Purchase";
import {User} from "../models/User";

const user1 = new User("101","astrodev@gmail.com","bananinha")
const user2 = new User("102","fulano@gmail.com","qwerty00")
const user3 = new User("103","ciclana@gmail.com","asdfg123")
export const users = [user1,user2,user3]

const product1 = new Product("201", "Webcam", 99.00)
const product2 = new Product("202", "teclado gamer", 250.00)
const product3 = new Product("203", "Monitor", 459.99)
const product4 = new Product ("204", "Impressora", 275.25)
const product5 = new Product("205", "Mouser Gamer", 399.99)
export const products = [product1, product2, product3, product4, product5]

const purchase1 = new PurchaseDB("301", "101", "201", 1, 99.00)
const purchase2 = new PurchaseDB("302", "101","203", 1, 459.99)
const purchase3 = new PurchaseDB("303", "101", "202", 2, 500.00)
export const purchases = [purchase1, purchase2, purchase3]