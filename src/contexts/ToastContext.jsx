/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect, useCallback } from "react";

export const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  const [toastList, setToastList] = useState([]);
  const [counter, setCounter] = useState(1);  

  const deleteToast = useCallback(
    (id) => {
      const newToastList = toastList.filter((e) => e.id !== id);
      setToastList(newToastList);
    },
    [toastList, setToastList]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) {
        deleteToast(toastList[0].id);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [toastList, deleteToast]);

  function createToast({ message, type, duration }) {
    const newToast = {
      id: counter,
      message,
      type,
    };
    setToastList([...toastList, newToast]);
    setCounter(counter + 1);
  }

  return (
    <ToastContext.Provider value={{ toastList, createToast, deleteToast }}>
      {children}
    </ToastContext.Provider>
  );
};
