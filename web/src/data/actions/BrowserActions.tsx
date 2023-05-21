export const BROWSER_WINDOW_RESIZED = "BROWSER_WINDOW_RESIZED";

export const BrowserWindowResized = (width: number, height: number) => ({
  type: BROWSER_WINDOW_RESIZED,
  payload: {
    width,
    height,
  },
});
