import { createContext, ReactNode, useReducer } from "react";

export const AuthContext = createContext<unknown>(undefined);

// Define the state type
interface AuthState {
  user: any | null; // Replace `any` with the appropriate type if available
}

// Define the action types
interface LoginAction {
  type: "LOGIN";
  payload: any; // Replace `any` with the appropriate type if available
}

interface LogoutAction {
  type: "LOGOUT";
}

type AuthAction = LoginAction | LogoutAction;

// Define the reducer function
export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

interface AuthContextProviderProps {
  children: ReactNode;
}
export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
};
