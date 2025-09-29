import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AboutUsHeader } from "./components/AboutUsHeader";

export const Route = createFileRoute("/about-us")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col">
      <AboutUsHeader />
      About us page
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}
