// 단계 쪼개기 
function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount =
      Math.max(quantity - product.discountThreshold, 0) *
      product.basePrice *
      product.discountRate;

    const shippingPerCase = (basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePercase
    const shippingCost = quantity * shippingPerCase;
    const price =basePrice - discount + shippingCost;
    return price;
}

// step 1 배송비 추출
function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  const price = applyShipping(basePrice, shippingMethod, quantity, discount);
  return price;
}

function applyShipping(basePrice, shippingMethod, quantity, discount) {
  const shippingPerCase = (basePrice > shippingMethod.discountThreshold) ? 
        shippingMethod.discountedFee : shippingMethod.feePercase
  const shippingCost = quantity * shippingPerCase;
  const price =basePrice - discount + shippingCost;
  return price
}

// step 2 중간데이터 구조
function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  const priceData = {basePrice, quantity, discount};
  const price = applyShipping(priceData, shippingMethod);
  return price;
}

function applyShipping(priceData, shippingMethod){
  const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) ? 
        shippingMethod.discountedFee : shippingMethod.feePercase
  const shippingCost = priceData.quantity * shippingPerCase;
  const price = priceData.basePrice - priceData.discount + shippingCost;
  return price
}

// step 3 첫 단계도 함수로 추출
function priceOrder(product, quantity, shippingMethod) {
  const priceData = calculatePricingData(product, quantity)
  return applyShipping(priceData, shippingMethod);
}

function calculatePricingData(product, quantity) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  return {basePrice, quantity: product.quantity, discount};
}

function applyShipping(priceData, shippingMethod){
  const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) ? 
        shippingMethod.discountedFee : shippingMethod.feePercase
  const shippingCost = priceData.quantity * shippingPerCase;
  const price = priceData.basePrice - priceData.discount + shippingCost;
  return price
}