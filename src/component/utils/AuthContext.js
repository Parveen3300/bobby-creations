// import { createContext, useContext, useReducer } from "react";

// export const AuthContext = createContext();
// export const useAuthContext = () => useContext(AuthContext);

// let authState = window.localStorage.getItem("auth")
//   ? JSON.parse(window.localStorage.getItem("auth"))
//   : {};

// let initialState = {
//   isAuthenticated: authState?.cognitoData?.idToken?.jwtToken ? true : false,
//   userAlias: authState ? authState?.userAlias : null,
//   token: authState ? authState?.cognitoData?.idToken?.jwtToken : null,
//   email: authState ? authState?.email : null,
//   name: authState ? authState?.name : null,
//   isKycVerified: authState ? authState?.isKycVerified : null,
//   userType: authState ? authState?.userType : null,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       localStorage.setItem("auth", JSON.stringify(action.payload));
//       return {
//         ...state,
//         isAuthenticated: action?.payload?.email
//           ? true
//           : localStorage.getItem("auth")
//           ? true
//           : false,
//         userAlias: action.payload.userAlias,
//         token: action.payload.token,
//         email: action.payload.email,
//         name: action.payload.name,
//         isKycVerified: action.payload.isKycVerified,
//         userType: action.payload.userType,
//         apiKeyEditStatus: false,
//       };
//     case "LOGOUT":
//       localStorage.clear();
//       return {
//         ...state,
//         isAuthenticated: false,
//         userAlias: null,
//         email: null,
//         name: null,
//         isKycVerified: null,
//         userType: null,
//         apiKeyEditStatus: null,
//       };
//     default:
//       return state;
//   }
// };

// export const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <AuthContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
