import { useState, useEffect } from "react";
import AppService from "../App/Appservices/Appservice";

export const useGetListItemsByEndpointDataId = (endpoint, id) => {
  const [state, setState] = useState([]);

  useEffect(() => {

    const fetchApiData = async () => {
      const response = await AppService.GetDetail(endpoint, id);
      try {
        if (response.data) {
          setState(response.data.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    id && fetchApiData();

  }, [endpoint, id]);

  return { state };
};
