function validateDimension(value) {
    const parsed = parseInt(value) || 5;
    return Math.max(5, Math.min(parsed, 50))
}

// https://www.w3schools.com/js/js_random.asp
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
