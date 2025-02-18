import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setSearch } from "../redux/search_slice";

function SearchComponent() {
  const dispatch: AppDispatch = useDispatch();

  const searchHandler = (event: { target: any }) => {
    const element = event.target;
    const value = element.value;
    dispatch(setSearch(value));
  };

  return (
    <div className="w-64 h-10">
      <input
        onChange={searchHandler}
        type="search"
        name="search"
        placeholder="Search here...!"
        className="h-full border border-teal-300 text-white rounded-sm px-2 w-full bg-teal-900 outline-0"
      />
    </div>
  );
}

export default SearchComponent;
