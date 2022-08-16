import express, {Request, Response} from "express";
import cors from "cors"

import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

// app.get("/", (req, res) => {          
//     console.log('Request feito')
//     res.send("Hello from Express")
// })

type usuario = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}

const usuariosArr: usuario[] = [
    {id: 1, name: "Diego Motta", phone: "6192929292", email: "diego@email.com", website: "www.diego.com"},
    {id: 2, name: "Bella Diniz", phone: "6199999999", email: "bella@email.com", website: "www.bella.com"},
    {id: 3, name: "Pedro Victor", phone: "6184848484", email: "pedro@email.com", website: "www.pedro.com"},
    {id: 4, name: "Camila Pedrosa", phone: "2176767676", email: "camila@email.com", website: "www.camila.com"},
    {id: 5, name: "Jordan Luis", phone: "6189898989", email: "jordan@email.com", website: "www.jordan.com"}
];

app.get("/users", (req, res) => {
    res.send(usuariosArr)
});

type posts = {
    id: number,
    title: string,
    body: string,
    userId: number
}

// Acredito que seja melhor criar esse array de forma separada para deixar o código mais limpo, sem precisar ficar acessndo um array dentro de outro
const postsArr: posts[] = [
    {id: 1, title: "Minha vida aos 30", body: "Velhice é um modo de sentir frio que me assalta e uma certa acidez. O modo de um cachorro enrodilhar-se quando a casa se apaga e as pessoas se deitam.", userId: 5},
    {id: 2, title: "O passaro que voa", body: "Seja como os pássaros que, ao pousarem um instante sobre ramos muito leves, sentem-nos ceder, mas cantam! Eles sabem que possuem asas.", userId: 3},
    {id: 3, title: "O cão arrependido", body: "Volta o cão arrependido, Com suas orelhas tão fartas, Com seu osso roído, E com o rabo entre as patas", userId: 4},
    {id: 4, title: "Sujeito de Sorte", body: "Presentemente, eu posso me, Considerar um sujeito de sorte, Porque apesar de muito moço, Me sinto são, e salvo, e forte", userId: 3},
    {id: 5, title: "Deus é brasileiro", body: "E tenho comigo pensado, Deus é Brasileiro e anda do meu lado, E assim já não posso sofrer, No ano passado", userId: 1},
    {id: 6, title: "Ano passado", body: "Tenho sangrado demais, Tenho chorado pra cachorro, Ano passado eu morri, Mas esse ano eu não morro", userId: 2},
    {id: 7, title: "Último passo", body: "Amou daquela vez como se fosse a última, Beijou sua mulher como se fosse a última, E cada filho seu como se fosse o único, E atravessou a rua com seu passo tímido", userId: 5},
    {id: 8, title: "Paredes", body: "Subiu a construção como se fosse máquina, Ergueu no patamar quatro paredes sólidas, Tijolo com tijolo num desenho mágico, Seus olhos embotados de cimento e lágrima", userId: 4},
    {id: 9, title: "Feijão do sábado", body: "Sentou pra descansar como se fosse sábado, Comeu feijão com arroz como se fosse um príncipe, Bebeu e soluçou como se fosse um náufrago, Dançou e gargalhou como se ouvisse música", userId: 4},
    {id: 10, title: "Ainda não Acabou", body: "E eu não pude desistir, Falando que ia acabar, Viver a vida sem saber do que gostar, Pra que dormir a noite sem saber sonhar?", userId: 1}
];

app.get('/posts', (req: Request, res: Response) => {
    req.query.userId ? res.send(postsArr.filter((post) => {if(post.userId.toString() === req.query.userId){return post} })) : res.send(postsArr)
})


app.delete('/posts', (req: Request, res: Response) =>{
    req.query.postId ? res.send(postsArr.filter((post) => {if(post.id.toString() !== req.query.postId){return true} })) : res.status(400).send("Id do post obrigatório")
})

app.delete('/users', (req: Request, res: Response) =>{
    req.query.userId ? res.send(usuariosArr.filter((user) => {if(user.id.toString() !== req.query.userId){return true} })) : res.status(400).send("Id do usuário obrigatório")
})