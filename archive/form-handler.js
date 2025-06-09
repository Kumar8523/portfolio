// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Send data to Google Apps Script
    fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(() => {
        alert('আপনার বার্তা সফলভাবে পাঠানো হয়েছে!');
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('দুঃখিত, বার্তা পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।');
    });
});
