# RentHomes

![RentHomes Logo](/public/vector1.png)

RentHomes is a web application designed to simplify the process of finding and renting homes. The platform offers a user-friendly interface that allows users to search for rental homes, view detailed descriptions, and interact with a responsive, secure platform. This project is built using React, Tailwind CSS, and Firebase.

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
  - [How to Contribute](#how-to-contribute)
  - [Code of Conduct](#code-of-conduct)
- [License](#license)
- [Contact](#contact)

## Live Demo

Check out the live version of RentHomes here: [RentHomes Live Site](https://rent-homes-seven.vercel.app/) 

## Features

- **Responsive Design**: The application is optimized for various screen sizes, ensuring a seamless experience across devices.
- **Easy Navigation**: Simple navigation through the platform with clear links to different sections.
- **User Authentication**: Users can sign up, log in, and log out securely.
- **Hero Section**: A welcoming hero section with key information about the service.
- **Footer**: A detailed footer with useful links and contact information.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Firebase**: Used for authentication and storage.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Installed on your local machine. [Download Node.js](https://nodejs.org/)
- **npm** or **yarn**: Package manager installed globally.
- **Git**: Installed on your local machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/renthomes.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd renthomes
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

   or if you're using yarn:

   ```bash
   yarn install
   ```

4. **Set up Firebase**:
   - Create a Firebase project in your [Firebase Console](https://console.firebase.google.com/).
   - Enable authentication and storage in Firebase.
   - Create a `.env` file in the root of your project and add your Firebase configuration variables:

     ```
     VITE_API_KEY=your-api-key
     VITE_AUTH_DOMAIN=your-auth-domain
     VITE_PROJECT_ID=your-project-id
     VITE_STORAGE_BUCKET=your-storage-bucket
     VITE_MESSAGING_SENDER_ID=your-messaging-sender-id
     VITE_APP_ID=your-app-id
     ```

5. **Run the project**:

   ```bash
   npm run dev
   ```

   or if you're using yarn:

   ```bash
   yarn dev
   ```

   Your application should now be running on [http://localhost:3000](http://localhost:3000).

## Project Structure

```plaintext
renthomes/
├── public/
├── src/
│   ├── assets/          # Images, icons, and other static assets
│   ├── components/      # Reusable components (Navigation, Hero, Services, Reviews, Footer)
│   ├── context/         # Context API for managing authentication state
│   ├── pages/           # Page components (Home, Login, Signup, etc.)
│   ├── styles/          # Global styles and Tailwind CSS configurations
│   ├── main.jsx         # Entry point for the application
│   └── ...              # Other files and directories
├── .env                 # Environment variables
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Contributing

We welcome contributions to RentHomes! Whether you're reporting bugs, proposing new features, or submitting pull requests, your input is invaluable to us.

### How to Contribute

1. **Fork the repository**:

   Click on the "Fork" button at the top-right corner of this page.

2. **Clone your fork**:

   ```bash
   git clone https://github.com/your-username/renthomes.git
   ```

3. **Create a new branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**.

5. **Commit your changes**:

   ```bash
   git commit -m "Add a brief description of your changes"
   ```

6. **Push to your branch**:

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a pull request**:

   Go to your fork on GitHub and click the "New Pull Request" button.

### Code of Conduct

Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions, feel free to contact:

- **Hassana Abdullahi** - [LinkedIn](https://www.linkedin.com/in/hassana-abdullahi-858040240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
- **Email**: [hassanaabdll1@gmail.com](mailto:hassanaabdll1@gmail.com)

Happy coding!
