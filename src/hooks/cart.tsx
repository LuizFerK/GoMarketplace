import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Product): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  console.log(products);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await AsyncStorage.getItem('@GoMarketplace:products');
      // await AsyncStorage.clear();
      if (response) {
        setProducts(JSON.parse(response));
      }
    }
    loadProducts();
  }, []);

  const addToCart = useCallback(
    async (product: Product) => {
      const sameProduct = products.find(
        oldProduct => oldProduct.id === product.id,
      );

      if (sameProduct) {
        console.log('AUMENTAR A QUANTIDADE');
        return;
      }

      const newProduct = {
        id: product.id,
        title: product.title,
        image_url: product.image_url,
        price: product.price,
        quantity: 1,
      };

      setProducts([...products, newProduct]);

      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const increment = useCallback(
    async id => {
      const productIndex = products.findIndex(product => product.id === id);
      const newProduct = products.find(product => product.id === id);

      if (newProduct) {
        newProduct.quantity += 1;

        products.splice(productIndex, 1, newProduct);

        await AsyncStorage.setItem(
          '@GoMarketplace:products',
          JSON.stringify([...products]),
        );

        setProducts([...products]);
      }
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const productIndex = products.findIndex(product => product.id === id);
      const newProduct = products.find(product => product.id === id);

      if (newProduct && newProduct.quantity > 1) {
        newProduct.quantity -= 1;

        products.splice(productIndex, 1, newProduct);

        await AsyncStorage.setItem(
          '@GoMarketplace:products',
          JSON.stringify([...products]),
        );

        setProducts([...products]);
      }
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
