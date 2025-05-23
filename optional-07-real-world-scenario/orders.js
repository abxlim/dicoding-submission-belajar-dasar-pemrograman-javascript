// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel untuk menampung data orders
const orders = [];

// Fungsi menambah order baru
function addOrder(customerName, items) {
  // Hitung total harga dari items
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  const order = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: "Menunggu",
  };

  orders.push(order);
}

// Fungsi update status order berdasarkan id
function updateOrderStatus(orderId, status) {
  const order = orders.find((o) => o.id === orderId);
  if (order) {
    order.status = status;
  }
}

// Fungsi hitung total revenue dari pesanan yang sudah selesai
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === "Selesai")
    .reduce((total, order) => total + order.totalPrice, 0);
}

// Fungsi menghapus order berdasarkan id
function deleteOrder(id) {
  const index = orders.findIndex((o) => o.id === id);
  if (index !== -1) {
    orders.splice(index, 1);
  }
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
