# Password-Strength-Analyzer

A simple and interactive web-based Password Strength Analyzer that evaluates user-entered passwords and provides real-time feedback on password security.

#Features

✅ Checks password length
✅ Detects uppercase and lowercase letters
✅ Verifies numbers and special characters
✅ Identifies common/weak passwords
✅ Displays password strength (Weak / Medium / Strong)
✅ Visual strength progress bar
✅ Suggests improvements for stronger passwords
✅ Real-time password analysis

##Technologies Used
HTML
CSS
JavaScript
Project Structure
Password-Strength-Analyzer/
│
├── index.html
├── style.css
├── script.js
└── README.md
How It Works

##The analyzer checks:

Password length
Uppercase letters
Lowercase letters
Numbers
Special characters
Password uniqueness
Common password patterns

Based on these checks, a score is calculated and the password is classified as:

🔴 Weak
🟡 Medium
🟢 Strong

#Sample Password Evaluation

Password:

Hello@123

#Output:

✔ Length sufficient
✔ Uppercase present
✔ Lowercase present
✔ Number present
✔ Special character present
✔ Unique password

Strength: Strong 🟢
Installation & Run
Clone repository:
git clone your-repository-link
Open project folder
Open index.html using Live Server in VS Code

OR simply double-click index.html

#Future Enhancements
Add password visibility toggle
Integrate database to prevent password reuse
Store hashed old passwords securely
Add advanced password entropy calculation
Improve UI with animations
Learning Outcome

This project helps understand:

Password security concepts
Input validation
Password complexity analysis
Password strength scoring
Basic cybersecurity practices
