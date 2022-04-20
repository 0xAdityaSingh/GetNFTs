import React from 'react';
import ReactMarkdown from 'react-markdown'
import Typography from '@mui/material/Typography';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {tomorrow} from 'react-syntax-highlighter/dist/cjs/styles/prism';
const { Title, Paragraph } = Typography;

export default function APITitle (props){
        return(
            <div>
                
                <Typography style={{textAlign:"center", margin:"10px 0px"}}>{props.description}</Typography>
                <SyntaxHighlighter 
      style={tomorrow} 
      >
      {"await Moralis.Web3API.account.getNFTs(options);"}
    </SyntaxHighlighter>
                
      
   
            </div>
        )
}