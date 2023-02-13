import React, { createContext, useContext, useState } from "react";

export const CategoriesContext = createContext();

const initCateg = [
  { id: 0, categorie: "Work", notes: [] },
  { id: 1, categorie: "Personal", notes: [] },
];

export const useCategorie = () => {
  return useContext(CategoriesContext);
};

const CategorieContextProvider = ({ children }) => {
  const [categorieArray, setCategorieArray] = useState(initCateg);

  const setNewCategorie = (categorie) => {
    const newList = [...categorieArray];
    newList.push(categorie);
    setCategorieArray(newList);
  };

  const changeCategorieHandler = (categorie) => {
    const newArray = [...categorieArray];
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id == categorie.id) {
        newArray[i] = categorie;
      }
    }
    setCategorieArray(newArray);
  };
  return (
    <CategoriesContext.Provider
      value={{ categorieArray, setNewCategorie, changeCategorieHandler }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategorieContextProvider;
