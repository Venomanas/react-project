import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?from=${currency}`
        );
        const result = await res.json();
        setData(result.rates); // <- this holds exchange rates
      } catch (error) {
        console.error("Currency API fetch failed", error);
        setData({});
      }
    };

    if (currency) fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
