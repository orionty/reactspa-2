export interface Item {
  item_number: number;
  name: string;
  desc: string;
  type: string;
  order_number: number;
}

export interface SearchObject {
  item_number: string;
  order_number: string;
  type: string;
}

export const ItemList: Item[] = [
  {
    order_number: 50,
    item_number: 1,
    name: "Bob Shoes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos?",
    type: "EDF",
  },
  {
    order_number: 25,
    item_number: 2,
    name: "Bob Shirt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos?",
    type: "SFO",
  },
  {
    order_number: 5,
    item_number: 3,
    name: "Dream Hall",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos?",
    type: "SFO",
  },
  {
    order_number: 10,
    item_number: 4,
    name: "Faith Zero",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos?",
    type: "EDF",
  },
  {
    order_number: 255,
    item_number: 5,
    name: "Black Shoes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos?",
    type: "EDF",
  },
  {
    order_number: 60,
    item_number: 6,
    name: "White Zeus",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos?",
    type: "CAO",
  },
  {
    order_number: 80,
    item_number: 7,
    name: "Don of the morning",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos?",
    type: "SFO",
  },
  {
    order_number: 56,
    item_number: 8,
    name: "Indiana Club",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos?",
    type: "CAO",
  },
  {
    order_number: 78,
    item_number: 9,
    name: "Street Mate",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos?",
    type: "CAO",
  },
  {
    order_number: 23,
    item_number: 10,
    name: "Bob Fen Shoes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos?",
    type: "EDF",
  },
];

export const fetchItems = () => ItemList;

export const searchItems = (search: SearchObject) => {
  return ItemList.filter(
    (item) =>
      search.item_number.split(",").includes(item.item_number.toString()) ||
      search.order_number.split(",").includes(item.order_number.toString()) ||
      search.type === item.type
  );
};
