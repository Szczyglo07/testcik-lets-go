import { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  eventId: string;
  eventTitle: string;
  ticketTypeId: string;
  ticketTypeName: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity: number) => void;
  removeFromCart: (eventId: string, ticketTypeId: string) => void;
  updateQuantity: (eventId: string, ticketTypeId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>, quantity: number) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.eventId === item.eventId && i.ticketTypeId === item.ticketTypeId
      );

      if (existingItem) {
        return prevItems.map((i) =>
          i.eventId === item.eventId && i.ticketTypeId === item.ticketTypeId
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }

      return [...prevItems, { ...item, quantity }];
    });
  };

  const removeFromCart = (eventId: string, ticketTypeId: string) => {
    setItems((prevItems) =>
      prevItems.filter((i) => !(i.eventId === eventId && i.ticketTypeId === ticketTypeId))
    );
  };

  const updateQuantity = (eventId: string, ticketTypeId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(eventId, ticketTypeId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((i) =>
        i.eventId === eventId && i.ticketTypeId === ticketTypeId
          ? { ...i, quantity }
          : i
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, getTotal, getItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
