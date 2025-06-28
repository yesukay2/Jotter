# Angular Project Documentation

## Project Description

This is a fully responsive Angular-based web application featuring a note-taking system. It allows users to sign up, sign in, and manage personal notes through an intuitive user interface. The project includes form validation, authentication screens, routing, and a component-based architecture.

## Setup & Run Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yesukay2/Jotter.git
   cd Jotter
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   ng serve
   ```

4. **Build the Project**
   ```bash
   ng build
   ```

## Key Features

- Authentication system (Login & Registration)
- Responsive UI with mobile-first design
- Modular component architecture
- Form validation using Angular Reactive Forms
- Animated form transitions
- Route guards for secure navigation (assumed)
- Modern styling with SCSS

## Technologies Used

- Angular
- TypeScript
- SCSS
- RxJS
- Angular CLI

## Component Overview

### `src/index.html`

Entry point HTML file, setting up the root component.

### `src/main.ts`

Bootstrap logic to launch the Angular application.

### `src/styles.scss`

Global stylesheet for theming and layout.

### `src/app/app.component.*`

The main component that serves as the root for all child components and routes.

### `src/app/app.routes.ts`

Defines application routes for login, registration, dashboard, etc.

### `src/app/app.config.ts`

Application-level configuration settings.

### `src/app/Components/navbar/`

Contains the sidebar and navigation logic:

- `navbar.component.ts`: Navigation logic and toggling
- `navbar.component.html`: Sidebar layout
- `navbar.component.scss`: Sidebar styles

### `src/app/pages/login/`

Login and registration logic:

- `login.component.ts`: Handles login/register form logic
- `login.component.html`: UI layout for login and registration
- `login.component.scss`: Styles for auth forms

### `src/app/pages/jotters/`

- `jotters.component.ts`: Component managing user's notes (CRUD operations expected)
- `jotters.component.html`: Layout for jotters page
- `jotters.component.scss`: Styling for notes UI

## Project Structure Summary

```
src/
├── index.html
├── main.ts
├── styles.scss
└── app/
    ├── app.component.*         # Root component
    ├── app.routes.ts           # Routing setup
    ├── app.config.ts           # Global config
    ├── Components/
    │   └── navbar/             # Sidebar navigation
    └── pages/
        ├── login/              # Authentication
        └── jotters/            # Note-taking interface
```

## Notes

- The project uses Angular's standalone components.
- Routing dynamically shows or hides the sidebar based on the current route.
- Custom validation and error handling are included in form controls.
