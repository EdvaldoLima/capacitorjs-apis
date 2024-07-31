import { Browser } from '@capacitor/browser';

export const openBrowserURL = async (url: string) => {
  await Browser.open({ url });
};