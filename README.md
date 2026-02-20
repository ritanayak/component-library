Component Library
-----------------

A reusable React component library built with TypeScript, demonstrating proper prop handling, component composition, and TypeScript best practices. Includes AlertBox, UserProfileCard, and ProductDisplay components with flexible optional props and children support. Tailwind CSS is used for styling.

Table of Contents
-----------------

 * Features

* Installation

* Development

* Uses of the Components

Features
--------

 - Fully typed with TypeScript for type safety

 - Reusable and composable components

- Optional props handled safely

- Supports nested content via children

- Styled with Tailwind CSS

Installation
# Clone the repository
git clone <repository-url>
cd component-library

# Install dependencies
npm install

# Run the development server
npm run dev

The app runs at http://localhost:5173 by default.

Development
-------------

- Components are located under src/components/.

- Type definitions are centralized in src/types/index.ts.

- Tailwind classes are used for consistent styling.

- Optional props are safely handled and children allow flexible composition.

 # Uses of the Components

This library provides three main reusable components: AlertBox, UserProfileCard, and ProductDisplay. Each component is fully typed, supports optional props, and allows nested content using children. Tailwind CSS ensures consistent styling and layout.

- AlertBox

The AlertBox component is used to display messages to users. It supports multiple alert types, including success, error, warning, and info. Optional close functionality allows the alert to be dismissed, and additional content can be rendered below the main message to provide context, instructions, or tips.

Key Features:

Configurable alert type to indicate message context

Optional close handler for dismissible alerts

Supports extra content via children

- UserProfileCard

The UserProfileCard component displays user information in a structured card format. Optional sections, such as email or role, can be shown or hidden. An edit action can be included via a callback, and additional content like notes or last login details can be displayed below the main information.

Key Features:

Display user details including name, email, and role

Optional visibility for email and role sections

Optional edit action through a callback

Supports nested content via children

- ProductDisplay

The ProductDisplay component shows product information clearly and flexibly. Optional sections include product description and stock status. You can also provide an “Add to Cart” action. Additional details like promotions or shipping information can be included using children.

Key Features:

Display product details including name, price, description, and stock status

Optional display of description and stock availability

Optional “Add to Cart” action via callback

Supports nested content via children

