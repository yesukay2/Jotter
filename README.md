# Jotter - Angular Note-Taking App

Jotter is a fully responsive web-based note-taking application built with Angular. It offers a clean, modern interface for users to create, view, and manage their notes easily and efficiently. The app supports account-based access and includes dynamic UI components for a smooth user experience.

---

## 🚀 Project Description

Jotter allows users to:

- Register and log in securely
- Add, edit, and delete notes
- Search through notes using a built-in search bar
- Navigate through the app via a responsive sidebar

It's perfect for productivity-focused users looking for a sleek online jotting tool.

---

## ⚙️ Setup & Run Instructions

### Prerequisites

- Node.js & npm installed
- Angular CLI installed (`npm install -g @angular/cli`)

### Installation

```bash
git clone https://github.com/yesukay2/Jotter.git
cd jotter
npm install
```

### Run Development Server

```bash
ng serve
```

The app will be available at `http://localhost:4200`.

---

## ✨ Key Features

- 🔒 Authentication (Login/Sign Up)
- 📝 Jotter Card Components for each note
- 🔍 Search bar to quickly filter notes
- 📱 Fully responsive layout with sidebar toggle
- 🎨 Elegant UI using SCSS

---

## 🛠️ Technologies Used

- Angular
- TypeScript
- SCSS for styling
- Reactive Forms Module
- Angular Routing

---

## 🧩 Component Overview

### `app.component.*`

- Root component
- Handles layout and routing outlet

### `navbar/`

- `navbar.component.ts`: Sidebar and mobile menu toggle
- `navbar.component.html`: Navigation links and branding
- `navbar.component.scss`: Styling for sidebar

### `search-bar/`

- `search-bar.component.ts`: Emits search input
- `search-bar.component.html`: Search input box
- `search-bar.component.scss`: Search bar styles

### `jotter-card/`

- `jotter-card.component.ts`: Displays a single note
- `jotter-card.component.html`: Jotter content layout
- `jotter-card.component.scss`: Card UI styling

### `login/`

- `login.component.ts`: Login/Register form logic
- `login.component.html`: Dual mode form (sign in / sign up)
- `login.component.scss`: Auth screen styles

---

## 📂 Folder Structure

```
src/
├── app/
│   ├── Components/
│   │   ├── navbar/
│   │   ├── search-bar/
│   │   ├── jotter-card/
│   │   └── login/
│   ├── app.component.*
│   ├── app.routes.ts
│   └── app.config.ts
├── styles.scss
├── index.html
└── main.ts
```

---

## 📄 License

This project is open-source and free to use.

---

## 👨‍💻 Author

Built with 💚 by Yesu Kay
