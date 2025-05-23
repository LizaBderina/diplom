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
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import RenovationApartmentPage from "./pages/RenovationApartmentPage";
import RenovationHousePage from "./pages/RenovationHousePage";
import UserProfile from "./pages/UserProfile";

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
  },
  // Добавляем новый маршрут для политики конфиденциальности
  {
    path: "/политика-конфиденциальности",
    element: <PrivacyPolicyPage />,
  },
  {
    path: "/ремонт-квартиры-под-ключ",
    element: <RenovationApartmentPage />,
  },
  // Добавляем новый маршрут для ремонта домов
  {
    path: "/ремонт-домов-под-ключ",
    element: <RenovationHousePage />,
  },
  {
    path: "/личный-кабинет",
    element: <UserProfile/>,
  },
];

export default routes;