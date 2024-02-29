import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, `productos`);
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProductos(docs);
    });
  }, []);

  return (
    <>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
