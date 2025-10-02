import { Link, linkOptions, Outlet, useLocation } from "@tanstack/react-router";

export const RootLayout = () => {
  const location = useLocation();

  const footerData = [
    linkOptions({
      to: "/",
      title: "Home",
    }),
    linkOptions({
      to: "/game/player",
      title: "Game",
    }),
    linkOptions({
      to: "/user",
      title: "User",
      search: { id: undefined },
    }),
  ];

  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <header className="h-14 flex items-center font-bold">
        <Link to="/" hash="section-1">
          Home
        </Link>
        <Link
          to="/game/player"
          className="ml-4"
          state={{ player: { id: "ID567", name: "Test567" } }}>
          Game
        </Link>
        <Link to="/user" className="ml-4" search={{ id: undefined }}>
          User
        </Link>
      </header>

      <div className="h-screen flex items-center justify-center">
        <Outlet />
      </div>

      <footer className="h-16 flex items-center font-bold">
        {footerData.map((footer) => {
          return (
            <Link
              className={`mr-4 
                  ${footer.to.replace(/\//g, "@").split("@")[1] === location.pathname.replace(/\//g, "@").split("@")[1] && "text-blue-700"}`}
              key={footer.title}
              to={footer.to}
              state={{ player: { id: "ID567", name: "Test567" } }}>
              {footer.title}
            </Link>
          );
        })}
      </footer>
    </div>
  );
};
