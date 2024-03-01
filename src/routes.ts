import {Router} from 'express';
import {UserCreate} from './controllers/UserControllers';
import {LoginUser} from './controllers/LoginUser';
import { GetUser } from './controllers/GetUser';
import { ConfigUser } from "./controllers/CongUser";
import { UpdateUser } from "./controllers/UpdateUser";
import { EditConfig } from "./controllers/EditConfig";
import {ConfigDeleteUser} from "./controllers/ConfiDeleteUser";
import { DeleteUser } from "./controllers/DeleteUser";

const router = Router();
const deleteUser = new DeleteUser();
const configDeleteUser = new ConfigDeleteUser();
const editConfig = new EditConfig();
const updateUser =new UpdateUser();
const configUser = new ConfigUser();
const getUser = new GetUser();
const userCreate= new UserCreate();
const loginUser = new LoginUser();

router.post('/edit',editConfig.handle);

router.post('/editar', updateUser.handle);

router.get('/config', (req, res) => {
  res.render("config");
});

router.get('/deleteAutentic', (req, res) => {
  res.render("deleteAutentic");
});
router.post('/autentic', configUser.handle);

router.post('/delete', deleteUser.handle);


router.post('/deleteuser', configDeleteUser.handle);

router.get('/programas', (req, res) => {
  res.render("programas");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post('/login-user',loginUser.login);

router.post('/user',userCreate.handle);

router.get('/', (req ,res)=>{
    res.render('welcon')
});

router.get("/add", (request, response) => {
    response.render("add");
  });

router.get('/users', getUser.handle);


export {router};