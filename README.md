# E-Commerce Product Search Application

## Scope

The projects scope is limited to the core functionalities of an E-commerce store, where you can search, browse, sort and filter (limited), view individual products, and witnessing my amazing skills in creating logo's on the fly.

## Requirements

### Framework and Libraries

-   **Next.js App Router** (Version 14): As per the ideal set up, this project uses Next.js 14 with the App router.
-   **Additional Libraries**:
    -   **Tailwind CSS** for styling: A utility-first CSS framework for rapid UI design.
    -   **Shadcn** for ready made components, saving time, and focusing on functionality rather than if that button looks good (it does).

### API Integration

The application integrates with a free product API to fetch product data, including names, images, prices, and descriptions.

-   **API Used**: [dummyjson](https://dummyjson.com/docs/products)

### Application Pages and Functionality

1. **Navigation Bar (Navbar)**:

    - Includes a **search bar** that is accessible across all pages.
    - Users can enter a search query, which is submitted to navigate to the Product Listing Page (/products).

2. **Product Listing Page**:

    - Displays a list of products matching the search query.
    - Each product displays its name, image, and price.
    - **Bonus**: Optional filtering and sorting features can be applied, although to a limited extent.

3. **Product Pages**:

    - For a selected subset of products (e.g., 10 products), static pages are generated for better load times and SEO.
    - Each product page displays detailed information.
    - Includes an "Add to Cart" button (No functionality added).

4. **Dynamic Product Pages**:
    - For products not pre-generated, pages are dynamically rendered when accessed.

### Documentation and Submission

-   **Instructions**: Follow the steps below to set up and run the project.

    1. Clone the repository: `git clone https://github.com/AliiIbrahim/next-ecommerce.git`
    1. cd into directory: `cd next-ecommerce`
    1. Install dependencies: `npm install`
    1. Start the development server: `npm run dev`
    1. Visit the application in your browser at `http://localhost:3000`.

-   **Architectural Decisions**:

    -   Used Next.js 14 App Router to manage dynamic and static pages.
    -   Shadcn was chosen to speed up the design process.
    -   Tailwind CSS was used for styling to quickly prototype the UI with utility classes.
    -   I purposely kept this as limited as possible to showcase my ability to work with Next.js (because it's beautiful just the way it is).

-   **Areas for Future Improvement**:
    -   Implement the "Add to Cart" functionality with a cart page.
    -   Introduce advanced filtering (e.g., by category or price range).
    -   Add authentication for user accounts and purchase history.
    -   Improve UI/UX with animations or custom themes.
    -   Add a Remove Filters button as the only way to do it right now would be to clear the search and enter.
    -   Add more pages, looks kinda dry currently.
    -   Mobile menu, because wrapping seems like we ran out of budget.
    -   Implement loaders, because the user is very impatient (and so am I).

### Scope Considerations

-   **Core Functionality**:
    -   Product searching, displaying results, generating static pages, and navigation are the main focuses.
-   **Bonus Features**: Filtering, sorting, and fully functional "Add to Cart" can be added if time allows.
