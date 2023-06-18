export const customerData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Customer ${index + 1}`,
  }));
  
 export  const branchData = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Branch ${index + 1}`,
  }));
  
 export const latinAmericanCountries = [
    { name: "Argentina", currency: "ARS" },
    { name: "Bolivia", currency: "BOB" },
    { name: "Brazil", currency: "BRL" },
    { name: "Chile", currency: "CLP" },
    { name: "Colombia", currency: "COP" },
    { name: "Costa Rica", currency: "CRC" },
    { name: "Cuba", currency: "CUP" },
    { name: "Dominican Republic", currency: "DOP" },
    { name: "Ecuador", currency: "USD" },
    { name: "El Salvador", currency: "USD" },
    { name: "Guatemala", currency: "GTQ" },
    { name: "Honduras", currency: "HNL" },
    { name: "Mexico", currency: "MXN" },
    { name: "Nicaragua", currency: "NIO" },
    { name: "Panama", currency: "PAB" },
    { name: "Paraguay", currency: "PYG" },
    { name: "Peru", currency: "PEN" },
    { name: "Uruguay", currency: "UYU" },
    { name: "Venezuela", currency: "VES" },
  ];
  
 export const vendorData = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Vendor ${index + 1}`,
  }));
  
 export const supplierData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Supplier ${index + 1}`,
  }));
  
export  const productData = Array.from({ length: 1000 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: Math.floor(Math.random() * 100) + 1,
  }));
  