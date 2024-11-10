# E-commerce App with Admin Panel Functionality

## Project Overview

This is an e-commerce mobile application with functionalities similar to Amazon or Flipkart, built with React Native. The project includes an admin panel with role-based access, barcode and QR code scanning, and leverages libraries like `react-native-paper` for UI components and `react-native-animatable` for animations.

## Tech Stack

- **React Native**: Cross-platform mobile app development
- **React Navigation**: For app navigation
- **React Native Paper**: UI library for Material Design components
- **React Native Animatable**: Predefined animations
- **Axios**: HTTP client for API requests
- **Barcode and QR Code Libraries**: For scanning and generating barcodes/QR codes
- **Automation Testing**: Jest, Detox

## Folder Structure

- **src/api**: Contains API configuration and endpoints
- **src/components**: Reusable UI components (e.g., buttons, cards)
- **src/contexts**: Context API for global state management (e.g., AuthContext for authentication)
- **src/hooks**: Custom React hooks
- **src/navigation**: Handles navigation using React Navigation
- **src/screens**: Contains screen components, categorized by type
- **src/utils**: Utility functions and constants

## Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   ```

```base
                                   ┌───────────────┐
                                   │  Start Screen │
                                   └──────┬────────┘
                                          │
                                ┌─────────▼──────────┐
                                │ Authentication Flow│
                                └───────┬────────────┘
                                        │
                      ┌─────────────────▼────────────────┐
                      │              Home                │
                      └───────────────┬──────────────────┘
                                      │
          ┌───────────────────────────▼──────────────────────────┐
          │                        Product List                  │
          └───────────────┬─────────────┬─────────────┬──────────┘
                          │             │             │
                     ┌────▼────┐   ┌────▼────┐   ┌────▼─────┐
                     │ Product │   │  Cart   │   │ Profile  │
                     │ Details │   │         │   │          │
                     └────┬────┘   └────┬────┘   └────┬─────┘
                          │             │             │
              ┌───────────▼───────────┐ │ ┌──────────▼─────────┐
              │ Admin Panel (Roles)   │ │ │ Barcode/QR Scanner │
              └───────────────────────┘ └─┴────────────────────┘
```


# MyNewProject - React Native E-Commerce App

## Project Structure
```
MyNewProject/
├── expo/
├── assets/
├── node_modules/
├── src/
│   ├── Context/
│   │   └── AppContext.tsx
│   ├── database/
│   │   ├── index.js
│   │   └── Models/
│   │       ├── schema.js
│   │       └── task.js
│   │   └── Repositories/
│   │       └── taskRepository.js
│   ├── Screens/
│   │   ├── CartScreen.tsx
│   │   └── MainScreen.tsx
│   └── Utils/
│       └── netinfo.tsx
├── App.tsx
├── app.json
├── babel.config.js
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

## Setup Instructions

1. Install Dependencies:
```bash
yarn install
# or
npm install
```

2. Run the Project:
```bash
yarn start
# or
npm start
```

## Project Components

### 1. Database Layer
- Located in `src/database/`
- Uses WatermelonDB for offline-first data management
- Key files:
  - `index.js`: Database initialization and configuration
  - `Models/schema.js`: Database schema definition
  - `Models/task.js`: Task model definition
  - `Repositories/taskRepository.js`: Repository pattern implementation for tasks

### 2. Context API
- Located in `src/Context/`
- `AppContext.tsx`: Main application context for state management
- Handles:
  - User authentication
  - Theme management
  - Global app state

### 3. Screens
- Located in `src/Screens/`
- Main screens:
  - `MainScreen.tsx`: Primary application screen
  - `CartScreen.tsx`: Shopping cart implementation

### 4. Utilities
- Located in `src/Utils/`
- `netinfo.tsx`: Network connectivity handling

## Key Features

1. **Authentication System**
   - Role-based access (Admin, Shopkeeper, Customer)
   - Secure token storage
   - Session management

2. **E-Commerce Functionality**
   - Product browsing
   - Shopping cart
   - Order management
   - Payment processing

3. **Offline Support**
   - WatermelonDB integration
   - Local data persistence
   - Sync capabilities

4. **Network Handling**
   - Network state monitoring
   - Offline mode support
   - Auto-sync when online

## Development Guidelines

### TypeScript Usage
- Project uses TypeScript for type safety
- Follow interfaces and types defined in respective modules
- Maintain strict type checking

### Database Operations
```typescript
// Example repository usage
import { taskRepository } from '../database/Repositories/taskRepository';

// Create
await taskRepository.create({...});

// Read
const tasks = await taskRepository.getAll();

// Update
await taskRepository.update(id, {...});

// Delete
await taskRepository.delete(id);
```

### Context Usage
```typescript
import { useAppContext } from '../Context/AppContext';

const MyComponent = () => {
  const { state, dispatch } = useAppContext();
  // Use context
};
```

## Environment Setup

1. Development Requirements:
   - Node.js (v14 or higher)
   - Yarn or npm
   - React Native development environment
   - Expo CLI (if using Expo)

2. Environment Variables:
   - Create `.env` file in root directory
   - Required variables:
     ```
     API_URL=your_api_url
     ```

## Testing

```bash
# Run tests
yarn test

# Run with coverage
yarn test --coverage
```

## Build & Deployment

```bash
# Build for production
yarn build

# Run production build locally
yarn start --prod
```

## Contributing

1. Branch naming convention:
   - feature/feature-name
   - bugfix/bug-name
   - hotfix/fix-name

2. Commit message format:
   - feat: Add new feature
   - fix: Bug fix
   - docs: Documentation updates
   - style: Code style changes
   - refactor: Code refactoring

## Additional Resources

- [React Native Documentation](https://reactnative.dev/)
- [WatermelonDB Documentation](https://nozbe.github.io/WatermelonDB/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## Support

For support, please contact [your-email@domain.com]