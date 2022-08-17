// import React from 'react';

// export default function Pagination(props, { setPage, numOfPages = 10 }) {
//   const handlePageChange = (page) => {
//     setPage(page);
//     window.scroll(0, 0);
//   };
//   return (
//     <div class="page text-center py-5 bgutama">
//       <div class="container-fluid">
//         <ul class="pagenation">
//           <li>
//             <a href="#.com" onChange={(e) => handlePageChange(e.target.textContent)} count={numOfPages}>
//               {props.page}
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

function Pagee({ page, setPage, numOfPages = 10 }) {
  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: 'rgb(56, 56, 56)',
      }}
    >
      <div className="bgutama">
        <Typography className="text-white font-bold">Page: {page}</Typography>
        <Pagination onChange={(e) => handlePageChange(e.target.textContent)} count={numOfPages} hideNextButton hidePrevButton style={{ backgroundColor: 'rgb(56, 56, 56)' }} color="secondary" />
      </div>
    </div>
  );
}

export default Pagee;

// import React from 'react';
// import Pagination from '@mui/material/Pagination';

// export default function Pagee({ setPage, numOfPages = 10 }) {
//   const handlePageChange = (page) => {
//     setPage(page);
//   };

//   return (
//     <div
//       style={{
//         width: '100%',
//         display: 'flex',
//         justifyContent: 'center',
//         marginTop: 10,
//       }}
//     >
//       {/* <ThemeProvider theme={darkTheme}> */}
//       <Pagination onChange={(e) => handlePageChange(e.target.textContent)} count={numOfPages} color="primary" hideNextButton hidePrevButton />
//       {/* </ThemeProvider> */}
//     </div>
//   );
// }
