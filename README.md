# Next.js Project Template

This project is a pre-configured Next.js template designed to streamline development with a clean structure, essential dependencies, and reusable components. It is intended to serve as a starter kit for building modern web applications efficiently.

[Try it on CodeSandbox](https://githubbox.com/nextui-org/next-app-template)

## How to Use

### Getting Started

Follow these steps to start using this template:

```bash
git clone https://github.com/Annouymous/Next.js-Project-Template.git
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Initialize Configuration

Run the script to create the necessary folder structure:

```bash
npm run create-folders
```

### Run the development server

```bash
npm run dev
```

## Project Structure

The project is organized into the following folders:

## Tech Stack

**Components:** Houses global components like buttons, modals, headers, etc., that are used throughout the app.

**Constant:** A central location for storing constants such as API URLs, error codes, and other static data.
**Context:** Manages centralized application state using React's Context API.

**Functions:** Contains utility functions that perform tasks like data formatting, validation, and more.

**Firebase:**

- **_config:_** Firebase setup and initialization.
- **_functions:_** Logic related to Firebase Cloud Functions.

**Config:** Contains global application configuration files, such as environment setups.

**Hooks:** Custom React hooks to encapsulate reusable logic.

**library:**

- **_components:_** Firebase setup and initialization.
- **_screens:_** Logic related to Firebase Cloud Functions.

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## Customization

Feel free to customize the project structure and dependencies based on your specific requirements. This template is designed to provide flexibility while ensuring a solid foundation for your Next.js projects.

## Feedback and Contributions

If you encounter any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request.

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Shadcn UI](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Heroicons](https://github.com/pacocoursey/next-themes)
- [Headless-ui](https://github.com/pacocoursey/next-themes)
- [Firebase-Admin](https://github.com/pacocoursey/next-themes)
- [Firebase](https://github.com/pacocoursey/next-themes)
- [React Hot Toast](https://github.com/pacocoursey/next-themes)
- [React Icons](https://github.com/pacocoursey/next-themes)
- [Lucide react](https://github.com/pacocoursey/next-themes)
- [uuid](https://github.com/pacocoursey/next-themes)
- [clsx](https://github.com/pacocoursey/next-themes)

## Core Dependencies

| Package             | Version  | Purpose                            |
| :------------------ | :------- | :--------------------------------- |
| `@headlessui/react` | `^2.2.0` | Accessible UI components.          |
| `@heroicons/react`  | `^2.2.0` | AIcon library for React            |
| `firebase`          | `^2.2.0` | Firebase SDK for client-side apps. |
| `firebase-admin`    | `^2.2.0` | AAdmin SDK for Firebase.           |
| `framer-motion`     | `^2.2.0` | Animation library for React.       |
| `react-hot-toast`   | `^2.2.0` | Notifications for React apps.      |
| `react-icons`       | `^2.2.0` | Popular icons in React.            |
| `lucide-react`      | `^2.2.0` | Icon library for modern designs.   |
| `uuid`              | `^2.2.0` | Generate unique IDs.               |
