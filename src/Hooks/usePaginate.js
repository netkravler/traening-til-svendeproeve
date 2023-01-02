import { useEffect, useState } from "react";

export const usePaginate = (apiData, itemsPerPage, currentPage) => {
  const [state, setState] = useState([]);
  const dataLength = apiData.length;
  //calculate number of pages
  const numberOfPages = Math.ceil(apiData.length / itemsPerPage);

  // check if currentPage is larger than the number of pages
  // if so set the indexoflast to the fist page
  // const indexOfLast = currentPage > numberOfPages ? 1 * itemsPerPage : currentPage * itemsPerPage;

  const indexOfLast = currentPage * itemsPerPage;

  const indexOfFirst = indexOfLast - itemsPerPage;

  useEffect(() => {
    setState(apiData.slice(indexOfFirst, indexOfLast));
  }, [apiData, setState, indexOfFirst, indexOfLast, numberOfPages]);

  return { state, numberOfPages, dataLength };
};
