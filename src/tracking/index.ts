export const trackEvent = async (event: string) => {
  return new Promise((resolve) => {
    console.log('tracking event: ' + event);
    resolve();
  });
};
