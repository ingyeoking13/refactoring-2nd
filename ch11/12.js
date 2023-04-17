//FROM 
if (data) 
    return new ShippingRules(data);
else
    return -23

// TO
if (data)
    return new ShippingRules(data);
else
    throw new OrderProcessingError(-23);