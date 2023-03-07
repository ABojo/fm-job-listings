import { createContext, useState } from "react";

export const JobFilterContext = createContext();

export function JobFilterProvider({ children }) {
  const [keywords, setKeywords] = useState([]);

  function addKeyword(keyword) {
    const newKeywords = [...keywords, keyword];
    setKeywords(newKeywords);
  }

  function removeKeyword(keyword) {
    const newKeywords = [...keywords];
    const keywordIndex = newKeywords.findIndex((kw) => kw === keyword);

    newKeywords.splice(keywordIndex, 1);
    setKeywords(newKeywords);
  }

  function clearKeywords() {
    setKeywords([]);
  }

  const value = { keywords, addKeyword, removeKeyword, clearKeywords };

  return (
    <JobFilterContext.Provider value={value}>
      {children}
    </JobFilterContext.Provider>
  );
}
