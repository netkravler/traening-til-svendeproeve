import  { useEffect, useState } from 'react'
import AppService from '../App/Appservices/Appservice';

const useGetKeyValuePairFromEndpoint = (endpoint, id, key) => {
  const [state, setState] = useState([]);

  useEffect(() => {

    const fetchApiData = async () => {
      const response = await AppService.GetDetail(endpoint, id);
      try {
        if (response.data) {
          setState(response.data.item[key]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    id && fetchApiData();

  }, [endpoint, id, key]);

  return { state };
};

export default useGetKeyValuePairFromEndpoint