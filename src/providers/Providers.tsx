
import { Provider } from "react-redux";
import { useEffect } from "react";
import { store } from "../store/store";

interface Props {
  children: React.ReactNode;
}


export const Providers = ({ children }: Props) => {

  useEffect(() => {
  }, [])

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}