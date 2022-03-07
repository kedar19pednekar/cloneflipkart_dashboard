import {deleteProducts, getProducts} from '../Service/api';
import { useEffect, useState } from "react";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    table: {
        width: '95%',
        margin: '25px 0 0 25px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 14
        }
    }
})


const AllProducts =()=>{

    const [products, setProducts] = useState([]);
    const classes = useStyles();

    useEffect(()=>{
        getAllProducts();
    }, [])
       
        const getAllProducts = async()=>{
        const response = await getProducts();
        console.log(response.data);
        setProducts(response.data);
    }

    const deleteProductsData = async(id) =>{
        await deleteProducts(id);
        getAllProducts();
    }

    return(
        
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell> Unique Product Id </TableCell>
                    <TableCell> ProductImageUrl </TableCell>
                    {/* <TableCell> UserName </TableCell>
                    <TableCell> Email </TableCell> */}

                    <TableCell>Short title</TableCell>
                    <TableCell>Long title</TableCell>
                    <TableCell>MRP rs</TableCell>
                    <TableCell>Selling price</TableCell>
                    <TableCell>Discount</TableCell>

                    <TableCell> Description </TableCell>
                    <TableCell> Discount </TableCell>
                    <TableCell> Tagline </TableCell>
                    <TableCell> Update/Delete </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { 
                products.map(products=>(
    // here id is user given like flipkart admin, but _id is also sent by mongodb by default , we can use product._id as key. check mongodb.com database for clarity.
                    <TableRow className={classes.row} key={products.id}>    
                        <TableCell>{products.id}</TableCell>
                        <TableCell>{products.url}</TableCell>
                        {/* <TableCell>{products.username}</TableCell>
                        <TableCell>{products.email}</TableCell> */}
                        <TableCell>{products.title.shortTitle}</TableCell>
                        <TableCell>{products.title.longTitle}</TableCell>
                        <TableCell>{products.price.mrp}</TableCell>
                        <TableCell>{products.price.cost}</TableCell>
                        <TableCell>{products.price.discount}</TableCell>

                        <TableCell>{products.description}</TableCell>
                        <TableCell>{products.discount}</TableCell>
                        <TableCell>{products.tagline}</TableCell>
                        <TableCell>
                            <Button variant='contained' color="primary" style={{marginLeft:15,marginBottom:7}} component={Link} to={`/edit/${products.id}`}>Edit</Button>
                            <Button variant='contained' color="secondary" style={{marginLeft:15}} onClick={()=>deleteProductsData(products.id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))

                }
            </TableBody>
        </Table>
    );
}


export default AllProducts;