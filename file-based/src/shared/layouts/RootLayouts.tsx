import {
  Link,
  linkOptions,
  Outlet,
  useLocation,
  useNavigate,
} from "@tanstack/react-router";

export const RootLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const footerData = [
    linkOptions({
      to: "/",
      title: "Home",
    }),
    linkOptions({
      to: "/about-us/introduction",
      title: "About us",
    }),
    linkOptions({
      to: "/game/player",
      title: "Game",
    }),
  ];

  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <header className="h-14 flex items-center font-bold">
        <Link to="/" hash="section-1">
          Home
        </Link>
        <button
          className="ml-4"
          onClick={() => {
            navigate({ to: "/about-us/introduction" });
          }}
        >
          Abous us
        </button>
        <Link
          to="/game/player"
          className="ml-4"
          state={{ player: { id: "ID567", name: "Test567" } }}
        >
          Game
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
              state={{ player: { id: "ID567", name: "Test567" } }}
            >
              {footer.title}
            </Link>
          );
        })}
      </footer>
    </div>
  );
};
