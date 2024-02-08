// Router
import { type NavigateProps } from "react-router-dom";
// Router config
import { type View } from "../index";

/**
 * Return a defined route path, throw error if its undefined
 * @param view - object that contains the route
 * @returns route path
 */

export const requiredRoutePath = (view: View): NavigateProps["to"] => {
  const to = view.options.path;

  if (to === undefined) {
    throw new Error(
      `Missing target route of redirect on route:\n\n ${JSON.stringify(view, undefined, 2)}\n\n`,
    );
  }

  return to;
};
