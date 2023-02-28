import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Root from "./root/Root";
import { Home, About, Product, Pricing, Blog, Contact } from "./pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={
        <p className="dark:bg-slate-900 text-center h-screen w-full dark:text-white">
          Oops something went wrong
        </p>
      }
    >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="product" element={<Product />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
