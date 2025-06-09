function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  
  // Prepare email content
  var subject = "New Contact Form Submission: " + data.subject;
  var body = `
    Name: ${data.name}
    Email: ${data.email}
    Subject: ${data.subject}
    Message: ${data.message}
  `;
  
  // Send email
  MailApp.sendEmail({
    to: "your-email@example.com",
    subject: subject,
    body: body
  });
  
  // Return success response
  return ContentService.createTextOutput(
    JSON.stringify({result: "success", message: "Form submitted successfully"})
  ).setMimeType(ContentService.MimeType.JSON);
}
