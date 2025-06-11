import React, { createContext, useContext, useState, useEffect } from 'react';

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const fetchOrders = async () => {
    //   try {
    //     const res = await fetch('/api/orders');
    //     const data = await res.json();
    //     setOrders(data);
    //   } catch (error) {
    //     console.error('Error fetching orders:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchOrders();
    setOrders([
      {
        id: 'ORD1001',
        customerName: 'Alice Johnson',
        product: {
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
              country_name: "Israel",
              country_code: "IL",
              iso2: "IL",
              iso3: "ISR",
              phone_code: "972",
              created_at: "2023-06-24T13:13:46.348Z ",
              updated_at: "2023-06-24T13:14:42.000Z",
              deleted_at: null
            },
            {
              id: "106",
              country_name: "Israel",
              country_code: "IL",
              iso2: "IL",
              iso3: "ISR",
              phone_code: "972",
              created_at: "2023-06-24T13:13:46.348Z ",
              updated_at: "2023-06-24T13:14:42.000Z",
              deleted_at: null
            }
          ],
        },
        amount: "49.99",
        date: '2025-06-01',
        status: 'Completed',
      },
      {
        id: 'ORD1001',
        customerName: 'Alice Johnson',
        product: {
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
              country_name: "Israel",
              country_code: "IL",
              iso2: "IL",
              iso3: "ISR",
              phone_code: "972",
              created_at: "2023-06-24T13:13:46.348Z ",
              updated_at: "2023-06-24T13:14:42.000Z",
              deleted_at: null
            },
            {
              id: "106",
              country_name: "Israel",
              country_code: "IL",
              iso2: "IL",
              iso3: "ISR",
              phone_code: "972",
              created_at: "2023-06-24T13:13:46.348Z ",
              updated_at: "2023-06-24T13:14:42.000Z",
              deleted_at: null
            }
          ],
        },
        amount: "49.99",
        date: '2025-06-01',
        status: 'Completed',
      },
      {
        id: 'ORD1001',
        customerName: 'Alice Johnson',
        product: {
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
              country_name: "Israel",
              country_code: "IL",
              iso2: "IL",
              iso3: "ISR",
              phone_code: "972",
              created_at: "2023-06-24T13:13:46.348Z ",
              updated_at: "2023-06-24T13:14:42.000Z",
              deleted_at: null
            },
            {
              id: "106",
              country_name: "Israel",
              country_code: "IL",
              iso2: "IL",
              iso3: "ISR",
              phone_code: "972",
              created_at: "2023-06-24T13:13:46.348Z ",
              updated_at: "2023-06-24T13:14:42.000Z",
              deleted_at: null
            }
          ],
        },
        amount: "49.99",
        date: '2025-06-01',
        status: 'Completed',
      },
    ])


  }, []);

  async function addOrder(newOrder) {
    if (newOrder) {
      setOrders(prevOrders => [...prevOrders, newOrder])
    }
  }

  return (
    <OrdersContext.Provider value={{ orders, loading, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => useContext(OrdersContext);