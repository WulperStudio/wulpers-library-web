import React, { useEffect, useReducer, useContext, createContext } from "react";

const initialState = {
  token: "",
  setHitoryId: "",
  edit: false,
  type: "landing",
  temp: {},
};

export const AppContext = createContext(null);
const { Provider } = AppContext;

const reducer = (state: any, action: any) => ({ ...state, ...action });

export const TinaContextProvider = ({ children }: any) => {
  const [state, setState] = useReducer(reducer, initialState);

  useEffect(() => {}, []);
  const values = React.useMemo(() => [state, setState], [state]);
  //@ts-ignore
  return <Provider value={values}>{children}</Provider>;
};

function useTinaContext() {
  return useContext(AppContext);
}

export default useTinaContext;
