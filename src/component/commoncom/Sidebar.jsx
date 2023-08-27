import React from "react";
import KthLargestElement from "../KTHlargest"; // Import your components here
import Remove from "../Remove"; // Import your components here
import FindFirstLast from "../lettsolve/FindFirstLast";
import FindFirstoccurence from "../lettsolve/FindFirstOuurence";
import ReverseWordsInAString from "../lettsolve/ReverseWordsInAString";
import PalindromeNumber from "../lettsolve/PalindromeNumber";
import TwoSum from "../lettsolve/TwoSum";
const componentMap = {
    "Find First and Last Position of Element in Sorted Array": "FindFirstLast",
    "Two Sum": "TwoSum",
    "Find the Index of the First Occurrence in a String": "FindFirstOccurence",
    "Reverse Words in a String":"ReverseWordsInAString",
"Palindrome Number":"PalindromeNumber"
    // Add more titles and component names as needed
  };
const Sidebar = ({ selectedTitle }) => {
  const selectedComponent = componentMap[selectedTitle];

  // Render the selected component based on its type
  switch (selectedComponent) {
    case "KthLargestElement":
      return <KthLargestElement />;
    case "TwoSum":
      return <TwoSum />;
    case "FindFirstLast":
        return <FindFirstLast />;  
    case "FindFirstOccurence":
        return <FindFirstoccurence />;  
    case "ReverseWordsInAString":
          return <ReverseWordsInAString />;     
    case "PalindromeNumber":
            return <PalindromeNumber/>;     
    // Add cases for other components
    default:
      return <Remove />;
  }
};

export default Sidebar;
