document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting by default

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email && password) {
        alert('Logged in successfully!');
    } else {
        alert('Please enter valid credentials');
    }
});
