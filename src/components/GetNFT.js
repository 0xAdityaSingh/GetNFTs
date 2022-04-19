import * as React from 'react';
import {
  Form,
  Input,
} from 'antd';
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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Chain from "./chain.js";
import Format from "./format.js";
import APITitle from "./ApiTitle";
import Filter from "./filter.js";
import { Component } from 'react';
import Moralis from "moralis";
const theme = createTheme();

export default class GetNFT extends Component {
  constructor() {
    super();
    
    this.state = {
      nftData: [],
      apiTitle: "GetNFTs",
      apiMethod: "await Moralis.Web3API.account.getNFTs(options);",
      apiDescription: <>
          <p>NFT API gets all NFTs from the current user or address. Supports both ERC721 and ERC1155. Returns an object with the number of NFT objects and the array of NFT objects.</p>
          <p style={{margin:"10px 0px"}}><span style={{fontWeight:600}}>Address (required)</span>: A user address (i.e. 0x1a2b3x...).</p>
          <p style={{margin:"10px 0px"}}><a href="https://opensea.io/assets/0xb7f7f6c52f2e2fdb1963eab30438024864c313f6/239" target="_blank">Example NFT Url</a></p>
      </>,     
      
    }
  }
  
  handleSubmit = async (event) => {
    event.preventDefault();
    // await Moralis.enableWeb3();
    const data = new FormData(event.currentTarget);
    const options={chain:data.get('chain'),address:data.get('myaddress')};
    // console.log("options: ",options);
    const nftdata = await Moralis.Web3API.account.getNFTs(options);
    
    // this.props.getdata(nftdata);
    console.log("Data Sent");
    // this.submitQuery(this.state.query);
  };
  render() {
    return (
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
          <APITitle title={this.state.apiTitle} description={this.state.apiDescription} method={this.state.apiMethod}/>
          
          <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
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
              id="chain"
              label="Chain"
              name="chain"
              autoFocus
              autocomplete="off"
            />
            
            <TextField
              margin="normal"
              // required
              fullWidth
              name="offset"
              label="offset"
              type="offset"
              id="offset"
              autocomplete="off"
            />
            <TextField
              margin="normal"
              // required
              fullWidth
              id="format"
              label="Format"
              name="format"
              autoFocus
              autocomplete="off"
            />
            <TextField
              margin="normal"
              // required
              fullWidth
              name="limit"
              label="limit"
              type="limit"
              autocomplete="off"
              id="limit"
            />
           
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
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>);
  }
}