import Select from "react-select";
import { products } from "../utils/products";

const options = [
  { value: "fabric", label: "Fabric" },
  { value: "car", label: "Car" },
  { value: "personal", label: "PersonalHygene" },
  { value: "floor", label: "Floor" },
  { value: "toilet", label: "Toilet" },
  { value: "vessels", label: "Vessels" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#0f3460",
    color: "white",
    borderRadius: "5px",
    border: "none",
    boxShadow: "none",
    width: "200px",
    height: "40px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#0f3460" : "white",
    color: state.isSelected ? "white" : "#0f3460",
    "&:hover": {
      backgroundColor: "#0f3460",
      color: "white",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
};

const FilterSelect = ({ setFilterList }) => {
  const handleChange = (selectedOption) => {
    setFilterList(
      products.filter((item) => item.category === selectedOption.value)
    );
  };
//   return (
//     <Select
//       options={options}
//       defaultValue={{ value: "", label: "Filter By Categorys" }}
//       styles={customStyles}
//       onChange={handleChange}
//     />
//   );
};

export default FilterSelect;
