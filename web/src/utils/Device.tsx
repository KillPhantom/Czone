const getUserAgent = (): string | undefined => {
  const userAgent = window.navigator.userAgent;
  return userAgent && userAgent.toLowerCase();
};

const getIsIOSBrowser = (): boolean => {
  const userAgent = getUserAgent();
  return userAgent && /iphone|ipad|ipod|ios/.test(userAgent);
};

const getMaxTouchPoints = (): number => {
  return window.navigator.maxTouchPoints;
};

const getIsIpad = (): boolean => {
  const userAgent = getUserAgent();
  const maxTouchPoints = getMaxTouchPoints();
  return (
    userAgent && /ipad/.test(userAgent) && maxTouchPoints && maxTouchPoints > 1
  );
};

export const getIsAndroidBrowser = (): boolean => {
  const userAgent = getUserAgent();
  return userAgent && /android/.test(userAgent);
};

export const getIsMobileBrowser = (): boolean =>
  getIsAndroidBrowser() || getIsIOSBrowser() || getIsIpad();
