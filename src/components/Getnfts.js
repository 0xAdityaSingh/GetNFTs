import * as React from 'react';
import { Fragment } from 'react';
import {
  Form,
  Input,
} from 'antd';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FiberSmartRecordOutlined from '@mui/icons-material/FiberSmartRecordOutlined';
import Typography from '@mui/material/Typography';
import Select from 'react-select'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Chain from "./chain.js";
import Format from "./format.js";
import APITitle from "./ApiTitle";
import Filter from "./filter.js";
import { Component } from 'react';
import Moralis from "moralis";
const theme = createTheme();


const GetNFTs=(props)=>{
    const [selectedOption, setSelectedOption] = useState({ value: 'eth', label: 'Ethereum' });
    const [selectedOption2, setSelectedOption2] = useState({ value: 'decimal', label: 'Decimal' });
    const options = [
      { value: 'eth', label: 'Ethereum' },
      { value: 'ropsten', label: 'Ropsten' },
      { value:'rinkeby', label:'Rinkeby'},
      { value:'goerli', label:'Goerli'},
      { value:'kovan', label:'Kovan'},
      { value:'bsc', label:'BSC'},
      { value:'bsc testnet', label:'BSCtest'},
      { value:'matic', label:'Polygon'},
      { value:'mumbai', label:'Mumbai'},
      { value:'avalanche', label:'Avalanche'},
      { value:'avalanche testnet', label:'AvalancheTest'},
      { value:'fantom', label:'Fantom'},
      { value:'ganache', label:'LocalDevChain'}
    ]
    const format_options = [
      { value: 'decimal', label: 'Decimal' },
      { value: 'hex', label: 'Hex' },
      
    ]
    const apiDescription= <>
    <p>NFT API gets all NFTs from the current user or address. Supports both ERC721 and ERC1155. Returns an object with the number of NFT objects and the array of NFT objects.</p>
    <p style={{margin:"10px 0px"}}><span style={{fontWeight:600}}>Address (required)</span>: A user address (i.e. 0x69023dddab45f345f2b683c180001d017fc0a540).</p>
    
</>;
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const options={chain:selectedOption['value'],address:data.get('myaddress'),format:selectedOption2['value'],limit:data.get('limit')};
        console.log('option', options);
        const nftdata = await Moralis.Web3API.account.getNFTs(options);
        const allnfts=nftdata.result;
        props.setNFTData({nftdata});

      };
    return(
        <div className={'columnContainer'}>
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <FiberSmartRecordOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            GetNFTs
          </Typography>
          <APITitle title={"GetNFTs"} description={apiDescription} method={"await Moralis.Web3API.account.getNFTs(options);"}/>
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="myaddress"
              label="Address"
              name="myaddress"
              autoFocus
              autocomplete="off"
            />
            <TextField
              margin="normal"
              // required
              fullWidth
              name="limit"
              label="Limit"
              autocomplete="off"
              id="limit"
            />
            <Fragment>
            <div className={'dropdown'}><Select
          
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        
        options={options}
      /></div>
      <div className={'dropdown'}><Select
        defaultValue={selectedOption2}
        onChange={setSelectedOption2}
        
        options={format_options}
      /></div>
      
      </Fragment>
           
      
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
        </div>
    )
}

export default GetNFTs;