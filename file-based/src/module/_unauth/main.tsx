import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_unauth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello unauth main here
      <Outlet />
    </div>
  );
}
