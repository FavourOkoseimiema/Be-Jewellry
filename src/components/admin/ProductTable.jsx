import { useEffect, useState } from "react";
import api from "../../../services/api";
import EditProductModal from "./EditProductModal";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

function ProductTable() {

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
const [isUpdating, setIsUpdating] = useState(false);
  useEffect(() => {
  fetchProducts();
}, []);
const fetchProducts = async () => {
  try {
    const response = await api.get("/products");

    setProducts(response.data);

  } catch (error) {
    console.error(error);

    alert("Unable to load products.");
  }
};
const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (!confirmDelete) return;

  try {
    setDeletingId(id);

    await api.delete(`/products/${id}`);

    setProducts(
      products.filter((product) => product._id !== id)
    );

    toast.success("Product deleted successfully");

  } catch (error) {
    console.error(error);

    toast.error("Failed to delete product");

  } finally {
    setDeletingId(null);
  }
};
const handleUpdate = async (updatedProduct) => {
  try {
    setIsUpdating(true);
    const formData = new FormData();

    formData.append("name", updatedProduct.name);
    formData.append("description", updatedProduct.description);
    formData.append("price", updatedProduct.price);
    formData.append(
      "featured",
      updatedProduct.featured
    );

    // Only add image if admin selected a new one
    if (updatedProduct.image) {
      formData.append(
        "image",
        updatedProduct.image
      );
    }

    const response = await api.put(
      `/products/${updatedProduct._id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setProducts(
      products.map((product) =>
        product._id === updatedProduct._id
          ? response.data.product
          : product
      )
    );

    setSelectedProduct(null);

toast.success("Product updated successfully");
  } catch (error) {
    console.error(error);

    toast.error(
  error.response?.data?.message ||
  "Failed to update product"
);
  }
  finally {
  setIsUpdating(false);
}
};
  return (
    <section className="bg-stone-900 rounded-lg p-6 shadow-lg mt-8">

     {/* Desktop Table */}
<div className="hidden md:block overflow-x-auto">

  <table className="w-full text-left">

    <thead className="border-b border-stone-700 text-stone-400 text-sm">
      <tr>
        <th className="py-3">Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {products.map((product) => (
        <tr
          key={product._id}
          className="border-b border-stone-800 hover:bg-stone-800/40"
        >
          <td className="py-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded"
            />
          </td>

          <td>{product.name}</td>

          <td>
            ₦{product.price.toLocaleString()}
          </td>

          <td>
            {product.stock}
          </td>

          <td className="space-x-2">

            <button onClick={() => setSelectedProduct(product)} className="bg-blue-600 px-3 py-1 rounded text-sm">
              Edit
            </button>

            <button
  onClick={() => handleDelete(product._id)}
  disabled={deletingId === product._id}
  className="bg-red-600 px-3 py-1 rounded text-sm flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
>
  {deletingId === product._id ? (
    <>
      <Loader2 className="w-4 h-4 animate-spin" />
      Deleting...
    </>
  ) : (
    "Delete"
  )}
</button>

          </td>

        </tr>
      ))}
    </tbody>

  </table>

</div>


{/* Mobile Cards */}
<div className="md:hidden space-y-5">

  {products.map((product) => (

    <div
      key={product._id}
      className="bg-stone-900 rounded-lg p-4 border border-stone-800"
    >

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-4"
      />

      <h3 className="text-lg font-semibold">
        {product.name}
      </h3>

      <p className="text-amber-400 mt-2">
        ₦{product.price.toLocaleString()}
      </p>

      <p className="text-sm text-stone-400 mt-1">
        Stock: {product.stock}
      </p>


      <div className="flex gap-3 mt-4">

        <button onClick={() => setSelectedProduct(product)} className="flex-1 bg-blue-600 py-2 rounded">
          Edit
        </button>

      <button
  onClick={() => handleDelete(product._id)}
  disabled={deletingId === product._id}
  className="flex-1 bg-red-600 py-2 rounded flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
>
  {deletingId === product._id ? (
    <>
      <Loader2 className="w-4 h-4 animate-spin" />
      Deleting...
    </>
  ) : (
    "Delete"
  )}
</button>

      </div>


    </div>

  ))}

</div>
{selectedProduct && (
  <EditProductModal
    product={selectedProduct}
    closeModal={() => setSelectedProduct(null)}
    updateProduct={handleUpdate}
    isUpdating={isUpdating}
  />
)}
    </section>
  );
}

export default ProductTable;