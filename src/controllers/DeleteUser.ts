import { Request, Response } from "express";
import { User } from "../database/entities/User";

class DeleteUser{
    async handle(req:Request,res :Response){
        const {id}=req.body;

        try {
            const deleteUser = await User.findOne({ where: { id } });
            if (!deleteUser) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
              }
               await deleteUser.remove();

      return res.redirect("/")
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
  }
}

export { DeleteUser };
