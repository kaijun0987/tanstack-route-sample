import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext } from "@tanstack/react-router";
import { RootLayout } from "../shared/layouts/RootLayouts";
import { useAuthStore } from "../shared/store/useAuthStore";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  authStore: typeof useAuthStore;
}>()({
  component: RootLayout,
  notFoundComponent: () => {
    return <div>Errors</div>;
  },
});
