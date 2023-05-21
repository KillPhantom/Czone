import { BREAK_POINTS } from "@data/Constants";
import type { StateType } from "@type/StateType";
import { getIsMobileBrowser } from "@utils/Device";

export const getWidth = (state: StateType) => state.browser.width;
export const getHeight = (state: StateType) => state.browser.height;

export const getIsMobileBrowserWidth = (state: StateType) =>
  getWidth(state) < BREAK_POINTS.medium;

export const getShouldRenderMobileComponent = (state: StateType) =>
  getIsMobileBrowserWidth(state) || getIsMobileBrowser();
