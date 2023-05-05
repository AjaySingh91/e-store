import React from "react";
import { Outlet, Link } from "react-router-dom";
import { HomeIcon, CartIcon } from "./icons";
import Search from "./search";

function Layout({ categories }) {
  const renderCategories = () => {
    return categories.map((c) => (
      <li key={c.id}>
        <Link to={`/categories/${c.id}`}>{c.title}</Link>
      </li>
    ));
  };

  return (
    <div>
      <header className="header text-center columns-4 ">
        <div className="headerHomeIcon"><Link to={"/"}><HomeIcon width={40} /></Link></div>
        <div className=""> <Search /> </div>
        <div className="headerTitle md:-ml-72 -ml-10 ">OUR Store</div>
        <div className="cartIcon ml-24 md:ml-72 m-10">
          <Link to={"/basket"}>
            <CartIcon width={40} />
          </Link>
        </div>
      </header>

      <section>
        <nav>
          <ul>{categories && renderCategories()}</ul>
        </nav>

        <article>
          <Outlet />
        </article>
      </section>

      <footer className=" w-full">
        <Link to="/">Home</Link>|<Link to="/basket">Basket</Link>{" "}
      </footer>
    </div>
  );
}

export default Layout;
