 // Function to toggle the form and change the button appearance
 function toggleForm() {
    var form = document.getElementById('myForm');
    var button = document.getElementById('toggleButton');
    
    if (form.style.display === 'none') {
        form.style.display = 'block';
        button.innerHTML = '✕'; // Change button appearance to 'close'
    } else {
        form.style.display = 'none';
        button.innerHTML = '&#9776;'; // Change button appearance back to the toggle icon
    }
}