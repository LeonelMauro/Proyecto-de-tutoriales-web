import { Request, Response } from "express";
import { User } from "../database/entities/User";

class UpdateUser {
  async handle(req: Request, res: Response) {
    const { id, name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
      // Buscar el usuario por su ID y actualizar los campos
      const userToUpdate = await User.findOne({ where: { id } });

      if (!userToUpdate) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      // Actualizar los campos
      userToUpdate.name = name;
      userToUpdate.email = email;
      userToUpdate.password = password;

      // Guardar los cambios en la base de datos
      await userToUpdate.save();

      return res.status(200).json({ message: 'Usuario actualizado exitosamente' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
  }
}

export { UpdateUser };
