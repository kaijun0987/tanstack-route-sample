import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/game")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <header>
        {/* Data parsing */}
        <Link
          className="mr-4 font-bold"
          to="/game/player"
          state={{ player: { id: "ID567", name: "Test567" } }}
        >
          Player
        </Link>
        {/* search param */}
        <Link
          className="font-bold"
          to="/game/user/$userId"
          params={{ userId: "ID123" }}
        >
          User
        </Link>
      </header>
      Game Page
      <div className="mt-7 flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}
