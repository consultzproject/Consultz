import * as ReactQuery from "react-query";

const queryClient = new ReactQuery.QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export const Provider = ({ children }) => {
  return (
    <ReactQuery.QueryClientProvider client={queryClient}>
      {children}
    </ReactQuery.QueryClientProvider>
  );
};
