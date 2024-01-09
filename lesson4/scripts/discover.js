let currentTimestamp = new Date().getTime();
let lastVisitedTimestamp = localStorage.getItem('lastVisited');
let message = '';

if (lastVisitedTimestamp) {
    let differenceInTime = currentTimestamp - lastVisitedTimestamp;
    let differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

    if (differenceInDays > 1) {
        message = `You last visited ${Math.round(differenceInDays).toLocaleString()} days ago`;
    } else {
        message = 'Back so soon! Awesome!';
    }
} else {
    message = 'Welcome! Let us know if you have any questions';
}

// display message
document.querySelector('#message').textContent = message;

// save timestamp to local storage
localStorage.setItem('lastVisited', currentTimestamp);



