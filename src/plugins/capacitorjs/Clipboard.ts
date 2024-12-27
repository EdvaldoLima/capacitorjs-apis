import { Clipboard, WriteOptions } from '@capacitor/clipboard';

export const clipboardWrite = async (options: WriteOptions) => {
  await Clipboard.write(options);
};

export const clipboardRead = async () => {
  return await Clipboard.read();
};