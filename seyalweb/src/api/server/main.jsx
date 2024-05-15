import * as Axios from "axios";
import * as ReactQuery from "react-query";
import * as Requests from "./request-routes";
import * as Constants from "src/constants";

export const Main = ({ children }) => {
  const queryClient = new ReactQuery.QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  return (
    <ReactQuery.QueryClientProvider client={queryClient}>
      {children}
    </ReactQuery.QueryClientProvider>
  );
};

export const Client = Axios.default.create();

const formOptions = ["", "", ""];

const client = Axios.default.create({
  baseURL: `${Constants.API_CONFIG.baseURL}`,
});

export const Request = async (options, data, headers) => {
  const res = await client({
    ...Requests.Routes[options],
    headers: {
      "Content-Type": formOptions.indexOf(options) > 0
        ? "multipart/form-data"
        : 'application/json',
      // Authorization: "Bearer" + localStorage.getItem("Token") || "",
      ...headers,
    },
    data,
  });
  return res?.data;
};
export const useRequest = (queryOptions, options, data) => {
  return ReactQuery.useQuery(queryOptions, () => Request(options, data));
};
