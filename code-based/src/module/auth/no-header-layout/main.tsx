import { Outlet } from "@tanstack/react-router";

export const NoHeader = () => {
  return (
    <div>
      NoHeader
      <Outlet />
    </div>
  );
};
