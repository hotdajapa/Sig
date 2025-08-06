// Product Gallery
const images = [
  "https://entregarapidinho.com.br/cdn/shop/files/AnyConv.com__5_8.webp?v=1743911915&width=800",
  "https://entregarapidinho.com.br/cdn/shop/files/AnyConv.com__5_8.webp?v=1743911915&width=800",
  "https://entregarapidinho.com.br/cdn/shop/files/AnyConv.com__3_7.webp?v=1743911915&width=800",
  "https://entregarapidinho.com.br/cdn/shop/files/AnyConv.com__4_8.webp?v=1743911915&width=800",
  "https://entregarapidinho.com.br/cdn/shop/files/glicomax_3.webp?v=1743911909&width=800",
]

let currentImageIndex = 0

// Initialize gallery
document.addEventListener("DOMContentLoaded", () => {
  initializeGallery()
  initializeQuantitySelector()
  initializeFAQ()
  initializeMobileMenu()
})

function initializeGallery() {
  const mainImage = document.getElementById("mainImage")
  const thumbnails = document.querySelectorAll(".thumbnail")
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")

  // Thumbnail click handlers
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      currentImageIndex = index
      updateMainImage()
      updateActiveThumbnail()
    })
  })

  // Navigation button handlers
  prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length
    updateMainImage()
    updateActiveThumbnail()
  })

  nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length
    updateMainImage()
    updateActiveThumbnail()
  })

  function updateMainImage() {
    mainImage.src = images[currentImageIndex]
  }

  function updateActiveThumbnail() {
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.classList.toggle("active", index === currentImageIndex)
    })
  }
}

function initializeQuantitySelector() {
  const quantityInput = document.getElementById("quantity")
  const minusBtn = document.getElementById("qtyMinus")
  const plusBtn = document.getElementById("qtyPlus")

  minusBtn.addEventListener("click", () => {
    const currentValue = Number.parseInt(quantityInput.value)
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1
    }
  })

  plusBtn.addEventListener("click", () => {
    const currentValue = Number.parseInt(quantityInput.value)
    quantityInput.value = currentValue + 1
  })

  quantityInput.addEventListener("change", () => {
    const value = Number.parseInt(quantityInput.value)
    if (value < 1 || isNaN(value)) {
      quantityInput.value = 1
    }
  })
}

function initializeFAQ() {
  const faqQuestions = document.querySelectorAll(".faq-question")

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement
      const isActive = faqItem.classList.contains("active")

      // Close all FAQ items
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active")
      })

      // Open clicked item if it wasn't active
      if (!isActive) {
        faqItem.classList.add("active")
      }
    })
  })
}

function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mainNav = document.getElementById("mainNav")

  mobileMenuBtn.addEventListener("click", () => {
    mainNav.style.display = mainNav.style.display === "block" ? "none" : "block"
  })
// Obtém o botão flutuante
const floatingBtn = document.getElementById("floatingBtn");

// Função para redirecionar para o checkout
const redirectToCheckout = () => {
    window.location.href = "https://pay.gemeospremiacao.online/1VOvGV4l9MX3D62";
};

// Adiciona o evento de clique no botão flutuante para redirecionamento
floatingBtn.addEventListener("click", redirectToCheckout);

// Função para mostrar o botão flutuante quando o usuário rolar a página
window.addEventListener("scroll", function() {
    // Verifique a posição da rolagem e a seção de descrição
    const descriptionSection = document.querySelector(".product-description");  // A seção da descrição do produto
    const rect = descriptionSection.getBoundingClientRect();
    
    // Se a seção de descrição estiver visível na tela, mostre o botão flutuante
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        floatingBtn.classList.add("show");  // Adiciona a animação de pulo e torna o botão visível
    } else {
        floatingBtn.classList.remove("show");  // Remove a animação de pulo e torna o botão invisível
    }
});




  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mainNav.contains(e.target)) {
      mainNav.style.display = "none"
    }
  })
}

// Buy button functionality
document.getElementById("buyBtn").addEventListener("click", () => {
  const quantity = document.getElementById("quantity").value;

  // Redireciona diretamente para o checkout
  window.location.href = "https://pay.gemeospremiacao.online/1VOvGV4l9MX3D62";

  // Caso queira adicionar uma confirmação antes de redirecionar:
  // alert(`Produto adicionado ao carrinho!\nQuantidade: ${quantity}\nRedirecionando para o checkout...`);
});


// Helpful button functionality
document.querySelectorAll(".helpful-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const currentText = this.textContent
    const match = currentText.match(/$$(\d+)$$/)
    if (match) {
      const currentCount = Number.parseInt(match[1])
      const newCount = currentCount + 1
      this.innerHTML = this.innerHTML.replace(/$$\d+$$/, `(${newCount})`)
      this.style.color = "#059669"
      this.disabled = true
    }
  })
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add to cart animation
function addToCartAnimation() {
  const cartBtn = document.querySelector(".cart-btn")
  const cartCount = document.querySelector(".cart-count")

  cartBtn.style.transform = "scale(1.2)"
  cartCount.style.background = "#059669"

  setTimeout(() => {
    cartBtn.style.transform = "scale(1)"
    cartCount.style.background = "#ef4444"
  }, 200)
}

// Update cart count
function updateCartCount() {
  const cartCount = document.querySelector(".cart-count")
  const currentCount = Number.parseInt(cartCount.textContent)
  const quantity = Number.parseInt(document.getElementById("quantity").value)
  cartCount.textContent = currentCount + quantity
  addToCartAnimation()
}

// Enhanced buy button with cart update
document.getElementById("buyBtn").addEventListener("click", function () {
  updateCartCount()

  // Show success message
  const originalText = this.textContent
  this.textContent = "ADICIONADO!"
  this.style.background = "#059669"

  setTimeout(() => {
    this.textContent = originalText
    this.style.background = "#059669"
  }, 2000)
})
