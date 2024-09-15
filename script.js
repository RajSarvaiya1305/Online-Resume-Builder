// script.js
document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const year = document.getElementById('year').value;
    const jobTitle = document.getElementById('job-title').value;
    const company = document.getElementById('company').value;
    const duration = document.getElementById('duration').value;
    const skills = document.getElementById('skills').value;

    let output = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>Education</h4>
        <p>${degree} from ${institution} (${year})</p>
        <h4>Work Experience</h4>
        <p>${jobTitle} at ${company} (${duration})</p>
        <h4>Skills</h4>
        <p>${skills}</p>
    `;

    document.getElementById('output').innerHTML = output;
});
