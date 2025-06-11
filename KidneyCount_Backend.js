const express=require("express")

const app=express();

var users=[{
  name:"John",
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
  //What if there is no unHeathy Kidney Then We need to Return 411 wrong input status code
  if(ThereIsUnhealthy())
  { 
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
  }
  else{
    res.status(411).json({
      msg:"No Unhealthy kidney"
    })
  }
})
functon ThereIsUnhealthy()
{
  let Unhealthy=false;
  for(let i=0;i<users[0].kidney.length;i++){
    if(!users[0].kidney[i].healthy)
       Unhealthy=true;
  }
    return Unhealthy;
 }
app.listen(3001);
