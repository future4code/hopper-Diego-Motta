import { app } from "./app";
import { postRouter } from "./routes/PostRouter";
import { userRouter } from "./routes/UserRouter";

app.use("/users", userRouter)
app.use("/post", postRouter)