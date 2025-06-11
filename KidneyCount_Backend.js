const express=require("express")

const app=express();

var users=[{
  name:"ohn",
  kidney:[{
    healthy:false
  }]
}];
app.use(express.json());

app.get("/",function(req,res){
 const johnKidney=users[0].kidney;
 const numberOfKidney=johnKidney.length;
 let numberOfHealthyKidney=0;;
 for(let i=0;i<numberOfKidney;i++){
  if(johnKidney[i].healthy){
    numberOfHealthyKidney=numberOfHealthyKidney+1;
  }
 }
 const numberOfUnhealthyKidney=numberOfKidney-numberOfHealthyKidney;
 res.json({
  numberOfKidney,
  numberOfHealthyKidney,
  numberOfUnhealthyKidney
 })
});
app.post("/",function(req,res){
  const  isHealthy=req.body.isHealthy;
  users[0].kidney.push({
    healthy:isHealthy
  })
  res.json({
    msg:"Done"
  })
})
app.put("/",function(req,res){
  for(let i=0;i<users[0].kidney.length;i++){
    users[0].kidney[i].healthy=true;
  }

  res.json({});
})
app.delete("/",function(req,res){
  const newKidney=[];
  for(let i=0;i<users[0].kidney.length;i++){
    if(users[0].kidney[i].healthy)
      newKidney.push({
    healthy:true})
  }
  users[0].kidney=newKidney;
  res.json({
    msg:"Done"
  })
})
app.listen(3001);