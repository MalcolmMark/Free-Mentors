import { User } from "../models/user.model";
import { users } from "../db/data";
import { genToken } from "../helpers/token.helper";

const signin = (req, res) => {
    const token = genToken(req.body.email);
    
    return res.status(200).send({
        "status": 200,
        "message": "User is successfully logged in",
        "data": {
            "token" : token,
        }
    });
};

const signup = (req, res) => {
    const user = new User(req.body.email, req.body.first_name, req.body.last_name, req.body.password, req.body.address, req.body.bio, req.body.occupation, req.body.expertise );
    
    users.push(user);

    const token = genToken(user.email);

    return res.status(201).send({
        "status" : 201,
        "message": "User created successfully",
        "data" : {
            "token" : token,
            "message": "User created successfully",
        }
    });
};

export default { signin, signup }