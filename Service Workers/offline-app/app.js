// Register Service Worker

if ('serviceWorker' in navigator) {

    window.addEventListener('load', () => {

        navigator.serviceWorker
            .register('./sw.js')

            .then((registration) => {
                console.log(
                    'Service Worker Registered Successfully',
                    registration
                );
            })

            .catch((error) => {
                console.log(
                    'Service Worker Registration Failed',
                    error
                );
            });

    });

}


// Check Internet Status

const button = document.getElementById('statusBtn');
const status = document.getElementById('status');

button.addEventListener('click', () => {

    if (navigator.onLine) {
        status.textContent = 'Internet Connection Available ✅';
        status.style.color = 'green';
    } else {
        status.textContent = 'You are Offline ❌';
        status.style.color = 'red';
    }

});