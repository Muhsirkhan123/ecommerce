// import React, { useEffect } from "react";
// import Select from "react-select";
// import { products } from "../utils/products";

// const options = [
//   { value: "fabric", label: "Fabric" },
//   { value: "car", label: "Car" },
//   { value: "personal", label: "PersonalHygene" },
//   { value: "floor", label: "Floor" },
//   { value: "toilet", label: "Toilet" },
//   { value: "vessels", label: "Vessels" },
// ];

// const customStyles = {
//   control: (provided, state) => ({
//     ...provided,
//     backgroundColor: "white",
//     // color: "red",
//     // borderRadius: "5px",
//     border: "none",
//     // boxShadow: "none",
//     width: "180px",
//     // height: "40px",
//     boxShadow: state.isFocused ? "none" : null, // Remove box shadow when focused
//     "&:hover": {
//       borderColor: state.isFocused ? null : "#0f3460", // Change border color on hover
//     },
//     caretColor: "transparent", // Remove caret symbol
//   }),
//   indicatorSeparator: () => ({
//     display: "none",
//   }),
//   dropdownIndicator: () => ({
//     display: "none",
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: state.isSelected ? "#0f3460" : "white",
//     color: state.isSelected ? "white" : "#0f3460",
//     "&:hover": {
//       backgroundColor: "#0f3460",
//       color: "white",
//     },
//   }),
//   singleValue: (provided) => ({
//     ...provided,
//     color: "black",
//     fontSize: "18px",
//     fontWeight: "600",
//     marginTop: "10px",
//   }),
// };

// export const Shop = ({ setFilterList }) => {
//   useEffect(() => {
//     // Reset filterList when component mounts
//     setFilterList(products.filter((item) => item.category === ""));
//   }, [setFilterList]);

//   const handleChange = (selectedOption) => {
//     setFilterList(
//       products.filter((item) => item.category === selectedOption.value)
//     );
//   };

//   return (
//     <Select
//       options={options}
//       defaultValue={options[0]} // Set default value to the empty option
//       styles={customStyles}
//       onChange={handleChange}
//     />
//   );
// };
// // export default Shop;
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation hook
import { products } from "../utils/products";

const options = [
  { value: "", label: "Shop By Categories" },
  { value: "fabric", label: "Fabric" },
  { value: "car", label: "Car" },
  { value: "personal", label: "PersonalHygene" },
  { value: "floor", label: "Floor" },
  { value: "toilet", label: "Toilet" },
  { value: "vessels", label: "Vessels" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "white",
    border: "none",
    width: "180px",
    boxShadow: state.isFocused ? "none" : null,
    "&:hover": {
      borderColor: state.isFocused ? null : "#0f3460",
    },
    caretColor: "transparent",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: () => ({
    display: "none",
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
    color: "black",
    fontSize: "18px",
    fontWeight: "600",
    marginTop: "10px",
    textAlign: "center",
  }),
};

export const Shop = ({ setFilterList }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const location = useLocation(); // Get current location
  const navigate = useNavigate();
  useEffect(() => {
    // Reset selectedOption when navigating away from the shop page
    return () => {
      setSelectedOption(options[0]);
    };
  }, [location.pathname]); // Trigger effect when location changes

  useEffect(() => {
    setFilterList(
      products.filter((item) => item.category === selectedOption.value)
    );
    console.log(selectedOption, "selectedOption");
  }, [selectedOption, setFilterList]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (selectedOption?.value !== "") {
      navigate("/shop", { state: { category: selectedOption?.value } });
    }
  };

  return (
    <Select
      options={options}
      value={selectedOption}
      styles={customStyles}
      onChange={handleChange}
    />
  );
};
