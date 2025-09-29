import { Link, Outlet } from "@tanstack/react-router";
import React from "react";

export const GamePage = () => {
  return (
    <div>
      <div className="mb-8 p-2 flex gap-2">
        <Link
          to="/GamePage/PlayerPage"
          state={{ player: { id: "567546", name: "Tay" } }}
          className="[&.active]:font-bold"
        >
          Player
        </Link>
        <Link
          to="/GamePage/UserPage/$userId"
          params={{ userId: "12342" }}
          className="[&.active]:font-bold"
        >
          User
        </Link>
      </div>
      GamePage
      <Outlet />
    </div>
  );
};
