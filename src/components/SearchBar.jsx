import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate();
  const handleSubmit =(e)=>{
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid grey",
        pl: 2,
        boxShadow: "0 0 40px -15px #f1f1f1",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}
      />
      <IconButton type="submit" sx={{p:'10px', color:'#1e1e21'}}>
        <Search/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
