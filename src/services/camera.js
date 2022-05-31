import { Camera, CameraResultType } from '@capacitor/camera';

const takePicture = async () => {
    const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: true,
        resultType: CameraResultType.Uri
    });
    const imageUrl = image.webPath;
    return imageUrl
};

export {
    takePicture
}