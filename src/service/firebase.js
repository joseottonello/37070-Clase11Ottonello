import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, doc, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD7NsyQOplkPaoacwI-7gOtuR2Og3Qo1QA",
    authDomain: "vansecommerce-57d62.firebaseapp.com",
    projectId: "vansecommerce-57d62",
    storageBucket: "vansecommerce-57d62.appspot.com",
    messagingSenderId: "340775289223",
    appId: "1:340775289223:web:7812d18c7743b308bb5322"
};

const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);

export async function getProducts () {
    const productsCollection = collection(appFirestore, "products");
    const productsSnapshot = await getDocs(productsCollection);
    let productsResponse = productsSnapshot.docs.map((response) => {
        return {
            ...response.data(),
            id: response.id
        }
    });

    return productsResponse;
}

export async function getProductsById(id) {
    const docRef = doc(appFirestore, "products", id);
    const docProducts = await getDoc(docRef);
    return { id: docProducts.id, ...docProducts.data()};
   
}

export default appFirebase