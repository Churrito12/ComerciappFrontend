import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const Document = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);
  console.log(producto);

  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, "productos", `${id}`);
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data();
        setProducto(docs);
      }
    });
  }, []);
  return (
    <div>
      <h1>Producto</h1>
      {
        <div>
          <h4>Producto: {producto.nombre}</h4>
        </div>
      }
    </div>
  );
};

export default Document;
