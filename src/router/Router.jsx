import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Product from '../pages/Product';
import Register from '../pages/Register';
import { userStore } from '../store/userStore'

import React from 'react'

const Router = () => {
  const { userData, logInUser } = userStore();

  const authRouteList = [
    {
      path: "/login",
      element: Login
    },
    {
      path: "/register",
      element: Register
    },
  ];

  const routeList = [
    {
      path: "/",
      element: MainLayout,
      children: [
        {
          path: "/",
          element: Home,
          role: ["Admin", "User",]
        },
        {
          path: "/network",
          element: Product,
          role: ["Admin", "User",]
        },
      ]
    },
    {
      name: "Not Found",
      path: "*",
      element: NotFound
    },
  ];

  return (
    <>
      {
        logInUser ? (
          <Routes>
            {
              routeList.map((route, i) => (
                <Route key={i} path={route.path} element={<route.element />} >
                  {
                    route.children?.map((subRoute, j) => (
                      userData && subRoute.role.includes(userData.role) ? (
                        <Route key={j} path={subRoute?.path} element={<subRoute.element />} />
                      ) : null
                    ))
                  }
                </Route>
              ))
            }
          </Routes>
        ) : (
          <Routes>
            {
              authRouteList.map((route, i) => (
                <Route key={i} path={route.path} element={<route.element />} />
              ))
            }
            <Route path='*' element={<Navigate to="/login" replace />} />
          </Routes>
        )
      }
    </>
  )
}

export default Router