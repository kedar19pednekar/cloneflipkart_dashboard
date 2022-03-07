import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from "@material-ui/core";
import  react, { useState } from "react";
import { addProducts } from "../Service/api";
import { useHistory } from "react-router-dom";


const useStyle= makeStyles({
    container:{
        width:'50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const initialValues = {
    id: '',
    url: '',
    // NA detailUrl: String,
    title: {
        shortTitle:'',
        longTitle:'',
    },  //object
    price: {
        mrp:'',
        cost:'',
        discount:''
    },
    description: '',
    discount: '',
    tagline: ''
}

const AddProducts =()=>{
    const [products, setProducts] =useState(initialValues);
    const {id, url, title, price, description, discount, tagline} = products;
    const classes = useStyle();
    const history = useHistory();

    const onValueChange = (e) => {
        setProducts({...products, [e.target.name]: e.target.value});

    }

    const addProductDetails = async() => {
        await addProducts(products);
        history.push('./');
    }

    return(
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Products</Typography>
            <FormControl>
                <InputLabel> <Typography color="textPrimary">Unique Product ID</Typography> </InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='id' value={id}/>
            </FormControl>
            <FormControl>
                <InputLabel><Typography color="textPrimary">ProductImageUrl</Typography></InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='url' value={url}/>
            </FormControl>

            <FormControl>
                <InputLabel><Typography color="textPrimary">Short Title</Typography></InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='title.shortTitle' defaultValue={title.shortTitle}/>
            </FormControl>
            <FormControl>
                <InputLabel><Typography color="textPrimary">Long Title</Typography></InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='title.longTitle' defaultValue={title.longTitle}/>
            </FormControl>
            <FormControl>
                <InputLabel><Typography color="textPrimary">MRP price (check Selling price and Discount)</Typography></InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='price.mrp' defaultValue={price.mrp}/>
            </FormControl>
            <FormControl>
                <InputLabel><Typography color="textPrimary">Selling price (check MRP and Discount)</Typography></InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='price.cost' defaultValue={price.cost}/>
            </FormControl>
            <FormControl>
                <InputLabel><Typography color="textPrimary">Discount (check MRP and Selling price)</Typography></InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='price.discount' defaultValue={price.discount}/>
            </FormControl>

            <FormControl>
                <InputLabel><Typography color="textPrimary">Description</Typography></InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='description' value={description}/>
            </FormControl>
            <FormControl>
                <InputLabel><Typography color="textPrimary">More Discounts</Typography></InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='discount' value={discount}/>
            </FormControl>
            <FormControl>
                <InputLabel><Typography color="textPrimary">ProductTagline</Typography></InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='tagline' value={tagline}/>
            </FormControl>
            <Button variant="contained" onClick={()=> addProductDetails()} color="primary"> Add Products</Button>
        </FormGroup>

        )
}

export default AddProducts;