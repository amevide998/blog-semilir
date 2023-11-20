import {FirebaseStorage, getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage';
import configuration from "@/databases/configuration";
import {FirebaseApp, initializeApp} from "@firebase/app";


const firebaseConfig = configuration.firebase;
const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
const firebaseStorage: FirebaseStorage = getStorage(firebaseApp);


export default async function uploadImageToFirebase (destination: string, file: any): Promise<string | undefined> {
        try {
            const storageRef = ref(firebaseStorage, destination);

            const metadata = {
                contentType: file.mimetype,
            };

            const snapshot = await uploadBytes(storageRef, file.buffer, metadata);

            return await getDownloadURL(snapshot.ref);
        } catch (err) {
            console.error('Something went wrong while uploading the file:', err);
            return undefined;
        }
}

