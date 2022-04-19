import React from 'react';
import Typography from '@mui/material/Typography';
const { Title, Paragraph } = Typography;

export default function APITitle (props){
        return(
            <div>
                
                <Typography style={{textAlign:"center", margin:"10px 0px"}}>{props.description}</Typography>
            </div>
        )
}