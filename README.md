# eKart E-Commerce Application

A modern, responsive e-commerce web application built with React, featuring Clerk authentication and Stripe payment processing. This project showcases a full-featured online shopping experience with multiple product categories, cart functionality, and secure checkout.

## 🚀 Live Demo
[Add your deployed app link here]

## 📱 Features

- **Multi-Category Shopping**: Browse products across 7 categories (Electronics, Clothing, Sports, Books, Groceries, Furniture, Gift Cards)
- **Shopping Cart**: Add items to cart with real-time updates and quantity tracking
- **Secure Authentication**: User authentication powered by Clerk
- **Payment Processing**: Secure payments with Stripe integration
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Category Navigation**: Easy switching between product categories
- **Product Management**: Individual product pages with detailed information
- **Clean UI/UX**: Modern, intuitive interface
- **Search Functionality**: Header search bar for finding products
- **Protected Checkout**: Authentication required for checkout process

## 🔧 Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Clerk account for authentication
- Stripe account for payments

### Environment Setup

1. Create a `.env` file in the root directory with the following variables:

```env
REACT_APP_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
```

### Getting Your API Keys

#### Clerk Setup
1. Go to [clerk.com](https://clerk.com) and create an account
2. Create a new application
3. Copy the publishable key from the API Keys section
4. Add it to your `.env` file

#### Stripe Setup
1. Go to [stripe.com](https://stripe.com) and create an account
2. Navigate to the Developers section
3. Copy the publishable key (starts with `pk_`)
4. Add it to your `.env` file

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view the application

## 🛠️ Technologies Used

- **Frontend**: React, React Router
- **Authentication**: Clerk
- **Payments**: Stripe
- **State Management**: React Context API
- **Styling**: CSS

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - Frontend library for building user interfaces
- **React Router DOM 6.15.0** - Client-side routing and navigation
- **CSS3** - Styling and responsive design
- **JavaScript (ES6+)** - Programming language

### Authentication & Payments
- **Clerk** - User authentication and session management
- **Stripe** - Secure payment processing
- **@stripe/stripe-js** - Stripe JavaScript SDK
- **@stripe/react-stripe-js** - React components for Stripe

### State Management
- **React Context API** - Global state management for cart functionality
- **React Hooks** - useState, useEffect, useContext for component state

## 👨‍💻 Author

**Tushar Rohilla**
- [GitHub](https://github.com/tusharrohilla11)
- [LinkedIn](https://linkedin.com/in/tusharrohilla11)
### Development Tools
- **Create React App** - Development environment and build tool
- **React Scripts 5.0.1** - Build scripts and development server
- **Web Vitals** - Performance monitoring

### Testing
- **React Testing Library** - Component testing utilities
- **Jest** - JavaScript testing framework

## 📁 Project Structure

```
e-commerce/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header/           # Navigation header
│   │   ├── Categories/       # Category navigation
│   │   ├── Products/         # Product card component
│   │   ├── Context/          # React Context for state management
│   │   └── Banner/           # Banner images
│   ├── pages/
│   │   ├── Home.jsx          # Main homepage
│   │   ├── Checkout.jsx      # Shopping cart page
│   │   ├── Login.jsx         # User authentication
│   │   ├── Electronics/      # Electronics category
│   │   ├── Clothing/         # Clothing category
│   │   ├── Sports/           # Sports category
│   │   └── [Other categories]
│   ├── App.js                # Main app component with routing
│   ├── index.js              # React DOM rendering
│   └── products.json         # Product data
└── package.json
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/tusharrohilla11/e-commerce.git
   cd e-commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the environment template
   cp .env.example .env
   
   # Add your API keys to .env file
   REACT_APP_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
   REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ How to Build This Project (Step-by-Step Guide)

### Step 1: Project Initialization
```bash
# Create React app
npx create-react-app e-commerce-app
cd e-commerce-app

# Install additional dependencies
npm install react-router-dom @clerk/clerk-react @stripe/stripe-js @stripe/react-stripe-js
```

### Step 2: Project Structure Setup
```bash
# Create directory structure
mkdir src/components src/pages
mkdir src/components/Header src/components/Categories src/components/Products src/components/Context src/components/Banner
mkdir src/pages/Electronics src/pages/Clothing src/pages/Sports
```

### Step 3: State Management Setup
- Create Context API for cart management (`src/components/Context/Cart.jsx`)
- Implement global state for cart items using React Context

### Step 4: Component Development
1. **Header Component** (`src/components/Header/Header.jsx`)
   - Navigation bar with logo, search, and cart
   - User greeting and authentication links

2. **Categories Component** (`src/components/Categories/Categories.jsx`)
   - Category navigation buttons
   - React Router Links for navigation

3. **Products Component** (`src/components/Products/Products.jsx`)
   - Individual product cards
   - Add to cart functionality
   - Product information display

### Step 5: Page Components
1. **Home Page** (`src/pages/Home.jsx`)
   - Main landing page with banner
   - Featured products display

2. **Category Pages** (Electronics, Clothing, Sports, etc.)
   - Category-specific product listings
   - Unique banners for each category

3. **Checkout Page** (`src/pages/Checkout.jsx`)
   - Shopping cart display
   - Item management (add/remove)

### Step 6: Routing Setup
- Configure React Router in `App.js`
- Set up routes for all pages
- Implement navigation between components

### Step 7: Styling
- CSS modules for component-specific styling
- Responsive design principles
- Modern UI/UX patterns

### Step 8: Data Management
- Product data in JSON format
- Dynamic product rendering
- Cart state management

## 🎯 Key Implementation Features

### Context API for State Management
```javascript
// Cart Context implementation
export const CartContext = createContext(null)
export const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    return (
        <CartContext.Provider value={{items, setItems}}>
            {props.children}
        </CartContext.Provider>
    );
}
```

### Dynamic Routing
```javascript
// App.js routing structure
<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/electronics" element={<Electronics/>}></Route>
    <Route path="/clothing" element={<Clothing/>}></Route>
    <Route path="/checkout" element={<Checkout/>}></Route>
    // Additional routes...
</Routes>
```

### Component Architecture
- **Reusable Components**: Product cards, headers, categories
- **Page Components**: Complete page layouts
- **Context Providers**: Global state management
- **CSS Modules**: Scoped styling per component

## 📦 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: This is a one-way operation!** Removes the single build dependency from your project.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Set up continuous deployment from your Git repository

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🔮 Future Enhancements

- [x] User authentication and profiles ✅ (Implemented with Clerk)
- [x] Payment integration ✅ (Implemented with Stripe)
- [ ] Product search and filters
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Order history and tracking
- [ ] Admin dashboard for product management
- [ ] Database integration (MongoDB/Firebase)
- [ ] API integration for dynamic product data
- [ ] Mobile app version
- [ ] Email notifications for orders
- [ ] Multi-language support
- [ ] Advanced analytics dashboard

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Create React App for the development environment
- All open-source contributors who made this project possible

---

**Built with ❤️ by Tushar Rohilla**
