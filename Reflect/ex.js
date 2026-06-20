const user={
    name="sarju"
}

console.log(Reflect.get(user,"name"));

// set

const user = {
    name: "Sarju"
}

Reflect.set(user,"age",30);

console.log(Reflect.get(user,"age"));

//has
const user = {
    name: "Sarju"
}

console.log(Reflect.has(user,"name"));
//delete

const user = {
    name:"Sarju"
};

Reflect.deleteProperty(user,"name");

console.log(user);

//ownkeys();
const id = Symbol();

const obj = {
    name:"Sarju",
    [id]:123
};

console.log(
    Reflect.ownKeys(obj)
);

//apply
console.log(Reflect.apply(Math.max,null,[1,2,4]))

//.construct()

function Person(name){
    this.name=name
}

const user=Reflect.construct(Person,["sarju"]);

console.log(user.name)

//proxy+

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
