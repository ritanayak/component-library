import type { ProductDisplayProps } from "../../types";

function ProductDisplay({
  product,
  showDescription,
  showStockStatus,
  onAddToCart,
  children,
}: ProductDisplayProps) {
  return (
    <article className="flex flex-col items-center w-full max-w-md m-auto mt-20 gap-4 bg-gray-50 p-4 rounded-lg shadow-md">
      {/* Render product image if available */}
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-52 object-cover rounded-lg shadow-md"
        />
      )}
      <p className="text-xl font-semibold">{product.name}</p>
      {/* Display formatted price */}
      <p className="text-xl font-bold text-blue-700">${product.price}</p>
      {showDescription && <p className="text-gray-600">{product.description}</p>}
      {showStockStatus && (
        <p className={`font-semibold ${product.inStock ? "text-violet-600" : "text-red-600"}`}>
          {product.inStock ? "In Stock" : "Out Of Stock"}
        </p>
      )}

      {children && <div className="text-sm text-gray-500">{children}</div>}
       {/* Render Add To Cart button only if handler exists */}
      {onAddToCart && (
        <button
          onClick={() => onAddToCart(product.id)}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 text-lg"
          disabled={!product.inStock}
        >
          Add To Cart
        </button>
      )}
    </article>
  );
}

export default ProductDisplay;
