import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiData } from "../redux/actions/apiActions";
import ReactPaginate from 'react-paginate';


function Items({ currentItems }) {
    return (
      <>
      <h1>Create an app to fetch data from a JSON API. Use this data to render on the page.</h1>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <h3>Item #{JSON.stringify(item)}</h3>
            </div>
          ))}
      </>
    );
  }

export default function(){
    const apiRsult=useSelector(state=>{
        console.log('state',state);
        return state.apiReducer?.data;
    })
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getApiData());
    },[])
    const itemsPerPage=10;
    const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = apiRsult.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(apiRsult.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % apiRsult.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );

}