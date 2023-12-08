import React, { useState, useEffect } from "react";
import MyContext from "./myContext";
import {
  Timestamp,
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../../firebase/FirebaseConfig";
import { setDoc, deleteDoc, doc } from "firebase/firestore";

const MyState = (props) => {
  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(false);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  //products initialState:
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  //add product :
  const addProduct = async () => {
    if (
      products.title == null ||
      products.price == null ||
      products.imageUrl == null ||
      products.category == null ||
      products.description == null
    ) {
      return toast.error("Please fill all fields");
    }

    //create collecction of name:"products":
    try {
      setLoading(true);
      const productRef = collection(fireDB, "products");

      await addDoc(productRef, products);
      toast.success("Product Added successfully");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setProducts("");
  };

  const [product, setProduct] = useState([]);

  //getProducts:
  const getProductData = async () => {
    setLoading(true);
    try {
      //fetch products from collection"products" and order as per added time
      const q = query(collection(fireDB, "products"), orderBy("time"));

      //
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => getProductData(), []);

  //updateProducts:
  const edithandle = (item) => {
    setProducts(item);
  };
  // update product
  const updateProduct = async () => {
    setLoading(true);
    try {
      //to set Document : take 3 arg: dbinstance,collecctionName,productId, kise update krna hai...say here: "products"
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product Updated successfully");
      getProductData();
      setLoading(false);
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    setProducts("");
  };

  const deleteProduct = async (item) => {
    try {
      setLoading(true);
      //to delete from db based on productId:
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product Deleted successfully");
      setLoading(false);
      getProductData();
    } catch (error) {
      // toast.success('Product Deleted Falied')
      setLoading(false);
    }
  };

  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        mode,
        toggleMode,
        products,
        product,
        setProducts,
        addProduct,
        deleteProduct,
        updateProduct,
        edithandle,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
