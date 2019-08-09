import { useState, useEffect } from "react";

function useFetch(url, defaultData) {
  const [ data, setData ] = useState(defaultData);

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(url);
      const json = await resp.json();
      setData(json);
    }
    fetchData();
  }, [url])

  return data;
}

export {
    useFetch
}