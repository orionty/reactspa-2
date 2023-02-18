import { SearchObject } from "../utils";

interface props {
  handleSubmit: Function;
  handleReset: Function;
  setForm: React.Dispatch<React.SetStateAction<SearchObject>>;
  formData: SearchObject;
}

const Filter = ({ setForm, formData, handleSubmit, handleReset }: props) => {
  return (
    <div className="flex-col">
      <h4 className="font-semibold">Filter</h4>
      <form
        className="flex gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleSubmit();
        }}
        onReset={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setForm({ item_number: "", order_number: "", type: "" });
          handleReset();
        }}
      >
        <div>
          <p>Item Number</p>
          <input
            type="text"
            name="item_number"
            value={formData.item_number}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, item_number: e.target.value }))
            }
            className="border p-2 outline-none"
          />
        </div>
        <div>
          <p>Order Number</p>
          <input
            type="text"
            name="order_number"
            value={formData.order_number}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, order_number: e.target.value }))
            }
            className="border p-2 outline-none"
          />
        </div>
        <div>
          <p>Type</p>
          <select
            name="type"
            value={formData.type}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, type: e.target.value }))
            }
            id="type"
            className="border p-2 outline-none"
          >
            <option value="EDF">EDF</option>
            <option value="CAO">CAO</option>
            <option value="SFO">SFO</option>
          </select>
        </div>
        <div className="space-x-4">
          <input
            type="submit"
            value="Apply"
            className="bg-green-500 p-2 outline-none"
          />
          <input
            type="reset"
            value="Reset"
            className="bg-green-500 p-2 outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default Filter;
