import { Camera, CameraResultType } from "@capacitor/camera";

export const takePicture = async () => {
  return await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri,
  });
};
