# Project Documentation:The DAO Community 

## Overview

The DAO Community at VIT Chennai is a student-led initiative aimed at fostering blockchain innovation and education. This project is a web application built using Next.js, React, and Tailwind CSS. It serves as an online platform for the DAO Community, providing information about the community, upcoming events, team members, resources, and a contact form.

## Directory Structure

The project follows a structured directory layout as described below:

```
daocommunity-org-daotothemoon/
├── LICENSE
├── components.json
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── .eslintrc.json
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── community/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── resources/
│       └── page.tsx
├── assets/
├── components/
│   ├── footer.tsx
│   ├── navbar.tsx
│   ├── theme-provider.tsx
│   └── ui/
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── aspect-ratio.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── breadcrumb.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── chart.tsx
│       ├── checkbox.tsx
│       ├── collapsible.tsx
│       ├── command.tsx
│       ├── context-menu.tsx
│       ├── dialog.tsx
│       ├── drawer.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── hover-card.tsx
│       ├── input-otp.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│       ├── navigation-menu.tsx
│       ├── pagination.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── radio-group.tsx
│       ├── resizable.tsx
│       ├── scroll-area.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── skeleton.tsx
│       ├── slider.tsx
│       ├── sonner.tsx
│       ├── switch.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       ├── toggle-group.tsx
│       ├── toggle.tsx
│       └── tooltip.tsx
├── hooks/
│   └── use-toast.ts
└── lib/
    └── utils.ts
```

## Key Files and Directories

### 1. `app/`

- **`globals.css`**: Contains global styles for the application using Tailwind CSS.
- **`layout.tsx`**: Defines the root layout for the application, including the Navbar and Footer components.
- **`page.tsx`**: The main entry point for the homepage of the application.

#### Subdirectories:

- **`about/page.tsx`**: Contains the About Us page, detailing the mission, vision, values, and team members of the DAO Community.
- **`community/page.tsx`**: Lists upcoming events and member spotlights.
- **`contact/page.tsx`**: Provides a contact form for users to send messages to the community.
- **`resources/page.tsx`**: Offers educational resources, articles, and useful links related to blockchain and Web3.

### 2. `components/`

- **`footer.tsx`**: The footer component for the application.
- **`navbar.tsx`**: The navigation bar component, including theme toggle and responsive design.
- **`theme-provider.tsx`**: Manages theme switching between light and dark modes.

#### UI Components:

These are reusable UI components that follow the Radix UI pattern, enhanced with Tailwind CSS for styling. Examples include `button.tsx`, `card.tsx`, `dialog.tsx`, among others.

### 3. `assets/`

Contains static assets like images used throughout the application.

### 4. `lib/`

- **`utils.ts`**: Contains utility functions used across the application.

### 5. Configuration Files

- **`LICENSE`**: Contains the MIT License for the project.
- **`next.config.js`**: Configuration for Next.js, including image optimization settings.
- **`package.json`**: Lists the project dependencies and scripts.
- **`postcss.config.js`**: Configuration for PostCSS used with Tailwind CSS.
- **`tailwind.config.ts`**: Tailwind CSS configuration
, including theme extensions and custom color schemes.
- **`tsconfig.json`**: TypeScript configuration file, specifying compiler options.
- **`.eslintrc.json`**: Configuration for ESLint, ensuring code quality and consistency.

## Features

### Home Page

The homepage introduces users to The DAO Community, highlighting the mission and inviting users to join or explore resources.

### About Page

Provides detailed information about the community's mission, vision, and values. It also introduces the team members with their roles and biographies.

### Community Page

Lists upcoming events and showcases member spotlights, celebrating achievements within the community.

### Contact Page

Features a contact form allowing users to send messages to the community. It uses the `sonner` library for toast notifications upon successful form submission.

### Resources Page

Offers educational content, including tutorials, articles, and useful links to external resources for learning blockchain and Web3 technologies.

### Theming and Responsiveness

The application supports theme switching between dark and light modes, and is designed to be responsive across devices.

## Development and Build Scripts

- **`dev`**: Starts the development server.
- **`build`**: Builds the application for production.
- **`start`**: Starts the production server.
- **`lint`**: Runs ESLint to check for code quality issues.

## Dependencies

The project leverages a range of dependencies, including:

- **Next.js** for server-side rendering and routing.
- **React** for building user interfaces.
- **Tailwind CSS** for styling.
- **Radix UI** components for accessible and customizable UI elements.
- **Lucide React** for iconography.
- **Sonner** for toast notifications.

## License

The project is licensed under the MIT License, allowing for free use, modification, and distribution of the software.

## Conclusion

This project serves as a comprehensive platform for the DAO Community at VIT Chennai, facilitating engagement, education, and collaboration in the field of blockchain technology. The structured codebase and reusable components make it easy to maintain and extend the application as the community grows.