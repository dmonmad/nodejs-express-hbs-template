import jsonwebtoken from 'jsonwebtoken'
import User from '../models/User';

module.exports = async function (req, res, next) {
    try {
        const token = req.header('Authorization');
        if (!token) {
            return res.status(401).send('Acceso denegado');
        }

        const verified = jsonwebtoken.verify(token, process.env.TOKEN_SECRET);
        const user = await User.findOne({ _id: verified });
        if (!user) {
            return res.status(401).send('Token no encontrado');
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in verifyToken")
        console.log(error);
        return res.status(401).send('Token invalido');

    }
}