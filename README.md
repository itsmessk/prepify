# Prepify
Prepify is an AI-powered interview preparation platform designed to help users practice and improve their interview skills. The application generates customized interview scenarios and provides feedback through AI assistance.
## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Authentication](#authentication)
- [AI Integration](#ai-integration)
- [Contributing](#contributing)
- [License](#license)


## Overview
Prepify helps users prepare for job interviews by providing a platform to practice interview scenarios. The application uses AI to generate interview questions and provides feedback to help users improve their interview skills.
## Features
- **Interview Generation**: Create customized interview scenarios based on user preferences
- **User Authentication**: Secure login and registration using Firebase
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Theme Support**: Light and dark mode support via next-themes
- **AI Integration**: Powered by AI assistants for realistic interview experiences

## Technology Stack
### Frontend
- **React 19**: UI component library
- **Next.js 15.3.1**: React framework for server-rendered applications
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework

### Backend & Services
- **Firebase**: Authentication and database
- **Firebase Admin**: Server-side Firebase functionality
- **AI Integration**: Using @ai-sdk/google and @vapi-ai/web for AI capabilities

### UI Components
- **Radix UI**: Unstyled, accessible UI components
- **Lucide React**: Icon library
- **Sonner**: Toast notifications
- **React Hook Form**: Form handling with validation via Zod

## Getting Started
### Prerequisites
- Node.js (LTS version recommended)
- npm or yarn

### Installation
1. Clone the repository:
``` bash
   git clone https://github.com/yourusername/prepify.git
   cd prepify
```
1. Install dependencies:
``` bash
   npm install
```
1. Set up environment variables: Create a file in the root directory with your Firebase and AI API credentials. `.env.local`
2. Start the development server:
``` bash
   npm run dev
```
The application will be available at [http://localhost:3000](http://localhost:3000).
### Available Scripts
- `npm run dev`: Starts the development server with Turbopack
- `npm run build`: Builds the application for production
- `npm run start`: Starts the production server
- `npm run lint`: Runs ESLint to check for code quality issues

## Project Structure
``` 
prepify/
├── app/                        # Next.js app directory
│   ├── (auth)/                 # Authentication related pages
│   ├── (root)/                 # Main application pages
│   ├── api/                    # API routes
│   └── layout.tsx              # Root layout component
├── components/                 # React components
│   ├── ui/                     # UI components
│   ├── Agent.tsx               # AI agent component
│   ├── AuthForm.tsx            # Authentication form
│   └── ...                     # Other components
├── lib/                        # Utility functions and libraries
│   └── actions/                # Server actions
│       └── auth.actions.ts     # Authentication actions
│       └── general.actions.ts  # general actions
├── public/                     # Static assets
├── types/                      # TypeScript type definitions
├── firebase/                   # Firebase configuration
└── constants/                  # Application constants
```
## Authentication
Prepify uses Firebase Authentication for user management. The authentication flow includes:
- User registration with email and password
- Secure login
- Protected routes for authenticated users
- User profile management

## AI Integration
The application integrates with AI services to provide a realistic interview experience:
- **Interview Generation**: AI creates customized interview questions based on job role and experience level
- **Response Analysis**: AI provides feedback on user responses
- **Conversation Flow**: Natural conversation handling through @vapi-ai/web

The `Agent` component serves as the main interface for AI interactions, handling different types of AI-assisted features like interview generation.
## Contributing
Contributions to Prepify are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is proprietary software. All rights reserved.
© 2025 Prepify. All Rights Reserved.
