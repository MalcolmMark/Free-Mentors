import { users } from "../db/data";
import bcrypt from "bcrypt";

export const isEmailUsed = (req, res, next) => {
    const user = users.find(user => user.email == req.body.email);
    if (user) {
        return res.status(409).send({
            'status': 409,
            'message': 'Email already exists',
            'data': user.email
        });
    }
    next();
}

export const hashPassword = async (req, res, next) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashPassword;
    next();
}

export  const authanticate = async (req, res, next) => {
    const user = users.find(user => user.email == req.body.email);
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (user && validPassword) {
        next();
    }else {
        return res.status(404).send({
            'status': 404,
            'message': 'Email or Password is not match, please try again.'
        });
    }
}