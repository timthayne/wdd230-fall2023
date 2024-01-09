document.querySelector('button')
    .addEventListener('click', () => {
        const name = document.querySelector('#name').value;

        if (name) {
            localStorage.setItem('name', name);
            loadName();
        }
    });

function loadName() {
    const name = localStorage.getItem('name');

    if (name) {
        document.querySelector('h1').innerHTML = 
        `Welcome, ${name}<sup>&copy;&trade;</sup>`;
    }
}

loadName();
