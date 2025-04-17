# Counter App with Cypress E2E Testing

This is a simple counter app that only allows positive numbers. The app includes **Increment** and **Decrement** buttons. Cypress is used for end-to-end testing, and GitHub Actions is configured to run the tests automatically on every pull request.

---

## 🔧 Features

- Counter starts at 1 and only shows positive numbers
- Buttons:
  - ➕ Increment: increases the count
  - ➖ Decrement: decreases the count (but not below 0)
- Real-time counter update
- Fully tested using Cypress
- GitHub Actions CI pipeline

---

##  Getting Started

### 1. Install dependencies:

```bash
npm install

2. Start the app locally:
npx http-server -p 3000

3. Open the app in your browser:
http://localhost:3000

4. Run Cypress tests locally:
npx cypress open
