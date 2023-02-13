import {  Text, View } from 'react-native'
import React, { createContext, useState } from "react";

export const CategoriesContext = createContext();

const initCateg = [
  { id: 0, categorie: "Work" },
  { id: 1, categorie: "Personal" },
];

const CategorieContextProvider = ({ children }) => {
  const [categorieArray, setCategorieArray] = useState(initCateg);


  const addCategorieHandler = (categorieName) =>{
    const newCategorieName = {
      id: Math.random() * 1000,
      name: categorieName,
    };
  }
  return (
<CategoriesContext.Provider value={{categorieArray,addCategorieHandler}}>
{children}
</CategoriesContext.Provider>

  );
};

export default CategorieContextProvider;

