import { createContext, useCallback, useContext, useState } from "react";

export default function usePage() {
  const { page, setPage } = useContext(PageContext);
  return { page, setPage };
}

const initialValue = {
  page: "",
  setPage: (x: string) => {},
};
const PageContext = createContext(initialValue);

export function PageContextProvider({ children }: any) {
  const [page, setPage] = useState("feed");

  const handleChange = useCallback((x: string) => {
    setPage(x);
  }, []);

  return (
    <PageContext.Provider value={{ page, setPage: handleChange }}>
      {children}
    </PageContext.Provider>
  );
}
