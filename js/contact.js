// contact.js
function submitContact(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // In a real application, this would submit to a backend
    alert('Message sent successfully!');
    event.target.reset();
}
