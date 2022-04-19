import ReactJson from 'react-json-view'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Box from '@mui/material/Box';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import * as React from 'react';
const MyJson=(props)=>{
    return(
        <div>
            {/* {props.mynftdata.nftdata && <SyntaxHighlighter language="javascript" style={dark}>
      {props.mynftdata.nftdata}
    </SyntaxHighlighter>} */}
            <Box
          sx={{
            // marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
          }}
        >{props.mynftdata.nftdata && <ReactJson src={props.mynftdata.nftdata} theme="monokai" />}</Box>
        </div>
    )
}

export default MyJson;