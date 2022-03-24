import React, { useState } from "react";
import axios from "axios";
import emojipedia from "../../emojipedia";

export const ApiContext = React.createContext();

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  async function getData(query) {
    setLoading(true);
    setError(false);
    await axios
      .get(query)
      .then((response) => {
        setData(response.data);
        if(emojipedia.filter(e => e.emoji === response.data.emoji).length > 0) return

        if(emojipedia.length >= 6){
          emojipedia.push(response.data)
          emojipedia.shift();
          console.log(emojipedia, 'Limit reached')
        }else{
          emojipedia.push(response.data)
          console.log(emojipedia)
        }


      })
      .catch(() => setError(true));
    setLoading(false);
  }

  return (
    <ApiContext.Provider
      value={{
        getData,
        data,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
