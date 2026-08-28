import { useEffect, useState } from "react";
import api from "../../../services/api";
function OrderTable() {
  const [orders, setOrders]= useState([]);
  const [updatingOrder, setUpdatingOrder]= useState(null);
  const [selectedOrder, setSelectedOrder]= useState(null);
  const [orderError, setOrderError]= useState("")
  
  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await api.get("/orders");
        console.log(response.data);
        setOrders(response.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    getOrders();
  }, []);
  const handleStatusChange = async (orderId, status) => {
  try {
    setOrderError("")
    setUpdatingOrder(orderId);

    const response = await api.patch(`/orders/${orderId}`, {
      status,
    });

    setOrders((currentOrders) =>
      currentOrders.map((order) =>
        order._id === orderId ? response.data.order : order
      )
    );
  } catch (error) {
  setOrderError(
    error.response?.data?.message || "Failed to update order."
  );
  } finally {
    setUpdatingOrder(null);
  }
};
  return (
    
  <div className="min-h-screen bg-stone-950 p-6">

    {/* PAGE HEADER */}
    <div className="mb-8">
      <p className="text-sm text-stone-500 uppercase tracking-wider">
        Dashboard / Orders
      </p>

      <h1 className="text-3xl font-bold text-stone-100 mt-2">
        Orders
      </h1>

      <p className="text-stone-400 mt-1">
        Manage and view all customer orders
      </p>
    </div>
{orderError && (
  <p className="text-red-400 mb-4">
    {orderError}
  </p>
)}

    {/* ORDERS GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {orders.map((order) => (

        <div
          key={order._id}
       className="bg-stone-900 rounded-2xl border border-stone-800 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
        >

          {/* CLICKABLE ORDER CARD */}
          <div
            onClick={() => setSelectedOrder(order)}
            className="p-5 cursor-pointer"
          >

            {/* CUSTOMER + STATUS */}
            <div className="flex justify-between items-start gap-4">

              <div>
                <p className="text-xs text-stone-500 uppercase tracking-wider">
                  Customer
                </p>

                <h2 className="text-lg font-semibold text-stone-100 mt-1">
                  {order.customerName}
                </h2>
              </div>

              {/* STATUS BADGE */}
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-stone-100 text-stone-700">
                {order.status}
              </span>

            </div>


            {/* PRICE */}
            <div className="mt-6">

              <p className="text-2xl font-bold text-stone-100 mt-1">
                Total
              </p>

              <p className="text-sm font-medium text-stone-200 mt-1">
                ₦{order.totalPrice.toLocaleString()}
              </p>

            </div>


            {/* PAYMENT */}
            <div className="mt-5 pt-4 border-t border-stone-100">

              <p className="text-sm text-stone-500">
                Payment
              </p>

             <p><span className={order.paymentStatus === "Paid"? "text-green-400":order.paymentStatus === "Failed" ? "text--red-400":"text-yellow-400"}> 
              {order.paymentStatus}</span></p>

            </div>

          </div>


          {/* STATUS UPDATE SECTION */}
          <div className="px-5 pb-5">

            <label className="block text-xs font-medium text-stone-500 mb-2">
              Update Status
            </label>

            <select
              value={order.status}
              disabled={updatingOrder === order._id}
              onChange={(e) =>
                handleStatusChange(order._id, e.target.value)
              }
             className="w-full border border-stone-700 rounded-lg px-3 py-2.5 bg-stone-800 text-sm text-stone-200 outline-none focus:ring-2 focus:ring-stone-600 disabled:bg-stone-900"
            >

              <option value="Pending">
                Pending
              </option>

              <option value="Processing">
                Processing
              </option>

              <option value="Shipped">
                Shipped
              </option>

              <option value="Delivered">
                Delivered
              </option>

            </select>

          </div>

        </div>

      ))}

    </div>


    {/* EMPTY STATE */}
    {orders.length === 0 && (
      <div className="bg-white rounded-2xl border border-stone-200 p-10 text-center">

        <p className="text-stone-500">
          No orders found.
        </p>

      </div>
    )}


    {/* ORDER DETAILS MODAL */}
    {selectedOrder && (

      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">

        <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">


          {/* MODAL HEADER */}
          <div className="flex justify-between items-center px-6 py-5 border-b border-stone-200">

            <div>

              <p className="text-xs text-stone-400 uppercase tracking-wider">
                Order Details
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-1">
                {selectedOrder.customerName}
              </h2>

            </div>


            <button
              type="button"
              onClick={() => setSelectedOrder(null)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-900 transition"
            >
              ✕
            </button>

          </div>


          {/* MODAL CONTENT */}
          <div className="p-6">


            {/* ORDER SUMMARY */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* CUSTOMER */}
              <div className="bg-stone-50 rounded-xl p-4">

                <p className="text-xs text-stone-400 uppercase tracking-wider">
                  Customer
                </p>

                <p className="font-semibold text-stone-900 mt-1">
                  {selectedOrder.customerName}
                </p>

              </div>


              {/* TOTAL */}
              <div className="bg-stone-50 rounded-xl p-4">

                <p className="text-xs text-stone-400 uppercase tracking-wider">
                  Total Amount
                </p>

                <p className="text-xl font-bold text-stone-900 mt-1">
                  ₦{selectedOrder.totalPrice.toLocaleString()}
                </p>

              </div>


              {/* EMAIL */}
              <div className="bg-stone-50 rounded-xl p-4">

                <p className="text-xs text-stone-400 uppercase tracking-wider">
                  Email
                </p>

                <p className="text-sm text-stone-800 mt-1 break-all">
                  {selectedOrder.customerEmail}
                </p>

              </div>


              {/* PHONE */}
              <div className="bg-stone-50 rounded-xl p-4">

                <p className="text-xs text-stone-400 uppercase tracking-wider">
                  Phone
                </p>

                <p className="text-sm text-stone-800 mt-1">
                  {selectedOrder.customerPhone}
                </p>

              </div>


              {/* PAYMENT */}
              <div className="bg-stone-50 rounded-xl p-4">

                <p className="text-xs text-stone-400 uppercase tracking-wider">
                  Payment
                </p>

                <p className="text-sm font-medium text-stone-800 mt-1">
                  {selectedOrder.paymentStatus}
                </p>

              </div>


              {/* STATUS */}
              <div className="bg-stone-50 rounded-xl p-4">

                <p className="text-xs text-stone-400 uppercase tracking-wider">
                  Status
                </p>

                <p className="text-sm font-medium text-stone-800 mt-1">
                  {selectedOrder.status}
                </p>

              </div>

            </div>


            {/* SHIPPING ADDRESS */}
            <div className="mt-6">

              <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">
                Shipping Address
              </p>

              <div className="bg-stone-50 rounded-xl p-4 text-sm text-stone-700">
                {selectedOrder.shippingAddress}
              </div>

            </div>


            {/* ORDER ID */}
            <div className="mt-6">

              <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">
                Order ID
              </p>

              <div className="bg-stone-50 rounded-xl p-4 text-xs text-stone-600 break-all">
                {selectedOrder._id}
              </div>

            </div>


            {/* PAYMENT REFERENCE */}
            <div className="mt-6">

              <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">
                Payment Reference
              </p>

              <div className="bg-stone-50 rounded-xl p-4 text-sm text-stone-700 break-all">
                {selectedOrder.paymentReference || "N/A"}
              </div>

            </div>


            {/* PRODUCTS */}
            <div className="mt-8">

              <div className="flex justify-between items-center mb-4">

                <h3 className="text-lg font-bold text-stone-900">
                  Products
                </h3>

                <span className="text-sm text-stone-500">
                  {selectedOrder.products.length} item(s)
                </span>

              </div>


              <div className="space-y-3">

                {selectedOrder.products.map((item) => (

                  <div
                    key={item._id}
                    className="flex items-center gap-4 border border-stone-200 rounded-xl p-4"
                  >

                    {/* PRODUCT IMAGE */}
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg bg-stone-100"
                    />


                    {/* PRODUCT INFORMATION */}
                    <div className="flex-1 min-w-0">

                      <h4 className="font-semibold text-stone-900">
                        {item.product.name}
                      </h4>

                      <p className="text-sm text-stone-500 mt-1">
                        Quantity: {item.quantity}
                      </p>

                      <p className="text-sm font-medium text-stone-800 mt-1">
                        ₦{item.product.price.toLocaleString()}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* MODAL FOOTER */}
          <div className="px-6 py-4 border-t border-stone-200 flex justify-end">

            <button
              type="button"
              onClick={() => setSelectedOrder(null)}
              className="px-5 py-2.5 bg-stone-900 text-white rounded-lg text-sm font-medium hover:bg-stone-800 transition"
            >
              Close
            </button>

          </div>

        </div>

      </div>

    )}

  </div>
);
}

export default OrderTable;