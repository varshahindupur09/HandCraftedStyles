# HandCraftedStyles

npm install @prisma/client axios stripe @stripe/stripe-js


# Key aspects of this structure:
## Frontend:
1. Uses Next.js App Router structure
2. Organized by features (products, cart, checkout)
3. Reusable components in "src/components/"
4. Global state management in "src/store/"
5. Type definitions in "src/types/"
6. API integration in "src/services/"
7. Custom hooks in "src/hooks/"

## Backend:
1. Modular architecture with clear separation of concerns
2. Version-controlled API routes (v1)
3. Separate controllers, services, and models
4. Prisma for database operations
5. Comprehensive testing structure
6. Docker support for containerization
7. TypeScript for better type safety
8. Environment-specific configurations

## How Did I Connect Them:
1. Frontend will communicate with backend via REST API
2. Use environment variables to manage API endpoints
3. CORS configuration on backend to allow frontend requests
4. Consistent type definitions between frontend and backend
5. API documentation in backend's "docs/" directory
