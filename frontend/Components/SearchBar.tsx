import React, { useState } from 'react';
import { Text } from "@Chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
    const [query, setQuery] = useState<string>("");

return ( 
    <>
    <input
          className="outline-none bg-transparent border-2 border-gray-600 rounded-full px-5 py-3 m-2 text-lg w-full md:w-2/3 lg:w-1/2 hover:border-green-400 focus:border-green-400 transition duration-200"
          placeholder="Type here to search"
          type={"text"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
    />
    <SearchIcon fontSize={"xl"} />
    </>
)
}

export default SearchBar