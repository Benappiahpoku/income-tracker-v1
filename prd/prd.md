# Product Requirements Document (PRD)

## App Name: Income Tracker

## Version: 1.0

## Author: Stratonea

## Date: 2025-06-06

---

## 1. **Overview**

The Income Tracker is a **mobile-first**, **offline-capable**, lightweight web app built for Ghanaian SMEs, informal workers, and micro-entrepreneurs. It allows users to easily record, view, and share their daily income without logging in or needing advanced financial knowledge.

---

## 2. **Objectives**

- Provide a **simple tool** for tracking daily income.
- Work **offline-first**, optimized for low-end Android phones.
- Enable **PDF export** and **WhatsApp sharing**.
- Integrate into Stratonea’s **App Switcher** (Invoice, Receipt, etc.).

---

## 3. **Target Users**

- Market women
- Tailors / seamstresses
- MoMo agents
- Delivery riders
- Junior entrepreneurs
- Freelancers in the informal sector

---

## 4. **Core Features**

### 4.1 **Add Income Entry**

- Fields:
  - Customer Name (optional)
  - Amount (₵)
  - Description (optional)
  - Source (income categories be pre-filled (”Cash”, “Momo”, “Store Sales”, or “Transport”) and customizable?) (optional)
  - Date (auto-filled to today, editable)

### 4.2 **Daily/Weekly/Monthly View**

- Toggle between:
  - **Today’s total**
  - **This week’s total**
  - **This month’s total**
  - **Total Income to Date**
- Simple chart (line and bar)

### 4.3 **Export / Share**

- Download full income history as **PDF**
- Auto-format to clean printable table
- WhatsApp share button (PDF or summary text)

### 4.4 **Local Storage**

- Data saved using **localForage**
- No internet needed
- Persistent on reload

---

## **5. Features**

- Filter by income source
- Simple trends chart
- Users are able to edit or delete old entries
- **Clear All Data** button in Settings
- **CSV export** button in Settings

---

## 6. **UI & UX**

- Mobile-first layout (Tailwind CSS)
- Large buttons, minimal text
- Light & dark mode toggle
- Language: English (add Twi labels as tooltips in v2)
- No sign-up/login required

---

## 7. **Tech Stack**

- **Frontend:** Vue.js + Vite
- **Styling:** Tailwind CSS
- **PDF Export:** html2pdf.js
- **Storage:** localForage
- **Hosting:** Vercel

---

## 8. **Non-Functional Requirements**

- Should load in <2 seconds on mobile
- Fully functional offline
- Data stays even if browser is closed
- Fully responsive on all screen sizes
- Less than 1MB total JS/CSS bundle

---

## 9. **Success Metrics**

- 100+ unique users in first 2 weeks
- 50% return usage after 7 days
- 30 shares via WhatsApp from PDF export
- Qualitative feedback from 5+ user types

---

## 10. **Constraints**

- No user login or database for v1
- Designed for solo use—not multi-user team tracking  
