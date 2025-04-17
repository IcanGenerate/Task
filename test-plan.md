
---

### ✅ `test-plan/test-plan.md`

```markdown
# Test Plan for Counter App

This document outlines the test cases for validating the functionality of the Counter App.

---

## 🔍 Basic Functionality

### ✅ TC1: Increment Button
- **Steps**: Click "Increment" once
- **Expected**: Counter shows `1`

### ✅ TC2: Decrement Button
- **Precondition**: Counter is `1`
- **Steps**: Click "Decrement" once
- **Expected**: Counter shows `0`

---

## 🚫 Edge Cases

### 🚫 TC3: Prevent Negative Values
- **Precondition**: Counter is `0`
- **Steps**: Click "Decrement"
- **Expected**: Counter remains at `0`

---

## 🔁 Multiple Clicks

### 🔁 TC4: Multiple Increments
- **Steps**: Click "Increment" 5 times
- **Expected**: Counter shows `5`

### 🔁 TC5: Increment and Decrement Mix
- **Steps**: Click "Increment" 3 times, then "Decrement" 1 time
- **Expected**: Counter shows `2`

---

## 🧪 UI Behavior

### 🎯 TC6: Counter Element Exists
- **Expected**: An element with `id="counter"` is present and shows a number

### 🎯 TC7: Buttons Exist and Are Clickable
- **Expected**: "Increment" and "Decrement" buttons exist and function

---

## ✅ Tested In

- Cypress v14.3
- Localhost via http-server
- GitHub Actions CI runner
