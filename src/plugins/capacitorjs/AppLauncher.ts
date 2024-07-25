import { AppLauncher, CanOpenURLOptions, OpenURLOptions } from '@capacitor/app-launcher';

export const canOpenUrl = async (options: CanOpenURLOptions) => {
  return await AppLauncher.canOpenUrl(options);
};

export const openUrl = async (options: OpenURLOptions) => {
  return await AppLauncher.openUrl(options);
};