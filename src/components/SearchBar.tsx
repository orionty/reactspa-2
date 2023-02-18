import { SearchObject } from "../utils";

interface props {
  handleSubmit: Function;
  setSearch: React.Dispatch<React.SetStateAction<SearchObject>>;
  text: string;
}

const SearchBar = ({ text, setSearch, handleSubmit }: props) => {
  return (
    <div className="flex">
      <form
        className="flex-1 flex"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleSubmit();
        }}
      >
        <input
          value={text}
          className="flex-1 outline-none border px-4 py-2"
          type="text"
          name="search"
          id="name"
          onChange={(e) =>
            setSearch((prev: SearchObject) => ({
              ...prev,
              item_number: e.target.value,
            }))
          }
        />
        <input
          type="submit"
          value="Search"
          className="bg-green-400 px-4 py-2 font-medium"
        />
      </form>
    </div>
  );
};

export default SearchBar;
