/* eslint-disable */
import DashIcon from "@/app/app/components/icons/DashIcon";
import NavLink from "@/app/app/components/link/NavLink";
import { usePathname } from "next/navigation";
import React, { useCallback } from "react";
// chakra imports

export const SidebarLinks = (props: { routes: RoutesType[] }): JSX.Element => {
  // Chakra color mode
  const pathname = usePathname();

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = useCallback(
    (routePath: string, routeName?: string) => {
      console.log(routePath, pathname);
      return pathname?.includes(routePath);
    },
    [pathname]
  );

  const createLinks = (routes: RoutesType[]) => {
    return routes.map((route, index) => {
      if (route.layout === "/app") {
        return (
          <NavLink key={index} href={route.layout + "/" + route.path}>
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li
                className="my-[3px] flex cursor-pointer items-center px-8"
                key={index}
              >
                <span
                  className={`${
                    activeRoute(route.path, route.name) === true
                      ? "font-bold text-brand-500 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.icon ? route.icon : <DashIcon />}{" "}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    activeRoute(route.path, route.name) === true
                      ? "font-bold text-stone-700 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.name}
                </p>
              </li>
              {activeRoute(route.path) ? (
                <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
              ) : null}
            </div>
          </NavLink>
        );
      }
    });
  };
  // BRAND
  return <>{createLinks(routes)}</>;
};

export default SidebarLinks;
