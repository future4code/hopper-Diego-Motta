import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUsers } from "./endpoints/getUsers";



app.get("/users", getUsers)

