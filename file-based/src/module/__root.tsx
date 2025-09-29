import {
  createRootRoute,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { RootLayout } from "../shared/layouts/RootLayouts";
import { QueryClient } from "@tanstack/react-query";

// export const Route = createRootRoute({
//   component: RootLayout,
//   errorComponent: () => {
//     return <div>Errors</div>;
//   },
// });

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootLayout,
  notFoundComponent: () => {
    return <div>Errors</div>;
  },
});
