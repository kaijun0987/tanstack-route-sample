import { createRootRoute, createRoute } from "@tanstack/react-router";
import { index } from "../../module";
import { AboutPage } from "../../module/AboutPage";
import { Auth } from "../../module/auth/main";
import { MobileLayoutHeader } from "../../module/auth/mobile-header-layout/main";
import { PageOne } from "../../module/auth/mobile-header-layout/page1/page1";
import { NoHeader } from "../../module/auth/no-header-layout/main";
import { PageTwo } from "../../module/auth/no-header-layout/page2/page2";
import { GamePage } from "../../module/GamePage";
import { PlayerPage } from "../../module/PlayerPage";
import { UserPage } from "../../module/UserPage";
import { RootLayout } from "../layouts/RootLayout";

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: index,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "AboutPage",
  component: AboutPage,
});

const gameRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "GamePage",
  component: GamePage,
});

const playerRoute = createRoute({
  getParentRoute: () => gameRoute,
  path: "PlayerPage",
  component: PlayerPage,
});

const userRoute = createRoute({
  getParentRoute: () => gameRoute,
  path: "UserPage/$userId",
  component: UserPage,
  // loader: async () => {
  //   const res = await fetch("/api/posts");
  //   return res.json();
  // },
});

const authHeaderLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "auth",
  component: Auth,
});

const authMobileHeaderLayoutRoute = createRoute({
  getParentRoute: () => authHeaderLayoutRoute,
  id: "mobile-header-layout",
  component: MobileLayoutHeader,
});

const authMobileHeaderLayoutPage1Route = createRoute({
  getParentRoute: () => authMobileHeaderLayoutRoute,
  path: "/pageone",
  component: PageOne,
});

const authNoHeaderLayoutRoute = createRoute({
  getParentRoute: () => authHeaderLayoutRoute,
  id: "no-header-layout",
  component: NoHeader,
});

const authNoHeaderLayoutPage2Route = createRoute({
  getParentRoute: () => authNoHeaderLayoutRoute,
  path: "/pagetwo",
  component: PageTwo,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  gameRoute.addChildren([playerRoute, userRoute]),
  authHeaderLayoutRoute.addChildren([
    authMobileHeaderLayoutRoute.addChildren([authMobileHeaderLayoutPage1Route]),
    authNoHeaderLayoutRoute.addChildren([authNoHeaderLayoutPage2Route]),
  ]),
]);
