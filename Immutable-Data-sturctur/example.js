import { produce } from "immer";

const user = {
    name: "Sarju",
    age: 21
};

const updatedUser = produce(user, draft => {
    draft.age = 22;
});

console.log(user);
console.log(updatedUser);