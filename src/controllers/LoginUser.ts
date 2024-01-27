import {Request, Response} from 'express';
import {User} from '../database/entities/User';

class LoginUser{
    async login(req: Request, res: Response){
        const { email, password}=req.body;
        try{
            const user = await User.findOne({where:{email, password}});
            if (user){
                res.redirect('/programas');                
            } else {
                // Usuario no encontrado o contraseña incorrecta
                res.status(401).json({ message: 'Usuario no encontrado o contraseña incorrecta' });
                
              }
        } catch(error){
            console.error(error);
            res.status(401).json({ error: 'Error interno del servidor' });
        }
    }
};

export {LoginUser};