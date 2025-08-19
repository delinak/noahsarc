# Noah's Arc Care - Static Informational Website

## Overview

Noah's Arc Care is a simple, fast-loading static website for a disability care service provider in Tennessee. The website showcases services for individuals with intellectual and developmental disabilities, including supportive living, respite care, community transportation, and other specialized care services. The site provides contact information for potential clients to reach out directly via phone, email, or office visit.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom purple color scheme reflecting the brand
- **Component Structure**: Modular component architecture with reusable navigation and footer components
- **Static Pages**: Five main informational pages (Home, About, Services, Careers, Contact)

### Backend Architecture
- **Runtime**: Node.js with Express.js server (minimal static file serving only)
- **Language**: TypeScript with ES modules
- **Purpose**: Simple HTTP server to serve static React application
- **No Database**: All content is static with no data persistence layer

### Development and Deployment
- **Build System**: Vite for frontend bundling
- **Development**: Hot module replacement with Vite dev server
- **Production**: Static file serving with Express for SPA deployment
- **Type Safety**: TypeScript coverage for frontend components and routing

## External Dependencies

### Core Libraries
- **React**: Frontend framework for building the user interface
- **Wouter**: Lightweight routing solution for single-page application navigation
- **Tailwind CSS**: Utility-first CSS framework with custom color variables
- **Lucide React**: Icon library for consistent iconography across the application

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety for development

### Replit Integration
- **Vite Plugins**: Runtime error overlay and cartographer for development environment

## Recent Changes (January 2025)
- **Major Architecture Change**: Converted from full-featured web application with database, forms, and admin panel to simple static informational website
- **Removed Components**: All form handling, database operations, admin authentication, and data persistence
- **Simplified Tech Stack**: Eliminated PostgreSQL, Drizzle ORM, TanStack Query, React Hook Form, and other database-related dependencies
- **Static Contact Information**: Contact and careers pages now display phone, email, and address information only
- **Performance Improvement**: Significantly faster loading times with no database queries or form processing overhead