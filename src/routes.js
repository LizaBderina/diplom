// src/routes.js
import React from "react";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import NewsPage from "./pages/NewsPage";
import ArticlePage from "./pages/ArticlePage";
import RenovationPage from "./pages/RenovationPage";
import EquipmentPage from "./pages/EquipmentPage";
import CollaborationPage from "./pages/CollaborationPage";


const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/full-hd-liza",
    element: <HomePage />,
  },
  {
    path: "/портфолио",
    element: <PortfolioPage />,
  },
  {
    path: "/video-blog",
    element: <BlogPage />,
  },
  {
    path: "/новости",
    element: <NewsPage />,
  },
  {
    path: "/статьи-фул-хд/:articleId?", // articleId теперь опциональный параметр
    element: <ArticlePage />,
  },
  {
    path: "/ремонт",
    element: <RenovationPage />,
  },
  {
    path: "/комплектация",
    element: <EquipmentPage />,
  },
  {
    path: "/сотрудничество",
    element: <CollaborationPage />,
  }
];

export default routes;