observable.subscribe({
    next: value => console.log(value),
    error: err => console.log(err),
    complete: () => console.log("Completed")
});