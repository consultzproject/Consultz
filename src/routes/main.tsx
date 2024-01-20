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
          path: "testimonials",
          element: <Pages.Aboutus.Main />,
        },
        {
          path: "contact",
          element: <Pages.Contact.Main />,
        },
        {
          path: "submitprofile",
          element: <Pages.News.Main />,
        },
        {
          path: "blog",
          element: <Pages.Projects.Main />,
        },
        {
          path: "services",
          element: <Pages.Services.Main />,
        },
      ],
    },
    {
      path: "blog/*",
      element: <Layout.Main.Main />,
      children: [
        {
          path: "blog1",
          element: <Pages.Projects.Components.Blog1 />,
        },
        {
          path: "blog2",
          element: <Pages.Projects.Components.Blog2 />,
        },
        {
          path: "blog3",
          element: <Pages.Projects.Components.Blog3 />,
        },
      ],
    },
  ]);
