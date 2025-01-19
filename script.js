document.querySelectorAll('.shop-menu, .learn-menu').forEach(menu => {
  menu.addEventListener('click', function () {
    const dropdown = this.querySelector('.dropdown')
    const arrow = this.querySelector('.arrow-down-svg')
    if (!dropdown || !arrow) return
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block'
    arrow.style.transform = arrow.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)'
  })
})

const productData = {
  "raspberry-lychee": {
    name: "RASPBERRY LYCHEE",
    title_below_text: {
      cans: "12 CANS",
      description: "PREBIOTIC + PROBIOTIC SPARKLING DRINK"
    },
    reviews: 80,
    description: "Jammy raspberry puree, juicy lychees, and fresh brewed honeysuckle flowers reminiscent of your favorite gummy treats.",
    mainImage: "https://drinkwildwonder.com/cdn/shop/files/Banana_1_540x.png?v=1721349284",
    mainVideo: "//drinkwildwonder.com/cdn/shop/videos/c/vp/7e29201ed81643a39b02bb272d01d24c/7e29201ed81643a39b02bb272d01d24c.m3u8?v=0",
    thumbnails: [
      { url: "https://drinkwildwonder.com/cdn/shop/files/Banana_1_120x.png?v=1721349284", type: 'image' },
      { url: "https://drinkwildwonder.com/cdn/shop/files/Banana_5_540x.png?v=1721406234", type: 'image' },
      { url: "https://i.ibb.co/yYtN585/image-6.png", type: 'video' }
    ],
    price: {
      oneTime: 42.00,
      subscribe: 35.70
    },
    flavors: [
      { name: "RASPBERRY LYCHEE", image: "https://drinkwildwonder.com/cdn/shop/files/bananapost.png?v=1722504758&width=150" },
      { name: "LEMON LIME", image: "https://drinkwildwonder.com/cdn/shop/files/Raspberry_Lychee_Can_a370b567-d14c-46b6-8def-d21770c21a88.png?v=1709410717&width=150" },
      { name: "GINGER PINEAPPLE", image: "https://drinkwildwonder.com/cdn/shop/files/Strawberry_Passion_Can.png?v=1708981486&width=150" },
      { name: "WATERMELON SEA SALT", image: "https://drinkwildwonder.com/cdn/shop/files/Guava_Rose_Can_45621980-3771-4314-b45f-d7fedce56568.png?v=1708981389&width=150" },
      { name: "GUAVA ROSE", image: "https://drinkwildwonder.com/cdn/shop/files/Guava_Rose_Can_45621980-3771-4314-b45f-d7fedce56568.png?v=1708981389&width=150" },
      { name: "MANGO PASSION FRUIT", image: "https://drinkwildwonder.com/cdn/shop/files/Pineapple_Paradise_Front_071624.png?v=1722474157&width=150" },
      { name: "PEACH ALMOND", image: "https://drinkwildwonder.com/cdn/shop/files/Peach_Ginger_Can_18d3f461-fe70-458b-9cc5-7612e51689d7.png?v=1708981427&width=150" },
      { name: "MIXED PACKS", image: "https://drinkwildwonder.com/cdn/shop/files/SharkTankBundle_new_c8248e2b-c8af-4b7b-85ad-fa667eca2d6d.png?v=1724416171&width=150" },
      { name: "BERRY COLLAGEN", image: "https://drinkwildwonder.com/cdn/shop/files/Variety_6Flavors_33e83619-48e5-4376-bef2-df7bf390a806.png?v=1724415931&width=150" },
      { name: "GRAPEFRUIT ELDERFLOWER", image: "https://drinkwildwonder.com/cdn/shop/files/Variety_6Flavors_33e83619-48e5-4376-bef2-df7bf390a806.png?v=1724415931&width=150" }
    ]
  },
  "lemon-lime": {
    name: "LEMON LIME",
    title_below_text: {
      cans: "12 CANS",
      description: "PREBIOTIC + PROBIOTIC SPARKLING DRINK"
    },
    reviews: 120,
    description: "Zesty lemon, fragrant lime, and hints of mint reminiscent of your favorite mojito mocktail.",
    mainImage: "https://i.ibb.co/mThC45p/image-1.png",
    mainVideo: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnails: [
      { url: "https://i.ibb.co/t2zH26f/image-7.png", type: 'image' },
      { url: "https://i.ibb.co/4201bW6/image-5.png", type: 'image' },
      { url: "https://i.ibb.co/yYtN585/image-6.png", type: 'video' }
    ],
    price: {
      oneTime: 40.00,
      subscribe: 34.00
    },
    flavors: [
      { name: "RASPBERRY LYCHEE", image: "https://i.ibb.co/j8mC24Z/image-4.png" },
      { name: "LEMON LIME", image: "https://i.ibb.co/mThC45p/image-1.png" },
      { name: "GINGER PINEAPPLE", image: "https://i.ibb.co/qCW2hS7/image.png" },
      { name: "WATERMELON SEA SALT", image: "https://i.ibb.co/Lz3WcQ7/image-3.png" },
      { name: "GUAVA ROSE", image: "https://i.ibb.co/tB02Y17/image-2.png" },
      { name: "MANGO PASSION FRUIT", image: "https://i.ibb.co/q0b6Y1m/image-8.png" },
      { name: "PEACH ALMOND", image: "https://i.ibb.co/q0b6Y1m/image-9.png" },
      { name: "MIXED PACKS", image: "https://i.ibb.co/Hh97WwM/image-10.png" },
      { name: "BERRY COLLAGEN", image: "https://i.ibb.co/F3t5Q90/image-11.png" },
      { name: "GRAPEFRUIT ELDERFLOWER", image: "https://i.ibb.co/0y81628/image-12.png" }
    ]
  }
}

const mainImage = document.querySelector('.main-image')
const mainVideo = document.querySelector('.main-video')
const thumbnailContainer = document.querySelector('.thumbnail-container')
const productTitle = document.querySelector('.product-title')
const productTitleBelow = document.querySelector('.product_title_below_text h6')
const productReview = document.querySelector('.product-review .star-icons')
const reviewCount = document.querySelector('.product-review .review-count')
const productDescription = document.querySelector('.product-description')
const chooseFlavorHeading = document.querySelector('.choose-flavor-heading')
const flavorOptions = document.querySelector('.flavor-options')
const oneTimeAmount = document.querySelector('.purchase-option--onetime .product-amount')
const subscribeAmount = document.querySelector('.product-amount')
const giftSection = document.querySelector('.gift-section')
const giftForm = document.querySelector('.gift-section__form')
const giftCheckbox = document.querySelector('.gift-section__checkbox-input')

function updateProduct(productKey) {
  const product = productData[productKey]
  if (!product) return
  productTitle.textContent = product.name
  productTitleBelow.innerHTML = `
    <span class="font-weight-600">${product.title_below_text.cans}</span>
    |
    <span class="font-weight-300">${product.title_below_text.description}</span>
  `
  chooseFlavorHeading.textContent = `CHOOSE YOUR FLAVOR: ${product.name}`
  productDescription.textContent = product.description
  mainImage.src = product.mainImage
  mainVideo.src = product.mainVideo
  mainVideo.style.display = "none"
  mainImage.style.display = "block"
  let starIcons = ''
  for (let i = 0; i < 5; i++) {
    starIcons += '⭐'
  }
  productReview.textContent = starIcons
  reviewCount.textContent = `${product.reviews} REVIEWS`
  oneTimeAmount.textContent = `$${product.price.oneTime.toFixed(2)}`
  subscribeAmount.textContent = `$${product.price.subscribe.toFixed(2)}`
  product.thumbnails.forEach((thumb, index) => {
    const thumbEl = document.querySelector(`.thumbnail[data-index="${index}"]`)
    if (!thumbEl) return
    const img = thumbEl.querySelector('.thumbnail-image')
    if (img) img.src = thumb.url
    const videoOverlay = thumbEl.querySelector('.video-overlay')
    if (thumb.type === "video") {
      thumbEl.setAttribute("data-type", "video")
      if (videoOverlay) videoOverlay.style.display = 'flex'
    } else {
      thumbEl.setAttribute("data-type", "image")
      if (videoOverlay) videoOverlay.style.display = 'none'
    }
  })
  flavorOptions.innerHTML = ''
  product.flavors.forEach(flavor => {
    const img = document.createElement('img')
    img.src = flavor.image
    img.alt = flavor.name
    img.addEventListener('click', () => {
      const key = flavor.name.toLowerCase().replace(/ /g, '-')
      updateProduct(key)
    })
    flavorOptions.appendChild(img)
  })
}

thumbnailContainer.addEventListener('click', function(e) {
  const clickedThumbnail = e.target.closest('.thumbnail')
  if (!clickedThumbnail) return
  const index = clickedThumbnail.getAttribute("data-index")
  const type = clickedThumbnail.getAttribute("data-type")
  const flavorName = chooseFlavorHeading.textContent.split(': ')[1].toLowerCase().replace(/ /g, '-')
  const product = productData[flavorName]
  if (!product) return
  if (type === 'video') {
    mainVideo.style.display = "block"
    mainImage.style.display = 'none'
    mainVideo.play()
  } else {
    mainImage.src = product.thumbnails[index].url
    mainImage.style.display = 'block'
    mainVideo.style.display = 'none'
    mainVideo.pause()
  }
})

document.querySelectorAll('.quantity-btn').forEach(button => {
  button.addEventListener('click', function() {
    const input = this.closest('.quantity-add-cart').querySelector('.quantity-input')
    let current = parseInt(input.value, 10)
    if (this.classList.contains('minus') && current > 1) {
      current--
    } else if (this.classList.contains('plus')) {
      current++
    }
    input.value = current
    input.setAttribute("data-quantity", current)
  })
})

giftCheckbox.addEventListener('change', function() {
  if (this.checked) {
    giftSection.classList.add('active')
  } else {
    giftSection.classList.remove('active')
  }
})

const radioButtons = document.querySelectorAll('input[name="purchase-type"]')
radioButtons.forEach(radio => {
  radio.addEventListener('change', function() {
    document.querySelectorAll('.purchase-option, .subscribe-option').forEach(el => {
      el.classList.remove('purchase-option--active')
    })
    const parentSubscribe = this.closest('.subscribe-option')
    if (parentSubscribe) {
      parentSubscribe.classList.add('purchase-option--active')
    } else {
      const parentOption = this.closest('.purchase-option')
      if (parentOption) {
        parentOption.classList.add('purchase-option--active')
      }
    }
  })
})

function showContent(tabId) {
  const buttons = document.querySelectorAll('.tab-button')
  const tabContainer = document.querySelector('.tab-container')
  const contents = document.querySelectorAll('.tab-content')
  buttons.forEach(btn => btn.classList.remove('active'))
  contents.forEach(c => c.classList.add('hidden'))
  const activeButton = document.querySelector(`.tab-button[onclick="showContent('${tabId}')"]`)
  const activeContent = document.getElementById(tabId)
  if (tabId === 'benefits') {
    tabContainer.style.backgroundColor = '#A6D8F7'
  } else if (tabId === 'ingredients') {
    tabContainer.style.backgroundColor = '#A8DE78'
  } else if (tabId === 'nutrition') {
    tabContainer.style.backgroundColor = '#FAE076'
  }
  if (activeButton) activeButton.classList.add('active')
  if (activeContent) activeContent.classList.remove('hidden')
}

showContent('benefits')
updateProduct("raspberry-lychee")

const desktopCarousel = document.getElementById('desktopCarousel')
const desktopItems = desktopCarousel.querySelectorAll('.product-item')
let desktopScrollPosition = 0
const desktopItemWidth = desktopItems[0].offsetWidth
const desktopVisibleItems = 4

function scrollDesktop(direction) {
  desktopScrollPosition += direction * desktopItemWidth * desktopVisibleItems
  if (desktopScrollPosition < 0) {
    desktopScrollPosition = 0
  } else if (desktopScrollPosition > desktopItemWidth * (desktopItems.length - desktopVisibleItems)) {
    desktopScrollPosition = desktopItemWidth * (desktopItems.length - desktopVisibleItems)
  }
  desktopCarousel.scrollTo({ left: desktopScrollPosition, behavior: 'smooth' })
}

const mobileCarousel = document.getElementById('mobileCarousel')
const mobileItems = mobileCarousel.querySelectorAll('.product-item')
const mobileIndicatorsContainer = document.getElementById('mobileIndicators')

for (let i = 0; i < mobileItems.length; i++) {
  const indicator = document.createElement('div')
  indicator.classList.add('indicator')
  indicator.addEventListener('click', () => {
    mobileCarousel.scrollTo({
      left: mobileItems[i].offsetWidth * i,
      behavior: 'smooth'
    })
    updateMobileIndicators(i)
  })
  mobileIndicatorsContainer.appendChild(indicator)
}

function updateMobileIndicators(selectedIndex) {
  const indicators = mobileIndicatorsContainer.querySelectorAll('.indicator')
  indicators.forEach((indicator, index) => {
    indicator.classList.remove('active')
    if (index === selectedIndex) {
      indicator.classList.add('active')
    }
  })
}

function scrollMobile(direction) {
  const scrollAmount = mobileCarousel.offsetWidth * direction
  mobileCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' })
}

mobileCarousel.addEventListener('scroll', () => {
  const scrollPosition = mobileCarousel.scrollLeft
  const itemWidth = mobileCarousel.offsetWidth
  const currentItemIndex = Math.round(scrollPosition / itemWidth)
  updateMobileIndicators(currentItemIndex)
})

updateMobileIndicators(0)
