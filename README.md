# Playwright Automation Project

This project contains automated tests for **Website Automation** using [Playwright](https://playwright.dev/).

---

## Prerequisites

Before running the project, make sure you have:

1. Node.js (v18+ recommended) installed (`node -v` to check)  
2. npm (comes with Node.js) (`npm -v` to check)  
3. Playwright browsers (Chromium, Firefox, WebKit)  
4. Internet connection (for downloading browsers & sending emails)

---

## Setup Steps

1. Clone the repository:

```bash
git clone https://github.com/pushpakazam/Website_Automation.git
cd Website_Automation
```

2. Install project dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

4. (Optional) Set environment variables for email reports:  

Create a `.env` file in the project root:

```
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_app_password
TO_EMAIL=recipient_email@example.com
```

> Make sure `.env` is added to `.gitignore` to keep credentials safe.

---

## Running Tests

- Run all tests:

```bash
npx playwright test
```

- Run a specific test file:

```bash
npx playwright test tests/YourTest.spec.js
```

- Run tests in headed mode (browser visible):

```bash
npx playwright test --headed
```

- Run a single test by name:

```bash
npx playwright test -g "Test Name"
```

---

## Generating Reports

- HTML report (view after tests run):

```bash
npx playwright show-report
```

- Custom PDF report (using `htmltopdf.js`):

```bash
node utils/html-to-pdf.js
```

- Send PDF report via email (using `send-email.js`):

```bash
node utils/send-pdf-report.js
```

> Workflow ensures automated reports even if tests fail.

---

## PDF & Email Reports Workflow

1. Run tests → Playwright generates HTML report  
2. Run `htmltopdf.js` → converts HTML report to PDF  
3. Run `send-email.js` → sends PDF report to recipients

---

## Folder Structure

```
Project/
 ├─ tests/                 # All test spec files
 ├─ pages/                 # Page Object Model files
 ├─ utils/                 # Utility scripts (PDF, email)
 ├─ playwright.config.js   # Playwright configuration
 ├─ package.json
 └─ README.md
```

---

## Environment Variables

If using `.env` for credentials:

```
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_app_password
TO_EMAIL=recipient_email@example.com
```

> Make sure `.env` is in `.gitignore` to keep sensitive information safe.

---

## Contact

For any issues or questions, reach out to **[Your Name / Team]** at **[your email]**.

---

## Quick Reference Steps (All-in-One)

1. Clone repository  
2. `npm install`  
3. `npx playwright install`  
4. Run tests: `npx playwright test`  
5. Run specific test: `npx playwright test tests/YourTest.spec.js`  
6. Run tests headed: `npx playwright test --headed`  
7. Run single test by name: `npx playwright test -g "Test Name"`  
8. Generate HTML report: `npx playwright show-report`  
9. Generate PDF report: `node utils/htmltopdf.js`  
10. Send PDF report via email: `node utils/send-email.js`
