import React, { createContext, useContext,useEffect, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);

  
  const data = [
  {
    id: '1',
    name: 'Europe Data Plan',
    price: '$20',
    data: '5GB',
    validity: '15 Days',
    region: 'Europe',
    planType: 'Prepaid',
    countries: [
            {
                id: "106",
                country_name :  "Israel" ,
                country_code :  "IL" ,
                iso2 :  "IL" ,
                iso3 :  "ISR",
                phone_code : "972" ,
                created_at :  "2023-06-24T13:13:46.348Z ",
                updated_at :  "2023-06-24T13:14:42.000Z" ,
                deleted_at : null
            },
            {
                id: "106",
                country_name :  "Israel" ,
                country_code :  "IL" ,
                iso2 :  "IL" ,
                iso3 :  "ISR",
                phone_code : "972" ,
                created_at :  "2023-06-24T13:13:46.348Z ",
                updated_at :  "2023-06-24T13:14:42.000Z" ,
                deleted_at : null
            }
        ],
  },
  {
    id: '2',
    name: 'Asia Travel Plan',
    price: '$35',
    data: '10GB',
    validity: '30 Days',
    region: 'Asia',
    planType: 'Prepaid',
    countries: [
            {
                id: "106",
                country_name :  "Israel" ,
                country_code :  "IL" ,
                iso2 :  "IL" ,
                iso3 :  "ISR",
                phone_code : "972" ,
                created_at :  "2023-06-24T13:13:46.348Z ",
                updated_at :  "2023-06-24T13:14:42.000Z" ,
                deleted_at : null
            },
            {
                id: "106",
                country_name :  "Israel" ,
                country_code :  "IL" ,
                iso2 :  "IL" ,
                iso3 :  "ISR",
                phone_code : "972" ,
                created_at :  "2023-06-24T13:13:46.348Z ",
                updated_at :  "2023-06-24T13:14:42.000Z" ,
                deleted_at : null
            }
        ],
  },
  {
    id: '3',
    name: 'Global Unlimited Plan',
    price: '$80',
    data: 'Unlimited',
    validity: '60 Days',
    region: 'Global',
    planType: 'Postpaid',
    countries: [
            {
                id: "106",
                country_name :  "Israel" ,
                country_code :  "IL" ,
                iso2 :  "IL" ,
                iso3 :  "ISR",
                phone_code : "972" ,
                created_at :  "2023-06-24T13:13:46.348Z ",
                updated_at :  "2023-06-24T13:14:42.000Z" ,
                deleted_at : null
            },
            {
                id: "106",
                country_name :  "Israel" ,
                country_code :  "IL" ,
                iso2 :  "IL" ,
                iso3 :  "ISR",
                phone_code : "972" ,
                created_at :  "2023-06-24T13:13:46.348Z ",
                updated_at :  "2023-06-24T13:14:42.000Z" ,
                deleted_at : null
            }
        ],
  },
  {
    id: '4',
    name: 'Global Unlimited Plan',
    price: '$80',
    data: 'Unlimited',
    validity: '60 Days',
    region: 'Global',
    planType: 'Postpaid',
    countries: [
            {
                id: "106",
                country_name :  "Israel" ,
                country_code :  "IL" ,
                iso2 :  "IL" ,
                iso3 :  "ISR",
                phone_code : "972" ,
                created_at :  "2023-06-24T13:13:46.348Z ",
                updated_at :  "2023-06-24T13:14:42.000Z" ,
                deleted_at : null
            },
            {
                id: "106",
                country_name :  "Israel" ,
                country_code :  "IL" ,
                iso2 :  "IL" ,
                iso3 :  "ISR",
                phone_code : "972" ,
                created_at :  "2023-06-24T13:13:46.348Z ",
                updated_at :  "2023-06-24T13:14:42.000Z" ,
                deleted_at : null
            }
        ],
  },
  {
    id: '5',
    name: 'Global Unlimited Plan',
    price: '$80',
    data: 'Unlimited',
    validity: '60 Days',
    region: 'Global',
    planType: 'Postpaid',
    countries: [
            {
                id: "106",
                country_name :  "Israel" ,
                country_code :  "IL" ,
                iso2 :  "IL" ,
                iso3 :  "ISR",
                phone_code : "972" ,
                created_at :  "2023-06-24T13:13:46.348Z ",
                updated_at :  "2023-06-24T13:14:42.000Z" ,
                deleted_at : null
            },
            {
                id: "106",
                country_name :  "Israel" ,
                country_code :  "IL" ,
                iso2 :  "IL" ,
                iso3 :  "ISR",
                phone_code : "972" ,
                created_at :  "2023-06-24T13:13:46.348Z ",
                updated_at :  "2023-06-24T13:14:42.000Z" ,
                deleted_at : null
            }
        ],
  },
  {
    id: '6',
    name: 'Global Unlimited Plan',
    price: '$80',
    data: 'Unlimited',
    validity: '60 Days',
    region: 'Global',
    planType: 'Postpaid',
    countries: [
            {
                id: "106",
                country_name :  "Israel" ,
                country_code :  "IL" ,
                iso2 :  "IL" ,
                iso3 :  "ISR",
                phone_code : "972" ,
                created_at :  "2023-06-24T13:13:46.348Z ",
                updated_at :  "2023-06-24T13:14:42.000Z" ,
                deleted_at : null
            },
            {
                id: "106",
                country_name :  "Israel" ,
                country_code :  "IL" ,
                iso2 :  "IL" ,
                iso3 :  "ISR",
                phone_code : "972" ,
                created_at :  "2023-06-24T13:13:46.348Z ",
                updated_at :  "2023-06-24T13:14:42.000Z" ,
                deleted_at : null
            }
        ],
  },
  {
    id: '7',
    name: 'Global Unlimited Plan',
    price: '$80',
    data: 'Unlimited',
    validity: '60 Days',
    region: 'Global',
    planType: 'Postpaid',
    countries: [
            {
                id: "106",
                country_name :  "Israel" ,
                country_code :  "IL" ,
                iso2 :  "IL" ,
                iso3 :  "ISR",
                phone_code : "972" ,
                created_at :  "2023-06-24T13:13:46.348Z ",
                updated_at :  "2023-06-24T13:14:42.000Z" ,
                deleted_at : null
            },
            {
                id: "106",
                country_name :  "Israel" ,
                country_code :  "IL" ,
                iso2 :  "IL" ,
                iso3 :  "ISR",
                phone_code : "972" ,
                created_at :  "2023-06-24T13:13:46.348Z ",
                updated_at :  "2023-06-24T13:14:42.000Z" ,
                deleted_at : null
            }
        ],
  },
  {
    id: '8',
    name: 'Global Unlimited Plan',
    price: '$80',
    data: 'Unlimited',
    validity: '60 Days',
    region: 'Global',
    planType: 'Postpaid',
    countries: [
            {
                id: "106",
                country_name :  "Israel" ,
                country_code :  "IL" ,
                iso2 :  "IL" ,
                iso3 :  "ISR",
                phone_code : "972" ,
                created_at :  "2023-06-24T13:13:46.348Z ",
                updated_at :  "2023-06-24T13:14:42.000Z" ,
                deleted_at : null
            },
            {
                id: "106",
                country_name :  "Israel" ,
                country_code :  "IL" ,
                iso2 :  "IL" ,
                iso3 :  "ISR",
                phone_code : "972" ,
                created_at :  "2023-06-24T13:13:46.348Z ",
                updated_at :  "2023-06-24T13:14:42.000Z" ,
                deleted_at : null
            }
        ],
  },
  {
    id: '9',
    name: 'Global Unlimited Plan',
    price: '$80',
    data: 'Unlimited',
    validity: '60 Days',
    region: 'Global',
    planType: 'Postpaid',
    countries: [
            {
                id: "106",
                country_name :  "Israel" ,
                country_code :  "IL" ,
                iso2 :  "IL" ,
                iso3 :  "ISR",
                phone_code : "972" ,
                created_at :  "2023-06-24T13:13:46.348Z ",
                updated_at :  "2023-06-24T13:14:42.000Z" ,
                deleted_at : null
            },
            {
                id: "106",
                country_name :  "Israel" ,
                country_code :  "IL" ,
                iso2 :  "IL" ,
                iso3 :  "ISR",
                phone_code : "972" ,
                created_at :  "2023-06-24T13:13:46.348Z ",
                updated_at :  "2023-06-24T13:14:42.000Z" ,
                deleted_at : null
            }
        ],
  },
];
 

  useEffect(() => {
    // const fetchProducts = async () => {
    //   try {
    //     const res = await fetch('/api/products'); 
    //     const data = await res.json();
    //     setProducts(data);
    //   } catch (error) {
    //     console.error('Error loading products:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchProducts();
    setProducts(data);
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
