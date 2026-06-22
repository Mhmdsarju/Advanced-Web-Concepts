import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

const searchInput = document.getElementById('search');

fromEvent(searchInput, 'input')
.pipe(
    debounceTime(500),
    map(event => event.target.value)
)
.subscribe(value => {
    console.log("Searching:", value);
});