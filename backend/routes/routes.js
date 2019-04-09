const express= require("express");
const router= express.Router();
// const Booking= require("../model/booking");
const Notifications= require("../model/notification");

router.post("", (req,res,next)=>{
  const notificationData= new Notifications({
    logedInuser: req.body.logedInuser,
    skills:req.body.skills,
    targets:req.body.targets,
  });
  // console.log(notificationData,'noti');

  notificationData.save().then(savedNotifi=>{
    console.log('nothing',savedNotifi);
    res.status(201).json(savedNotifi);
    // console.log(res,'ooo');
    // console.log(res.savedNotifi,'oo');
    
    
  });
  
});
router.get("",(req,res,next)=>{
  Notifications.find().then(data=>{
    console.log(data,'ooo');
    
    res.status(200).json(data);

  })
})

module.exports = router;