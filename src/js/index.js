// EShop JavaScript - Complete functionality

// Global variables
let cart = [];
let products = [];
let currentFilter = "all";
let currentPage = 1;
let productsPerPage = 8;

// Sample product data
const sampleProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    description:
      "High-quality wireless headphones with noise cancellation and premium sound quality.",
    rating: 4.8,
    reviews: 245,
    stock: 15,
    features: [
      "Noise Cancellation",
      "30h Battery",
      "Wireless",
      "Premium Audio",
    ],
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    description:
      "Advanced fitness tracking with heart rate monitor and GPS functionality.",
    rating: 4.6,
    reviews: 189,
    stock: 23,
    features: ["Heart Rate Monitor", "GPS", "Water Resistant", "7-day Battery"],
  },
  {
    id: 3,
    name: "Designer Casual Jacket",
    price: 149.99,
    originalPrice: 199.99,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
    description:
      "Stylish and comfortable casual jacket perfect for any occasion.",
    rating: 4.5,
    reviews: 78,
    stock: 12,
    features: [
      "Premium Fabric",
      "Multiple Sizes",
      "Machine Washable",
      "Trendy Design",
    ],
  },
  {
    id: 4,
    name: "Luxury Handbag",
    price: 249.99,
    originalPrice: 349.99,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop",
    description:
      "Elegant handbag crafted from premium materials with spacious interior.",
    rating: 4.9,
    reviews: 156,
    stock: 8,
    features: [
      "Premium Leather",
      "Multiple Compartments",
      "Adjustable Strap",
      "Luxury Design",
    ],
  },
  {
    id: 5,
    name: "Modern Table Lamp",
    price: 89.99,
    originalPrice: 119.99,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    description:
      "Contemporary design table lamp that adds elegance to any room.",
    rating: 4.4,
    reviews: 92,
    stock: 18,
    features: [
      "LED Bulb Included",
      "Adjustable Brightness",
      "Modern Design",
      "Energy Efficient",
    ],
  },
  {
    id: 6,
    name: "Decorative Plant Pot",
    price: 34.99,
    originalPrice: 44.99,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop",
    description:
      "Beautiful ceramic plant pot perfect for indoor plants and home decoration.",
    rating: 4.3,
    reviews: 67,
    stock: 25,
    features: [
      "Ceramic Material",
      "Drainage Hole",
      "Multiple Sizes",
      "Decorative Design",
    ],
  },
  {
    id: 7,
    name: "Professional Camera",
    price: 899.99,
    originalPrice: 1199.99,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
    description:
      "High-end digital camera with advanced features for professional photography.",
    rating: 4.9,
    reviews: 234,
    stock: 6,
    features: [
      "4K Video",
      "Image Stabilization",
      "Professional Lens",
      "WiFi Connectivity",
    ],
  },
  {
    id: 8,
    name: "Comfortable Sneakers",
    price: 79.99,
    originalPrice: 99.99,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
    description:
      "Ultra-comfortable sneakers designed for all-day wear and various activities.",
    rating: 4.7,
    reviews: 145,
    stock: 30,
    features: [
      "Memory Foam",
      "Breathable Material",
      "Non-slip Sole",
      "Multiple Colors",
    ],
  },
  {
    id: 9,
    name: "Kitchen Appliance Set",
    price: 199.99,
    originalPrice: 279.99,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    description:
      "Complete kitchen appliance set including blender, mixer, and food processor.",
    rating: 4.6,
    reviews: 112,
    stock: 14,
    features: [
      "Multiple Appliances",
      "Stainless Steel",
      "Easy to Clean",
      "Space Saving",
    ],
  },
  {
    id: 10,
    name: "Wireless Speaker",
    price: 129.99,
    originalPrice: 169.99,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    description:
      "Portable wireless speaker with exceptional sound quality and long battery life.",
    rating: 4.5,
    reviews: 89,
    stock: 20,
    features: ["Bluetooth 5.0", "20h Battery", "Water Resistant", "Rich Bass"],
  },
  {
    id: 11,
    name: "Premium Sunglasses",
    price: 159.99,
    originalPrice: 199.99,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop",
    description:
      "Stylish sunglasses with UV protection and premium frame design.",
    rating: 4.4,
    reviews: 73,
    stock: 16,
    features: [
      "UV Protection",
      "Polarized Lenses",
      "Premium Frame",
      "Designer Style",
    ],
  },
  {
    id: 12,
    name: "Cozy Throw Blanket",
    price: 49.99,
    originalPrice: 69.99,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop",
    description:
      "Ultra-soft throw blanket perfect for cozy evenings and home comfort.",
    rating: 4.8,
    reviews: 198,
    stock: 35,
    features: [
      "Super Soft",
      "Machine Washable",
      "Multiple Colors",
      "Large Size",
    ],
  },
];

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  products = [...sampleProducts];
  initializeEventListeners();
  renderProducts();
  updateCartUI();
  loadCartFromStorage();
});

// Event listeners
function initializeEventListeners() {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Search functionality
  const searchBtn = document.getElementById("searchBtn");
  const searchModal = document.getElementById("searchModal");
  const closeSearch = document.getElementById("closeSearch");
  const searchInput = document.getElementById("searchInput");

  searchBtn.addEventListener("click", () => {
    searchModal.classList.remove("hidden");
    searchModal.classList.add("modal-enter");
    searchInput.focus();
  });

  closeSearch.addEventListener("click", closeSearchModal);
  searchModal.addEventListener("click", (e) => {
    if (e.target === searchModal) closeSearchModal();
  });

  searchInput.addEventListener("input", handleSearch);

  // Cart button
  const cartBtn = document.getElementById("cartBtn");
  cartBtn.addEventListener("click", toggleCartSection);

  // Load more button
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  loadMoreBtn.addEventListener("click", loadMoreProducts);

  // Escape key to close modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSearchModal();
      closeProductModal();
    }
  });
}

// Search functionality
function handleSearch() {
  const query = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();
  const searchResults = document.getElementById("searchResults");

  if (query.length < 2) {
    searchResults.innerHTML = "";
    return;
  }

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
  );

  if (filteredProducts.length === 0) {
    searchResults.innerHTML =
      '<p class="text-gray-500 text-center py-4">No products found</p>';
    return;
  }

  searchResults.innerHTML = filteredProducts
    .map(
      (product) => `
        <div class="search-result-item" onclick="selectSearchResult(${product.id})">
            <div class="flex items-center space-x-3">
                <img src="${product.image}" alt="${product.name}" class="w-12 h-12 object-cover rounded">
                <div>
                    <h4 class="font-medium text-gray-900">${product.name}</h4>
                    <p class="text-sm text-gray-500">$${product.price}</p>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

function selectSearchResult(productId) {
  closeSearchModal();
  showProductModal(productId);
}

function closeSearchModal() {
  const searchModal = document.getElementById("searchModal");
  searchModal.classList.add("hidden");
  document.getElementById("searchInput").value = "";
  document.getElementById("searchResults").innerHTML = "";
}

// Product filtering
function filterProducts(category) {
  currentFilter = category;
  currentPage = 1;

  // Update filter buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (
      btn.textContent.toLowerCase() === category ||
      (category === "all" && btn.textContent.toLowerCase() === "all")
    ) {
      btn.classList.add("active");
    }
  });

  renderProducts();
}

// Render products
function renderProducts() {
  const productsGrid = document.getElementById("productsGrid");
  let filteredProducts =
    currentFilter === "all"
      ? products
      : products.filter((product) => product.category === currentFilter);

  const startIndex = 0;
  const endIndex = currentPage * productsPerPage;
  const displayProducts = filteredProducts.slice(startIndex, endIndex);

  productsGrid.innerHTML = displayProducts
    .map((product) => createProductCard(product))
    .join("");

  // Update load more button
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (endIndex >= filteredProducts.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "block";
  }
}

// Create product card HTML
function createProductCard(product) {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;
  const stockClass =
    product.stock < 5
      ? "stock-low"
      : product.stock === 0
      ? "stock-out"
      : "stock-in";
  const stockText =
    product.stock === 0
      ? "Out of Stock"
      : product.stock < 5
      ? `Only ${product.stock} left`
      : "In Stock";

  return `
        <div class="product-card bg-white rounded-lg shadow-md overflow-hidden">
            <div class="relative">
                <img src="${product.image}" alt="${
    product.name
  }" class="w-full h-48 object-cover">
                ${
                  discount > 0
                    ? `<div class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">-${discount}%</div>`
                    : ""
                }
                <div class="product-overlay">
                    <button onclick="showProductModal(${
                      product.id
                    })" class="bg-white text-gray-900 px-4 py-2 rounded-lg mr-2 hover:bg-gray-100 transition-colors">
                        Quick View
                    </button>
                </div>
            </div>
            <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">${
                  product.name
                }</h3>
                <div class="flex items-center mb-2">
                    <div class="rating-stars text-sm mr-2">
                        ${"★".repeat(Math.floor(product.rating))}${"☆".repeat(
    5 - Math.floor(product.rating)
  )}
                    </div>
                    <span class="text-sm text-gray-500">(${
                      product.reviews
                    })</span>
                </div>
                <p class="text-gray-600 text-sm mb-3 line-clamp-2">${
                  product.description
                }</p>
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-2">
                        <span class="text-xl font-bold text-gray-900">$${
                          product.price
                        }</span>
                        ${
                          product.originalPrice
                            ? `<span class="price-original text-sm">$${product.originalPrice}</span>`
                            : ""
                        }
                    </div>
                    <span class="text-sm ${stockClass}">${stockText}</span>
                </div>
                <button 
                    onclick="addToCart(${product.id})" 
                    ${product.stock === 0 ? "disabled" : ""}
                    class="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
                    ${product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                </button>
            </div>
        </div>
    `;
}

// Load more products
function loadMoreProducts() {
  currentPage++;
  renderProducts();
}

// Product modal functionality
function showProductModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("productModal");
  const modalContent = document.getElementById("modalContent");

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;
  const stockClass =
    product.stock < 5
      ? "stock-low"
      : product.stock === 0
      ? "stock-out"
      : "stock-in";
  const stockText =
    product.stock === 0
      ? "Out of Stock"
      : product.stock < 5
      ? `Only ${product.stock} left`
      : "In Stock";

  modalContent.innerHTML = `
        <div class="relative p-6">
            <button onclick="closeProductModal()" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="relative">
                    <img src="${product.image}" alt="${
    product.name
  }" class="w-full h-64 md:h-80 object-cover rounded-lg">
                    ${
                      discount > 0
                        ? `<div class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">-${discount}%</div>`
                        : ""
                    }
                </div>
                
                <div>
                    <h2 class="text-2xl font-bold text-gray-900 mb-2">${
                      product.name
                    }</h2>
                    <div class="flex items-center mb-4">
                        <div class="rating-stars mr-2">
                            ${"★".repeat(
                              Math.floor(product.rating)
                            )}${"☆".repeat(5 - Math.floor(product.rating))}
                        </div>
                        <span class="text-gray-500">${product.rating} (${
    product.reviews
  } reviews)</span>
                    </div>
                    
                    <div class="flex items-center space-x-3 mb-4">
                        <span class="text-3xl font-bold text-gray-900">$${
                          product.price
                        }</span>
                        ${
                          product.originalPrice
                            ? `<span class="price-original text-xl">$${product.originalPrice}</span>`
                            : ""
                        }
                        ${
                          discount > 0
                            ? `<span class="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">Save ${discount}%</span>`
                            : ""
                        }
                    </div>
                    
                    <p class="text-gray-600 mb-4">${product.description}</p>
                    
                    <div class="mb-4">
                        <h4 class="font-semibold mb-2">Features:</h4>
                        <ul class="list-disc list-inside text-gray-600 space-y-1">
                            ${product.features
                              .map((feature) => `<li>${feature}</li>`)
                              .join("")}
                        </ul>
                    </div>
                    
                    <div class="flex items-center justify-between mb-6">
                        <span class="font-semibold">Stock Status:</span>
                        <span class="${stockClass} font-semibold">${stockText}</span>
                    </div>
                    
                    <div class="flex items-center space-x-4 mb-4">
                        <label class="font-semibold">Quantity:</label>
                        <div class="flex items-center space-x-2">
                            <button onclick="decreaseQuantity()" class="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded flex items-center justify-center">-</button>
                            <input type="number" id="modalQuantity" value="1" min="1" max="${
                              product.stock
                            }" class="quantity-input">
                            <button onclick="increaseQuantity(${
                              product.stock
                            })" class="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded flex items-center justify-center">+</button>
                        </div>
                    </div>
                    
                    <div class="flex space-x-4">
                        <button 
                            onclick="addToCartFromModal(${product.id})" 
                            ${product.stock === 0 ? "disabled" : ""}
                            class="flex-1 bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold">
                            ${
                              product.stock === 0
                                ? "Out of Stock"
                                : "Add to Cart"
                            }
                        </button>
                        <button class="bg-accent text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-semibold">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

  modal.classList.remove("hidden");
  modal.classList.add("modal-enter");
  modalContent.classList.add("modal-content-enter");
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  modal.classList.add("hidden");
  modal.classList.remove("modal-enter");
}

function increaseQuantity(maxStock) {
  const quantityInput = document.getElementById("modalQuantity");
  const currentValue = parseInt(quantityInput.value);
  if (currentValue < maxStock) {
    quantityInput.value = currentValue + 1;
  }
}

function decreaseQuantity() {
  const quantityInput = document.getElementById("modalQuantity");
  const currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

// Cart functionality
function addToCart(productId, quantity = 1) {
  const product = products.find((p) => p.id === productId);
  if (!product || product.stock === 0) return;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    const newQuantity = existingItem.quantity + quantity;
    if (newQuantity <= product.stock) {
      existingItem.quantity = newQuantity;
    } else {
      showToast(`Only ${product.stock} items available in stock`, "error");
      return;
    }
  } else {
    if (quantity <= product.stock) {
      cart.push({ ...product, quantity });
    } else {
      showToast(`Only ${product.stock} items available in stock`, "error");
      return;
    }
  }

  updateCartUI();
  saveCartToStorage();
  showToast(`${product.name} added to cart!`);

  // Add animation to cart button
  const cartBtn = document.getElementById("cartBtn");
  cartBtn.classList.add("cart-add-animation");
  setTimeout(() => cartBtn.classList.remove("cart-add-animation"), 500);
}

function addToCartFromModal(productId) {
  const quantity = parseInt(document.getElementById("modalQuantity").value);
  addToCart(productId, quantity);
  closeProductModal();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartUI();
  updateCartTable();
  saveCartToStorage();
  showToast("Item removed from cart", "info");
}

function updateCartQuantity(productId, newQuantity) {
  const item = cart.find((item) => item.id === productId);
  const product = products.find((p) => p.id === productId);

  if (item && product) {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else if (newQuantity <= product.stock) {
      item.quantity = newQuantity;
      updateCartUI();
      updateCartTable();
      saveCartToStorage();
    } else {
      showToast(`Only ${product.stock} items available in stock`, "error");
      // Reset to max available
      item.quantity = product.stock;
      updateCartTable();
    }
  }
}

function updateCartUI() {
  const cartCount = document.getElementById("cartCount");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  // Update cart total
  const cartTotal = document.getElementById("cartTotal");
  if (cartTotal) {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    cartTotal.textContent = total.toFixed(2);
  }
}

function toggleCartSection() {
  const cartSection = document.getElementById("cartSection");
  const isHidden = cartSection.classList.contains("hidden");

  if (isHidden) {
    cartSection.classList.remove("hidden");
    updateCartTable();
    cartSection.scrollIntoView({ behavior: "smooth" });
  } else {
    cartSection.classList.add("hidden");
  }
}

function updateCartTable() {
  const cartTableBody = document.getElementById("cartTableBody");

  if (cart.length === 0) {
    cartTableBody.innerHTML = `
            <tr>
                <td colspan="5" class="px-6 py-4 text-center text-gray-500">
                    Your cart is empty. <a href="#products" class="text-primary hover:underline">Continue shopping</a>
                </td>
            </tr>
        `;
    return;
  }

  cartTableBody.innerHTML = cart
    .map(
      (item) => `
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <img class="h-16 w-16 rounded-lg object-cover mr-4" src="${
                      item.image
                    }" alt="${item.name}">
                    <div>
                        <div class="text-sm font-medium text-gray-900">${
                          item.name
                        }</div>
                        <div class="text-sm text-gray-500">${
                          item.category
                        }</div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                $${item.price}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center space-x-2">
                    <button onclick="updateCartQuantity(${item.id}, ${
        item.quantity - 1
      })" class="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded flex items-center justify-center">-</button>
                    <input type="number" value="${
                      item.quantity
                    }" min="1" max="${
        item.stock
      }" onchange="updateCartQuantity(${
        item.id
      }, parseInt(this.value))" class="quantity-input">
                    <button onclick="updateCartQuantity(${item.id}, ${
        item.quantity + 1
      })" class="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded flex items-center justify-center">+</button>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                $${(item.price * item.quantity).toFixed(2)}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onclick="removeFromCart(${
                  item.id
                })" class="text-red-600 hover:text-red-900">Remove</button>
            </td>
        </tr>
    `
    )
    .join("");
}

function clearCart() {
  if (cart.length === 0) return;

  if (confirm("Are you sure you want to clear your cart?")) {
    cart = [];
    updateCartUI();
    updateCartTable();
    saveCartToStorage();
    showToast("Cart cleared", "info");
  }
}

function checkout() {
  if (cart.length === 0) {
    showToast("Your cart is empty", "error");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  alert(
    `Checkout functionality would be implemented here.\n\nOrder Summary:\nItems: ${
      cart.length
    }\nTotal: $${total.toFixed(2)}\n\nThank you for your purchase!`
  );

  // Clear cart after checkout
  cart = [];
  updateCartUI();
  updateCartTable();
  saveCartToStorage();

  document.getElementById("cartSection").classList.add("hidden");
  showToast("Order placed successfully!", "success");
}

// Storage functions
function saveCartToStorage() {
  localStorage.setItem("eshop_cart", JSON.stringify(cart));
}

function loadCartFromStorage() {
  const savedCart = localStorage.getItem("eshop_cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartUI();
  }
}

// Utility functions
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toastMessage");

  // Set message and color based on type
  toastMessage.textContent = message;
  const toastDiv = toast.querySelector("div");

  // Remove existing color classes
  toastDiv.classList.remove(
    "bg-green-500",
    "bg-red-500",
    "bg-blue-500",
    "bg-yellow-500"
  );

  // Add color based on type
  switch (type) {
    case "success":
      toastDiv.classList.add("bg-green-500");
      break;
    case "error":
      toastDiv.classList.add("bg-red-500");
      break;
    case "info":
      toastDiv.classList.add("bg-blue-500");
      break;
    case "warning":
      toastDiv.classList.add("bg-yellow-500");
      break;
    default:
      toastDiv.classList.add("bg-green-500");
  }

  toast.classList.remove("hidden");
  toast.classList.add("toast-enter");

  setTimeout(() => {
    toast.classList.add("toast-exit");
    setTimeout(() => {
      toast.classList.add("hidden");
      toast.classList.remove("toast-enter", "toast-exit");
    }, 300);
  }, 3000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Newsletter subscription
document
  .querySelector('button[class*="bg-accent"]')
  .addEventListener("click", function () {
    const emailInput = this.previousElementSibling;
    const email = emailInput.value.trim();

    if (email && isValidEmail(email)) {
      showToast("Thank you for subscribing to our newsletter!");
      emailInput.value = "";
    } else {
      showToast("Please enter a valid email address", "error");
    }
  });

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Initialize smooth scrolling
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}
