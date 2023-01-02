import { useState, useEffect } from "react";
import AppService from "../App/Appservices/Appservice";

export const useGetListByEndpointData = (endpoint, key) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchApiData = async () => {
      const response = await AppService.GetList(endpoint);
      try {
        if (response.data) {
          setState(response.data[key]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchApiData();
  }, [endpoint]);

  return { state };
};
