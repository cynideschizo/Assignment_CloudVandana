document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('surveyForm');
    const submitButton = document.getElementById('submitBtn');
    const resetButton = document.getElementById('resetBtn');
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');
    const closePopupButton = document.getElementById('closePopup');

    submitButton.addEventListener('click', function () {
        const errors = [];

        // Get form inputs
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const dob = document.getElementById('dob').value;
        const country = document.getElementById('country').value;
        const gender = document.querySelector('input[name="test"]:checked');
        const profession = document.getElementById('profession').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        const serviceUse = document.querySelector('input[name="service use"]:checked');
        const suggest = document.querySelector('input[name="suggest"]:checked');
        const satisfaction = document.querySelector('input[name="satisfied"]:checked');
        const feedback = document.querySelector('textarea').value.trim();

        // Validation for required fields
        if (!firstName) {
            errors.push('First Name is required.');
        }

        if (!lastName) {
            errors.push('Last Name is required.');
        }

        if (!dob) {
            errors.push('Date of Birth is required.');
        }

        if (country === 'Select Country') {
            errors.push('Country is required.');
        }

        if (!gender) {
            errors.push('Gender is required.');
        }

        if (!profession) {
            errors.push('Profession is required.');
        }

        if (!email) {
            errors.push('Email is required.');
        } else if (!isValidEmail(email)) {
            errors.push('Please enter a valid email address.');
        }

        if (!mobile) {
            errors.push('Mobile number is required.');
        } else if (!isValidMobile(mobile)) {
            errors.push('Please enter a valid 10-digit mobile number.');
        }

        if (!serviceUse) {
            errors.push('Please select if you are using the product or service for the first time.');
        }

        if (!suggest) {
            errors.push('Please select if you would suggest to your friends and colleagues.');
        }

        if (!satisfaction) {
            errors.push('Please select your satisfaction level with the company.');
        }

        if (!feedback) {
            errors.push('Feedback is required.');
        }

        // Display errors or show the popup
        if (errors.length > 0) {
            alert(errors.join('\n'));
        } else {
            // Display the form data in the popup
            const popupData = `
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Date of Birth:</strong> ${dob}</p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>Gender:</strong> ${gender.nextElementSibling.textContent}</p>
                <p><strong>Profession:</strong> ${profession}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Contact:</strong> ${mobile}</p>
                <p><strong>Is this your first time using our product or service?</strong> ${serviceUse.nextElementSibling.textContent}</p>
                <p><strong>Would you suggest to your friends and colleagues?</strong> ${suggest.nextElementSibling.textContent}</p>
                <p><strong>How satisfied are you with our company overall?</strong> ${satisfaction.nextElementSibling.textContent}</p>
                <p><strong>Feedback:</strong> ${feedback}</p>
            `;

            popupContent.innerHTML = popupData;
            popup.style.display = 'block';
        }
    });

    closePopupButton.addEventListener('click', function () {
        popup.style.display = 'none';
        form.reset();
    });

    resetButton.addEventListener('click', function () {
        form.reset();
    });

    // Validate email format
    function isValidEmail(email) {
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailPattern.test(email);
    }

    // Validate mobile number format
    function isValidMobile(mobile) {
        const mobilePattern = /^\d{10}$/; // Assuming a 10-digit format
        return mobilePattern.test(mobile);
    }
});
