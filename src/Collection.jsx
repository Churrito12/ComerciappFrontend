import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

const Collection = () => {
  const { categoria } = useParams();
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
    <div>
      <h1>Collection</h1>
      {productos.map((p) => (
        <div key={p.nombre}>
          <h4>producto: {p.nombre}</h4>
          <h5>proveedor: {p.proveedor}</h5>
          <h6>$ {p.precio}</h6>
        </div>
      ))}
    </div>
  );
};

export default Collection;
