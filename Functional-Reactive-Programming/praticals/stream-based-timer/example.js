import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

interval(1000).pipe(take(5)).subscribe({
    next:value=>console.log(value),
    complete:()=>console.log("Timer Finished")
})
