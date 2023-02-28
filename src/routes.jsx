import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Root from "./root/Root";
import { Home, About, Product, Pricing, Blog, Contact } from "./pages";
import Error from "./pages/Error";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="product" element={<Product />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
