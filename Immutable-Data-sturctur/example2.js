import {produce} from "immer";

const state={
    user:{
        address:{
            city:"Chennai"
        }
    }
}

const newState=produce(state,draft=>{
    draft.user.address.city="Delhi";
});

console.log(newState);