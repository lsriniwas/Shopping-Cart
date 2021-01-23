import React, { useState } from 'react'
import styles from "../../Styles/Checkout/Checkout.module.css"
import Divider from '@material-ui/core/Divider';
import { useSelector } from 'react-redux';
import { Badge, FormControl, FormControlLabel, FormLabel, MenuItem, OutlinedInput, Paper, Radio, RadioGroup, Snackbar, TextareaAutosize, TextField } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import { CustomHook } from '../CustomHook/CustomHook';

const init={
    first_name:"",
    last_name:"",
    phone:"",
    address:"",
    apartment:"",
    company:"",
    state:"",
    country:"",
    zipcode:""
}
export const Checkout = () => {
    const [value,setValue]=CustomHook(init)
    let address = ""
    const [open,setOpen]=useState(false);
    const { isAuth, isLoading, profile } = useSelector(state => state.authReducer)
    const cartItems = useSelector(state => state.cartorderReducer.cart)
    const totalAmt = useSelector(state => state.cartorderReducer.totalAmt)
    const [currency, setCurrency] = React.useState('');

    React.useEffect(()=>{
        window.scrollTo(0, 0)
        document.title = `Checkout |Taza Chocolate `
    })

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const handleAddress = (value) => {
        address = value;
        console.log(address)
        setOpen(true)

        setTimeout(()=>{
            setOpen(false)
        },2000)
    }
    return (
        <div className={styles.root}>
            {
                cartItems.length === 0 && <Redirect to="/" />
            }
            {
                !isAuth && <Redirect to="/" />
            }
            <Snackbar open={open}  anchorOrigin={{'vertical':'top','horizontal':'center'}} autoHideDuration={2000}>
                <Alert severity="info">
                   Address Selected
                </Alert>
            </Snackbar>
            <div className={styles.header} >
                <div className={styles.wrapper}>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0974/7668/files/Taza_Website_Desktop_400px_Wide.png" width="110" alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.form_data}>
                <div className={styles.form}>
                    <div className={styles.form_header}>
                        <div className={styles.express_checkout}>
                            <p className={styles.freeshipping}>Express checkout</p>
                            <div className={styles.express_content_wrapper}>
                                <div>
                                    <button className={styles.shop_pay}></button>
                                </div>
                                <div>
                                    <button className={styles.paypal}></button>
                                </div>
                                <div>
                                    <button className={styles.amazon_pay}></button>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <h4>Contact Information</h4>
                        <div className={styles.contact_info}>
                            <div>
                                <img src="http://via.placeholder.com/60" alt="" />
                            </div>
                            <div>
                                <p>{profile.first_name}{profile.last_name}</p>
                                <p>{profile.email}</p>
                            </div>
                        </div>
                        <div>
                                    {
                                        profile.addresses?.map((address, i) =>
                                                <Paper style={{ padding: '10px',margin:10,cursor:'pointer'}}
                                                 onClick={() => handleAddress(address)}
                                                >
                                                    <h4  style={{textTransform:'uppercase'}}>
                                                    {address.first_name} {address.last_name}
                                                    </h4>
                                                    <br />
                                                    {address.phone}
                                                    <br />
                                                    {address.address}
                                                    {address.apartment}
                                                    {address.company}
                                                    <br />
                                                    {address.country}, {address.state}-{address.zipcode}
                                                </Paper>
                                        )
                                    }
                        </div>

                    </div>
                    <h4>Shipping Address</h4>
                    <br />
                    <div>
                        <form action="" className={styles.form_inputs}>
                            <div className={styles.first_inp_div}>
                                <div>
                                    <TextField
                                        variant="outlined"
                                        label="First Name"
                                        type="text"
                                        className={styles.input_name}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        variant="outlined"
                                        label="Last Name"
                                        type="text"
                                        className={styles.input_name}
                                    />
                                </div>
                            </div>
                            <div>
                                <TextField size='small'
                                    variant="outlined"
                                    label="Company"
                                    type="text"
                                    fullWidth
                                    style={{ margin: '10px 0px' }}
                                />
                            </div>
                            <div>
                                <TextField size='small'
                                    variant="outlined"
                                    label="Address"
                                    type="text"
                                    style={{ margin: '10px 0px' }}
                                    fullWidth
                                />
                            </div>
                            <div>
                                <TextField size='small'
                                    variant="outlined"
                                    label="Apartment, suite (Optional)"
                                    type="text"
                                    style={{ margin: '10px 0px' }}
                                    fullWidth
                                />
                            </div>

                            <div>
                                <TextField size='small'
                                    variant="outlined"
                                    label="City"
                                    type="text"
                                    style={{ margin: '10px 0px' }}
                                    fullWidth
                                />
                            </div>
                            <div className={styles.select_option}>
                                <div className={styles.padding_left}>
                                    <TextField

                                        id="outlined-select-currency"
                                        select
                                        label="Country/Region"
                                        value={currency}
                                        onChange={handleChange}
                                        helperText="Please select your Country"
                                        variant="outlined"
                                        color="primary"
                                    >
                                        {["India"].map((option) => (
                                            <MenuItem key={option.value} style={{ color: 'primary' }} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div>
                                    <TextField

                                        select
                                        label="States"
                                        value={currency}
                                        onChange={handleChange}
                                        helperText="Please select your State"
                                        variant="outlined"
                                        color="primary"
                                    >
                                        {["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh", "Telangana"].map((option) => (
                                            <MenuItem key={option.value} style={{ color: 'primary' }} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div><div>
                                    <TextField
                                        variant="outlined"
                                        label="ZIP code"
                                        type="text"
                                    />
                                </div></div>
                            </div>
                            <div>
                                <div>
                                    <TextField size='small'
                                        variant="outlined"
                                        label="Phone"
                                        type="text"
                                        style={{ margin: '10px 0px' }}
                                        fullWidth
                                    />
                                </div>
                            </div>
                        </form>
                        <div className={styles.form_footer}>
                            <div>
                                <NavLink to="/cart">{`< Return to cart`}</NavLink>
                            </div>
                            <div>
                                <div>
                                    Continue Shipping
                                </div>
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <Divider />
                            <ul>
                                <li>Refund Policy</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className={styles.payment}>
                    <div >
                        <Table>
                            <TableBody>
                                {
                                    cartItems?.map(item => {
                                        return (
                                            <TableRow>
                                                <TableCell >
                                                    <Badge color="primary" badgeContent={item.qty}>
                                                        <div className={styles.item_checkout} >
                                                            <div className={styles.item_checkout_img}>
                                                                <img src={item.img} alt="" />
                                                            </div>
                                                        </div>
                                                    </Badge>
                                                    <span style={{ fontSize: '10px', marginLeft: '5px' }}>
                                                        {item.name}
                                                    </span>
                                                </TableCell>
                                                <TableCell align="right">{`$ ${(item.qty * item.price).toFixed(2)}`}</TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                                <TableRow >
                                    <TableCell className={styles.gift_coupon}>
                                        <input type="text" name="" id="" placeholder="Gift card or discount code" />
                                    </TableCell>
                                    <TableCell align="right"><button className={styles.gift_coupon_button}>APPLY</button></TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell>SubTotal</TableCell>
                                    <TableCell align="right">{`$ ${totalAmt.toFixed(2)}`}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell>Shipping</TableCell>
                                    <TableCell align="right">Free</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell>Total</TableCell>
                                    <TableCell align="right"><h2>{`$ ${totalAmt.toFixed(2)}`}</h2></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}


