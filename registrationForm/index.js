document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;

    // Password validation regex
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;

    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

    // Password validation
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 7 characters long, contain at least one capital letter, one digit, and one special character from the set (&, $, #, @).");
        event.preventDefault(); // Prevent form submission if validation fails
        return;
    }

    // Password match validation
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault(); // Prevent form submission if validation fails
        return;
    }

    // Email validation
    if (!emailRegex.test(email)) {
        alert("Email must be in the format: example@domain.com, with a valid domain.");
        event.preventDefault(); // Prevent form submission if validation fails
        return;
    }
});
