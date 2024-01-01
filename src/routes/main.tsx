import * as Router from "react-router-dom";
import * as Pages from "src/pages";
import * as Layout from "src/layouts";

export const Main = () =>
  Router.useRoutes([
    {
      path: "/",
      element: <Router.Navigate to="home" />,
    },
    {
      path: "/*",
      element: <Layout.Main.Main />,
      children: [
        {
          path: "home",
          element: <Pages.Home.Main />,
        },
        {
          path: "aboutus",
          element: <Pages.Aboutus.Main />,
        },
        {
          path: "contact",
          element: <Pages.Contact.Main />,
        },
        {
          path: "news",
          element: <Pages.News.Main />,
        },
        {
          path: "projects",
          element: <Pages.Projects.Main />,
        },
        {
          path: "services",
          element: <Pages.Services.Main />,
        },
      ],
    },
  ]);
