import "./App.css";
import AlertBox from "./components/AlertBox/AlertBox";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import { useState } from "react";


function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl: "./src/assets/headphones.webp",
    inStock: true,
  };

  const user = {
    id: "1",
    name: "Mike Brown",
    email: "Mike.Brown@example.com",
    role: "Software Engineer",
    avatarUrl: "./src/assets/avatar.jpg",
  };

  const handleAddToCart = (productId: string) => {
    setCartItems((prev) => [...prev, productId]);
    setShowAlert(true);
  };

  return (
    <>
      {/* Rendering AlertBox with success type component */}
      <AlertBox
        type="success"
        message="Your profile has been updated successfully!"
        onClose={() => alert("Alert closed")}
      >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>
      {/* Rendering AlertBox with warning type component */}
      <AlertBox
        type="warning"
        message="Your profile has been updated successfully!"
        onClose={() => alert("Alert closed")}
      >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>
      {/* Rendering AlertBox with error type component */}
      <AlertBox
        type="error"
        message="Your profile has been updated successfully!"
        onClose={() => alert("Alert closed")}
      >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>

      {/* Rendering AlertBox with info type component */}
      <AlertBox
        type="info"
        message="Your profile has been updated successfully!"
        onClose={() => alert("Alert closed")}
      >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>

      {/* Rendering UserProfileCard component */}

      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(userId) => alert(`Editing user ${userId}`)}
      >
        <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
      </UserProfileCard>

      {/* Rendering Product Display component */}

      <ProductDisplay
        product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={handleAddToCart} 
      >
        <div className="text-sm text-gray-500">Free shipping available</div>
      </ProductDisplay>

      {/*  components composition */}

      <div className="p-4">
   <h2 className="text-xl font-bold">Cart Items: {cartItems.length}</h2>

  {showAlert && (
    <AlertBox
      type="success"
      message="Product added to cart!"
      onClose={() => setShowAlert(false)}
    />
  )}
</div>
    </>
  );
}

export default App;