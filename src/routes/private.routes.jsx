import { DashboardLayout } from "../layouts/dashboard.layout";
import { NotFound } from "../pages/404";
import { AnnonymizationResults } from "../pages/annonymization-results";
import { ConfigureAnnonymization } from "../pages/configure-annonymization";
import { Dashboard } from "../pages/dashboard";

export const privateRoutes = [
    {
    path: "/",
    name: "",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        name: "",
        element: <Dashboard />,
      },
      {
        path: "*",
        name: "",
        element: <NotFound />,
      },
      {
        path: "/",
        children: [
          {
            path: "configure-annonymization",
            element: <ConfigureAnnonymization />
          }
        ]
      },
      {
        path: "/",
        children: [
          {
            path: "annonymization-results",
            element: <AnnonymizationResults />
          }
        ]
      }
    ],
  },
]