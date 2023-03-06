import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
   const onHandleSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <Paper
         component='form'
         onSubmit={onHandleSubmit}
         sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5 },
         }}
      >
         <input className='search-bar' placeholder='Search...' />
         <IconButton
            type='submit'
            sx={{ p: '10px', color: '#fc1503' }}
            aria-label='search'
         >
            <SearchIcon />
         </IconButton>
      </Paper>
   );
};

export default SearchBar;
