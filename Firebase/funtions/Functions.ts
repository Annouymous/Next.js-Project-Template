import { Auth, DB, Storage } from "@/Firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  User,
  updatePassword,
} from "firebase/auth";

import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { generateRandomId } from "./generateRandomId";

export async function signOut() {
  Auth.signOut();
}
export async function CreateUser(email: string, password: string) {
  await createUserWithEmailAndPassword(Auth, email, password);
}
export async function signInEmail(email: string, password: string) {
  await signInWithEmailAndPassword(Auth, email, password);
}
export async function uploadImage(Path: string, image: File): Promise<string> {
  const filePath = `images/${Path}/${image.name}`;
  const newImageRef = ref(Storage, filePath);
  await uploadBytesResumable(newImageRef, image);
  return await getDownloadURL(newImageRef);
}
export async function UpdateDisplayName(user: User, name: string) {
  updateProfile(user, {
    displayName: name,
  });
}
export async function UpdateUseProfile(user: User, url: string) {
  updateProfile(user, {
    photoURL: url,
  });
}
