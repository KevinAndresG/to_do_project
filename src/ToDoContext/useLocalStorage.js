import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 4000);
    });
    function SaveItem(newToDos) {
      try {
        const stringItem = JSON.stringify(newToDos);
        localStorage.setItem(itemName, stringItem);
        setItem(newToDos);
      } catch (error) {
        setError(error);
      }
    }
  
    return [ item, SaveItem, loading, error ];
  }

  export { useLocalStorage };