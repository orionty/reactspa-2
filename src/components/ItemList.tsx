import { Item } from "../utils";
import Empty from "./Empty";

interface propsList {
  items: Item[];
}

interface propsItem {
  item: Item;
}

const ItemList = ({ items }: propsList) => {
  return (
    <div>
      {items.length == 0 ? (
        <Empty />
      ) : (
        items.map((item, index) => <Item item={item} />)
      )}
    </div>
  );
};

function Item({ item }: propsItem) {
  return (
    <div className="flex gap-4 p-4 border-b">
      <h3>{item.item_number}</h3>
      <p>{item.name}</p>
      <p>{item.type}</p>
    </div>
  );
}

export default ItemList;
