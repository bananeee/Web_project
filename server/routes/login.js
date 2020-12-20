import express from 'express';

// import { postLogin, getLogin} from "../controllers/login";

import  jwt  from "jsonwebtoken";

const router = express.Router();

function verifyToken(req, res, next) {

    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
        
    } else {
        res.sendStatus(403);
    }  
}

router.get('/', (req, res) => {
    res.json({
      message: 'Welcome to the API'
    });
});
  
router.get("/posttoken", verifyToken, (req, res) => {
    jwt.verify(req.token, "secretkey", (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: "Post created...",
                authData
            });
        }
    });
});
  
router.post("/gettoken", (req, res) => {
    const { username, password } = req.body;

    jwt.sign({...req.body}, "secretkey", (err, token) => {
        res.json({
            token,
        });
    });
});

router.post("/create", (req, res) => {
    const { username, password } = req.body;

    console.log(req.body);

    const newUser = new User({ username, password});

    try {
        newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

})

export default router;