import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import ItemList from "./components/ItemList";
import SearchBar from "./components/SearchBar";
import { Item, searchItems, SearchObject } from "./utils";

function App() {
  const [search, setSearch] = useState<SearchObject>({
    item_number: "",
    order_number: "",
    type: "",
  });
  const [items, setItems] = useState<Item[]>([]);
  const handleSearch = () => {
    const result = searchItems(search);
    setItems(result);
  };

  const handleReset = () => {
    setItems([]);
  };

  useEffect(() => {
    const result = searchItems(search);
    setItems(result);
  }, [search.item_number]);

  return (
    <div className="max-w-[70%] mx-auto">
      <SearchBar
        handleSubmit={handleSearch}
        setSearch={setSearch}
        text={search.item_number}
      />
      <Filter
        formData={search}
        setForm={setSearch}
        handleSubmit={handleSearch}
        handleReset={handleReset}
      />
      <ItemList items={items} />
    </div>
  );
}

export default App;
