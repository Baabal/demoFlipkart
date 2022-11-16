import { AppBar, Toolbar, makeStyles, Box, Typography, withStyles, InputBase, Button, List } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';

const useStyle = makeStyles(theme => ({
    header: {
        background: '#2874f0',
        height: 55
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        color: '#FFFFFF',
        textDecoration: 'none'
    },
    logo: {
        width: 75
    },
    container: {
        display: 'flex',
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic'
    },
    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4
    }, 
  
    login: {
        color: '#2874f0',
        background: '#FFFFFF',
        marginLeft: '4%',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
    },
    search: {
        borderRadius: 2,
        marginLeft: 50,
        width: '38%',
        backgroundColor: '#fff',
        display: 'flex'
    },
    searchIcon: {
        marginLeft: 'auto',
        padding: 5,
        display: 'flex',
        color: 'blue'
    },
    inputRoot: {
        fontSize: 'unset',
        width: '100%'
    },
    inputInput: {
        paddingLeft: 20,
        width: '100%',
    }
}));

const ToolBar = withStyles({
    root: {
        minHeight: 55
    },
})(Toolbar);

const Header = () => {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  
    return (
        <AppBar position="fixed" className={classes.header}>
            <ToolBar>
                <div className={classes.component}>
                    <img src={logoURL} className={classes.logo} alt="" />
                    <Box component="span" className={classes.container}>
                        <Typography className={classes.subHeading}>Explore <Box component="span" style={{ color: '#FFE500' }}>Plus</Box></Typography>
                        <img src={subURL} className={classes.subURL} alt="" />
                    </Box>
                </div>
                <div className={classes.search}>
                    <InputBase
                        placeholder="Search for products, brands and more"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                    />
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                </div>
                <Button className={classes.login} variant="contained">Login</Button>
                <Typography style={{ marginLeft: 50 }}>Become a seller</Typography>
                <Typography style={{ marginLeft: 50 }}>More</Typography>
                <Typography style={{ marginLeft: 50 }}>Cart</Typography>

            </ToolBar>
        </AppBar>
    )
}

export default Header;