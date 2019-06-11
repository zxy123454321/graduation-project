const express=require("express")
const router=express.Router()
const pool=require("../pool")
router.post("/myLogin",(req,res)=>{
  var obj = req.body;
  var $phone = obj.phone;
  var $upwd = obj.upwd;
  if(!$phone){
      res.send("3");
      res.end();
      return;
  }
 
  if(!$upwd || !$phone){
      res.send("4");
      res.end();
      return;
  }
  
  if(!$phone && !$upwd){
      res.send("5");
      res.end();
      return;
  }
 
  var sql="SELECT * FROM ls_user WHERE phone=? AND upwd=?";
  pool.query(sql,[$phone,$upwd],(err,result)=>{
    if(err) console.log(err);
    if(result.length>0){
        res.send(JSON.stringify("1&"+result[0].uid));
        res.end();
        return;
    }else{
        res.send(JSON.stringify("0&"+result[0].uid));
        res.end();
        return;
    }
  })
})
接口地址: http://127.0.0.1:3000/login/myLogin




router.post("/myAdminLogin",(req,res)=>{
  var obj = req.body;
  var $account = obj.account;
  var $upwd = obj.upwd;
  if(!$account){
      res.send("3");
      res.end();
      return;
  }
 
  if(!$upwd || !$account){
      res.send("4");
      res.end();
      return;
  }
  
  if(!$account && !$upwd){
      res.send("5");
      res.end();
      return;
  }
 
  var sql="SELECT * FROM ls_admin WHERE account=? AND upwd=?";
  pool.query(sql,[$account,$upwd],(err,result)=>{
    if(err) console.log(err);
    if(result.length>0){
        res.send("1");
        res.end();
        return;
    }else{
        res.send("0");
        res.end();
        return;
    }
  })
})
//接口:http://127.0.0.1:3000/login/myAdminLogin

router.post("/myRegister",(req,res)=>{
    var obj = req.body;
    var $phone = obj.phone;
    var $upwd = obj.upwd;
    var sql = "INSERT INTO ls_user(phone,upwd)VALUES(?,?)";
    pool.query(sql,[$phone,$upwd],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
})

module.exports=router;