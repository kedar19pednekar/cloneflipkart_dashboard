import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from "@material-ui/core";
import  react, { useEffect, useState } from "react";
import { editProducts, getProducts } from "../Service/api";
import { useHistory, useParams } from "react-router-dom";


const useStyle= makeStyles({
    container:{
        width:'90%',
        margin: '5% 0 0 5%',
        '& > *': {
            marginTop: 20,
            marginBottom:25
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
    },  //object
    description: '',
    discount: '',
    tagline: ''
}

const EditProducts =()=>{
    const [products, setProducts] =useState(initialValues);

    const {url, title, price, description, discount, tagline} = products;
    const {id} = useParams();
    const classes = useStyle();
    const history = useHistory();

    useEffect(()=>{ // to fill up the form while editing
        loadProductData();
    },[]);

    const loadProductData = async() =>{
        const response = await getProducts(id);
        setProducts(response.data);

    }

    const onValueChange = (e) => {
        setProducts({...products, [e.target.name]: e.target.value});
    }

    const editProductDetails = async() => {
        await editProducts(id, products);
        history.push('../'); // ../ or ./ is diractory style routing
    }

    return(
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit the desired values of {id}.</Typography>
            {/* <FormControl>
                <InputLabel> <Typography color="textPrimary">Unique ProductID</Typography></InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='id' value={id}/>
            </FormControl> */}

            <FormControl>
                <InputLabel><Typography color="textPrimary"><mark class="product_attribute">Current Product image url:</mark>  {url}</Typography></InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='url' defaultValue={url} />  
            </FormControl>

            <FormControl>
                <InputLabel><Typography color="textPrimary"><mark class="product_attribute">Current short title:</mark>  {title.shortTitle}</Typography></InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='title.shortTitle' defaultValue={title.shortTitle}/>
            </FormControl>
            <FormControl>
                <InputLabel><Typography color="textPrimary"><mark class="product_attribute">Current long title:</mark>  {title.longTitle}</Typography></InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='title.longTitle' defaultValue={title.longTitle}/>
            </FormControl>
            <FormControl>
                <InputLabel><Typography color="textPrimary"><mark class="product_attribute">Current mrp (check selling price and discount):</mark>  {price.mrp}</Typography></InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='price.mrp' defaultValue={price.mrp}/>
            </FormControl>
            <FormControl>
                <InputLabel><Typography color="textPrimary"><mark class="product_attribute">Current selling price (check mrp and discount):</mark>  {price.cost}</Typography></InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='price.cost' defaultValue={price.cost}/>
            </FormControl>
            <FormControl>
                <InputLabel><Typography color="textPrimary"><mark class="product_attribute">Current discount (check mrp and selling price):</mark>  {price.discount}</Typography></InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='price.discount' defaultValue={price.discount}/>
            </FormControl>

            
            <FormControl>
                <InputLabel><Typography color="textPrimary"><mark class="product_attribute">Current description:</mark>  {description}            </Typography></InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='description' defaultValue={description} />
            </FormControl>

            <FormControl>
                <InputLabel><Typography color="textPrimary"><mark class="product_attribute">Current more discount:</mark>  {discount}</Typography></InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='discount' defaultValue={discount}/>
            </FormControl>
            <FormControl>
                <InputLabel><Typography color="textPrimary"><mark class="product_attribute">Current tagline:</mark>  {tagline}</Typography></InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='tagline' defaultValue={tagline}/>
            </FormControl>
            <Button variant="contained" onClick={()=> editProductDetails()} color="primary"> Edit Products</Button>
        </FormGroup>

        )
}

export default EditProducts;