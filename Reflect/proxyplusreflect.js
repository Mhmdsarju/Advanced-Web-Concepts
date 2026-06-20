//proxy+reflect+get trap

const user={
    name:"usermkk"
}

const proxy=new Proxy(user,{
    get(target,key){
        console.log("accessing");
        return Reflect.get(target,key)
    }
})

console.log(proxy.name)

//SET Trap

const user={}

const proxy=new Proxy(user,{
    set(target,key,value){
        console.log(key,value)
        return Reflect.set(target,key,value);
    }
})

proxy.name="sarju";
 

//DELETE Trap

const proxy=new Proxy(user,{
    deleteProperty(target,prop){
        console.log("deleteing",prop);
        return Reflect.deleteProperty(target,prop);
    }
})

delete proxy.name;

//Has trap
const proxy =
new Proxy(user,{
    has(target,prop){

        console.log(
           "Checking"
        );

        return Reflect.has(
            target,
            prop
        );
    }
});

console.log(
  "name" in proxy
);

//OWNKEYS Trap

const proxy =
new Proxy(user,{
    ownKeys(target){

        console.log(
            "Listing Keys"
        );

        return Reflect.ownKeys(
            target
        );
    }
});

Object.keys(proxy);