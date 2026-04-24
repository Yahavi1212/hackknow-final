import React, { createContext, useContext, useReducer } from "react";
import type { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  wishlist: string[];
  isCartOpen: boolean;
  isSidebarOpen: boolean;
  searchQuery: string;
  selectedCategory: string | null;
}

type StoreAction =
  | { type: "ADD_TO_CART"; product: Product }
  | { type: "REMOVE_FROM_CART"; productId: string }
  | { type: "UPDATE_QUANTITY"; productId: string; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART"; open?: boolean }
  | { type: "TOGGLE_SIDEBAR"; open?: boolean }
  | { type: "TOGGLE_WISHLIST"; productId: string }
  | { type: "SET_SEARCH"; query: string }
  | { type: "SET_CATEGORY"; category: string | null };

const initialState: StoreState = {
  cart: [],
  wishlist: [],
  isCartOpen: false,
  isSidebarOpen: false,
  searchQuery: "",
  selectedCategory: null,
};

function storeReducer(state: StoreState, action: StoreAction): StoreState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cart.find(
        (item) => item.product.id === action.product.id
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          isCartOpen: true,
        };
      }
      return {
        ...state,
        cart: [...state.cart, { product: action.product, quantity: 1 }],
        isCartOpen: true,
      };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.productId),
      };
    case "UPDATE_QUANTITY":
      if (action.quantity <= 0) {
        return {
          ...state,
          cart: state.cart.filter(
            (item) => item.product.id !== action.productId
          ),
        };
      }
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.productId
            ? { ...item, quantity: action.quantity }
            : item
        ),
      };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "TOGGLE_CART":
      return {
        ...state,
        isCartOpen: action.open ?? !state.isCartOpen,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: action.open ?? !state.isSidebarOpen,
      };
    case "TOGGLE_WISHLIST": {
      const isInWishlist = state.wishlist.includes(action.productId);
      return {
        ...state,
        wishlist: isInWishlist
          ? state.wishlist.filter((id) => id !== action.productId)
          : [...state.wishlist, action.productId],
      };
    }
    case "SET_SEARCH":
      return { ...state, searchQuery: action.query };
    case "SET_CATEGORY":
      return { ...state, selectedCategory: action.category };
    default:
      return state;
  }
}

interface StoreContextType {
  state: StoreState;
  dispatch: React.Dispatch<StoreAction>;
  cartTotal: number;
  cartCount: number;
}

const StoreContext = createContext<StoreContextType | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const cartTotal = state.cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const cartCount = state.cart.reduce(
    (count, item) => count + item.quantity,
    0
  );

  return (
    <StoreContext.Provider value={{ state, dispatch, cartTotal, cartCount }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
