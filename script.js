document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const stateOfOrigin = document.getElementById('stateOfOrigin').value;
    const maritalStatus = document.getElementById('maritalStatus').value === 'true';
    const schoolAttended = document.getElementById('schoolAttended').value;
    const department = document.getElementById('department').value;
    const yearOfGraduation = document.getElementById('yearOfGraduation').value;
    const houseAddress = document.getElementById('houseAddress').value;
    const matriculationNumber = document.getElementById('matriculationNumber').value;
    const employmentStatus = document.getElementById('employmentStatus').value === 'true';

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Entered Information:</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>State of Origin:</strong> ${stateOfOrigin}</p>
        <p><strong>Marital Status:</strong> ${maritalStatus}</p>
        <p><strong>School Attended:</strong> ${schoolAttended}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Year of Graduation:</strong> ${yearOfGraduation}</p>
        <p><strong>House Address:</strong> ${houseAddress}</p>
        <p><strong>Matriculation Number:</strong> ${matriculationNumber}</p>
        <p><strong>Employment Status:</strong> ${employmentStatus}</p>
    `;
});
