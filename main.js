let userModelObj1 = new userModel();
userModelObj1.firstName = "Jueeli";
userModelObj1.lastName = "Sawant";

let userModelObj2 = new userModel();
userModelObj2.firstName = "Riya";
userModelObj2.lastName = "Sawant";

let userModelObj3 = new userModel();
userModelObj3.firstName = "Megha";
userModelObj3.lastName = "Sawant";

let userModelObj4 = new userModel();
userModelObj4.firstName = "Rajesh";
userModelObj4.lastName = "Sawant";

let userCollectionObj = new Array();
userCollectionObj.push(userModelObj1);
userCollectionObj.push(userModelObj2);
userCollectionObj.push(userModelObj3);
userCollectionObj.push(userModelObj4);

console.log(userCollectionObj);

console.log(JSON.stringify(userCollectionObj));



// Self forEach

userCollectionObj
.forEach((userModelObj)=>{
  console.log(`${userModelObj.firstName} ${userModelObj.lastName}`);
})


function ForEach(collectionObj, callBack){  // callback(userModelObj)
    for(let value of collectionObj){
        callBack(value);
    }
}


ForEach(userCollectionObj, (leUserModel)=>{
    console.log(leUserModel.firstName);
})


//Filter
let filterUserModel = userCollectionObj.filter((leUserModel)=>{
    if(leUserModel.lastName === "Sawant"){
        return true;
    }else{
        return false;
    }
});

console.log(filterUserModel);

let filterUserModel1 = userCollectionObj.filter((leUserModel)=>{
    if(leUserModel.firstName.toLowerCase().includes("A".toLowerCase())){
        return true;
    }else{
        return false;
    }
});

console.log(filterUserModel1);


// Find
let findUserModel  = userCollectionObj.find((leUserModel)=>{
    if(leUserModel.firstName === "Jueeli"){
        return true;
    }else{
        return false;
    }
});

console.log(findUserModel);