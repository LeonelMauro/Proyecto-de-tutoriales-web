import {Request, Response} from 'express';
import { User } from '../database/entities/User';

class UserCreate {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body; 

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const user = new User();

    try {
      user.name = name;
      user.email = email;
      user.password = password;
      await user.save();
      console.log(user)
      res.status(201).json({ message: 'Usuario creado correctamente' });
    } catch (error) {
      res.status(500).json('error en llenar los datos');
    }
  }
};
export {UserCreate}
