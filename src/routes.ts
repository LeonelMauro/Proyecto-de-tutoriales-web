import {Router} from 'express';
import {UserCreate} from './controllers/UserControllers';
import {LoginUser} from './controllers/LoginUser'

const router = Router();

const userCreate= new UserCreate();
const loginUser = new LoginUser();

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


export {router};