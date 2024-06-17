import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import TextField from '@mui/material/TextField';
import { Card, CardContent, Grid, Menu, MenuItem, Paper } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import SearchIcon from '@mui/icons-material/Search';
// import InputBase from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { InputBase } from '@mui/material';
// import List from '@mui/material';
import { List } from '@mui/material';
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    display: 'flex', // Added flex display
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: "#00563B",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  //background:'#00563B',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
const medicines = [
  'Paracetamol',
  'Ibuprofen',
  'Aspirin',
  'Antibiotics',
  'Antihistamines',
  'Cough Syrup',
];

export default function Navbar() {
  const navigate = useNavigate();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handlePlusButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setShowForm(!showForm);
  };

  const handleMenuItemClick1 = (event) => {
    handleMenuClose();
    navigate("/salesform");
  };

  const handleMenuItemClick = (event) => {

    handleMenuClose();
    navigate("/purchaseform");
  };

  const navigate2 = useNavigate();

  const handleClick = (text) => {
    if (text === 'Home') {
      navigate2('/');
    } else if (text === 'Dashboard') {
      navigate2('/admin');
    } else if (text === 'Purchase') {
      navigate2('/table');
    } else if (text === 'Contact') {
      // Define the route for the Contact page
    }
  };
  

  return (
    <Box sx={{ display: 'flex', marginTop: '60px' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Welcome Admin!!
          </Typography>
          {/* Search bar */}
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, ml: '500px' }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          </Paper>
          {/* Plus button */}
          <IconButton
            color="inherit"
            aria-label="open form"
            onClick={handlePlusButtonClick}
            sx={{ ml: 2 }}
          >
            <AddIcon />
            <ArrowDropDownIcon />
          </IconButton>
          {/* Dropdown menu */}
          <Menu
            anchorEl={anchorEl}
            // onClick={handlePlusButtonClick}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem
              onClick={(event) => { handleMenuItemClick1(event, 'sales'); }}
              sx={{ color: 'black', bgcolor: '#e2fff8' }} // Set text color
            >
              Sales
            </MenuItem>
            <MenuItem
              onClick={(event) => { handleMenuItemClick(event, 'purchases'); }}
              sx={{ color: 'black', bgcolor: '#e2fff8' }} // Set text color
            >
              Purchases
            </MenuItem>
          </Menu>


        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        
        <List>
      {['Home', 'Dashboard', 'Purchase', 'Contact'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton onClick={() => handleClick(text)}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>

        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Grid container spacing={2}>
          {/* Upper Section */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Card sx={{ backgroundColor: '#F0EAD6', flex: 1 }}>
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      Total Sale
                    </Typography>
                    <Typography variant="body1">Rs.300000000</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={{ backgroundColor: '#F0EAD6', flex: 1 }}>
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      Total Purchase
                    </Typography>
                    <Typography variant="body1">Rs.100000000</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={{ backgroundColor: '#F0EAD6', flex: 1 }}>
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      Total Revenue
                    </Typography>
                    <Typography variant="body1">Rs.200000000</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          {/* Lower Section */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card sx={{ backgroundColor: '#FAA0A0', flex: 1 }}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h2"
                      gutterBottom
                      sx={{
                        backgroundColor: '#880808',
                        color: '#FFF',
                        padding: '8px',
                        width: "100%",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      Understock
                    </Typography>
                    <Box sx={{ maxHeight: 200, overflowY: 'auto' }}>
                      <List>
                        {medicines.map((medicine, index) => (
                          <ListItem key={index}>
                            <ListItemText primary={medicine} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card sx={{ backgroundColor: '#ACE1AF', flex: 1 }}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h2"
                      gutterBottom
                      sx={{
                        backgroundColor: '#023020',
                        color: '#FFF',
                        padding: '8px',
                        width: "100%",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      Overstock
                    </Typography>
                    <Box sx={{ maxHeight: 200, overflowY: 'auto' }}>
                      <List>
                        {medicines.map((medicine, index) => (
                          <ListItem key={index}>
                            <ListItemText primary={medicine} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          {/* Graph Section */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box mt={4}>
                  <BarChart
                    series={[
                      { data: [35, 44, 24, 34] },
                      { data: [51, 6, 49, 30] },
                      { data: [15, 25, 30, 50] },
                      { data: [60, 50, 15, 25] },
                    ]}
                    height={290}
                    xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                    margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* Form Section */}
          {showForm && (
            <Grid item xs={12} md={6}>
              <form>
                <h1>Hello</h1>
                <div>
                  <label htmlFor="medicineName">Medicine Name:</label>
                  <input type="text" id="medicineName" name="medicineName" />
                </div>
                <div>
                  <label htmlFor="quantity">Quantity:</label>
                  <input type="number" id="quantity" name="quantity" />
                </div>
              </form>
            </Grid>
          )}
        </Grid>
      </Main>
    </Box>
  );
}

// export default Navbar;