import React, { useState } from 'react'
import styles from "../../Styles/Checkout/Checkout.module.css"
import Divider from '@material-ui/core/Divider';
import { useSelector } from 'react-redux';
import { Badge, MenuItem, OutlinedInput, TextField } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const Checkout = () => {
    const cartItems = useSelector(state => state.cartorderReducer.cart)
    const totalAmt = useSelector(state => state.cartorderReducer.totalAmt)
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    console.log(cartItems, totalAmt)

    return (
        <div className={styles.root}>
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
                                <p>Sriniwas (Sriniwas@gamil.com)</p>
                                <p>Logout</p>
                            </div>
                        </div>
                    </div>
                    <h4>Shipping Address</h4>
                    <div>
                        <form action="" className={styles.form_inputs}>
                            <div className={styles.first_inp_div}>
                                <div>
                                    <TextField
                                        variant="outlined"
                                        label="text"
                                        type="text"
                                        className={styles.input_name}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        variant="outlined"
                                        label="text"
                                        type="text"
                                        className={styles.input_name}
                                    />
                                </div>
                            </div>
                            <div>
                                <TextField size='small'
                                    variant="outlined"
                                    label="text"
                                    type="text"
                                    fullWidth
                                    style={{ margin: '10px 0px' }}
                                />
                            </div>
                            <div>
                                <TextField size='small'
                                    variant="outlined"
                                    label="text"
                                    type="text"
                                    style={{ margin: '10px 0px' }}
                                    fullWidth
                                />
                            </div>
                            <div>
                                <TextField size='small'
                                    variant="outlined"
                                    label="text"
                                    type="text"
                                    style={{ margin: '10px 0px' }}
                                    fullWidth
                                />
                            </div>

                            <div>
                                <TextField size='small'
                                    variant="outlined"
                                    label="text"
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
                                        label="Select"
                                        value={currency}
                                        onChange={handleChange}
                                        helperText="Please select your currency"
                                        variant="outlined"
                                        color="primary"
                                    >
                                        {[1, 2, 3, 4, 5].map((option) => (
                                            <MenuItem key={option.value} style={{ color: 'primary' }} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div>
                                    <TextField

                                        id="outlined-select-currency"
                                        select
                                        label="Select"
                                        value={currency}
                                        onChange={handleChange}
                                        helperText="Please select your currency"
                                        variant="outlined"
                                        color="primary"
                                    >
                                        {[1, 2, 3, 4, 5].map((option) => (
                                            <MenuItem key={option.value} style={{ color: 'primary' }} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div><div>
                                    <TextField
                                        variant="outlined"
                                        label="text"
                                        type="text"
                                    />
                                </div></div>
                            </div>
                            <div>
                                <div>
                                    <TextField size='small'
                                        variant="outlined"
                                        label="text"
                                        type="text"
                                        style={{ margin: '10px 0px' }}
                                        fullWidth
                                    />
                                </div>
                            </div>
                        </form>
                        <div className={styles.form_footer}>
                            <div>
                                <p>{`< Return to cart`}</p>
                            </div>
                            <div>
                                <div>
                                    Continue Shopping
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
                                                    <span style={{ fontSize: '11px', marginLeft: '5px' }}>
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
                                    <TableCell align="right"><h1>{`$ ${totalAmt.toFixed(2)}`}</h1></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}


