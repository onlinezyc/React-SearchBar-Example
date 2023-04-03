import React, {useState} from "react";
import '../components/SearchResult.css';

export const SearchResult=({result})=>{
  return(
    <div className="search-result">{result.name}</div>
  )
}