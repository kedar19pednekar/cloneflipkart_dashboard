import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header:{
        background: 'blue'
    },
    tabs:{
        color: '#FFFFFF',
        textDecoration: 'none',
        marginRight:20,
        fontSize: 20
    }
})


const NavBar=()=>{
    const classes = useStyle();
    return(
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                {/* <NavLink className={classes.tabs} to="./" exact> All Products</NavLink>
                <NavLink className={classes.tabs} to="add" exact> Add Product</NavLink> */}

                <NavLink className={classes.tabs} to={{pathname:"http://localhost:3000"}} target="_blank"> All Products</NavLink>
                <NavLink className={classes.tabs} to={{pathname:"http://localhost:3000/add"}} target="_blank"> Add Product</NavLink>



                <div style={{marginLeft:290, fontSize:20, color:'#F8E831'}}>Welcome to Admin Dashboard for Flipkart Clone Warehouse</div> 
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;