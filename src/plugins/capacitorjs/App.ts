import { App } from '@capacitor/app';

export const exitApp = async () => {
  await App.exitApp()
}

export const minimizeApp = async () => {
  await App.minimizeApp()
}

export const getInfo = async () => {
  return await App.getInfo()
}

export const getState = async () => {
  return await App.getState()
}