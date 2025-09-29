import { Link, Outlet } from "@tanstack/react-router";

export const RootLayout = () => {
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/AboutPage" className="[&.active]:font-bold">
          About
        </Link>{" "}
        <Link
          to="/GamePage/PlayerPage"
          state={{ player: { id: "567546", name: "Tay" } }}
          className="[&.active]:font-bold">
          Game
        </Link>
        <Link
          to="/pageone"
          state={{ player: { id: "567546", name: "Tay" } }}
          className="[&.active]:font-bold">
          Auth_mobile_header_layout_page_one
        </Link>
        <Link
          to="/pagetwo"
          state={{ player: { id: "567546", name: "Tay" } }}
          className="[&.active]:font-bold">
          Auth_no_header_page_two
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
};
