import {Observable} from "rxjs";

const observable=new Observable(subscriber =>{
    subscriber.next("hello");
    subscriber.next("World");
    subscriber.complete();
});

observable.subscribe(data=>{
    console.log(data)
})