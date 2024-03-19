import { connection as db } from "../config/index.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../middleware/AuthenticateUser.js";
class Users {
  fetchUsers(req, res) {
    const qry = `
        SELECT userID,
        firstName,
        lastName,
        gender,
        emailAdd,
        userPwd,
        userRole
        FROM Users;
        `;
    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
 
  fetchUser(req, res) {
    const qry = `
    SELECT userID,
    firstName,
    lastName,
    gender,
    emailAdd,
    userPwd,
    userRole
    FROM Users;
    WHERE userID = ${req.params.id};
    `;
    db.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  async createUser(req, res) {
    // payload
    let data = req.body;
    data.userPwd = await hash(data?.userPwd, 10);
    let user = {
      emailAdd: data.emailAdd,
      userPwd: data.userPwd,
    };
    const qry = `
    INSERT INTO Users
    SET ?;
    `;
    db.query(qry, [data], (error) => {
      if (error) {
        res.json({
          status: res.statusCode,
          msg: "please use another email address",
        })
        console.log(error);
      } else {
        // create a token
        let token = createToken(user);
        res.json({
          status: res.statusCode,
          token,
          msg: "you/'re registered",
        });
      }
    });
  } 
 // updateUser
 async updateUser(req, res) {
  const data = req.body
  if(data?.userPwd){
      data.userPwd = await hash(data?.userPwd, 10)
  }
  const qry = `
  UPDATE Users
  SET ?
  WHERE userID = ${userId};
  `
  db.query(qry, [newData], (err,result)=>{
      if(err) throw err
      res.json({
          status: res.statusCode,
          msg: "The user information is updated."
      })
  })
 }

 // deleteUser
 async deleteUser(req, res) {
  const userId = req.params.id;
  
  const qry = `
    DELETE FROM Users
    WHERE userID = ${userId};
  `;
  db.query(qry, (err, result) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      msg: "User deleted successfully",
    });
  });
  }

  login(req, res) {
    const {emailAdd, userPwd} = req.body 
    const qry = `
    SELECT userID, firstName, lastName, 
    gender, emailAdd, userPwd, userRole
    FROM Users
    WHERE emailAdd = '${emailAdd}';
    `
    // "You provided a wrong email address."
    db.query(qry, async(err, result)=>{
        if(err) throw err 
        if(!result?.length){
            res.json({
                status: res.statusCode, 
                msg: err?.message
            })
        }else {
            // Validate password
            const validPass = await compare(userPwd, result[0].userPwd)
            if(validPass) {
                const token = createToken({
                    emailAdd, 
                    userPwd
                })
                res.json({
                    status: res.statusCode,
                    msg: "You're logged in",
                    token, 
                    result: result[0]
                })
            }else {
                res.json({
                    status: res.statusCode,
                    msg: "Please provide the correct password."
                })
            }
        }
    })
}
}

export { Users };