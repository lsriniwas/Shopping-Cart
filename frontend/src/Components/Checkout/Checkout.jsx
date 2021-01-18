import React, { useState } from 'react'
import styles from "../../Styles/Checkout/Checkout.module.css"
import Divider from '@material-ui/core/Divider';
import { useSelector } from 'react-redux';
import { Badge, TextField } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const Checkout = () => {
    const cartItems = useSelector(state => state.cartorderReducer.cart)
    const totalAmt = useSelector(state => state.cartorderReducer.totalAmt)
    const [color,setColor]=useState("rgba(224, 224, 224, 1)")
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
                        <h3>Contact Information</h3>
                        <div className={styles.contact_info}>
                            <div>
                                <img src="http://via.placeholder.com/60" alt="" />
                            </div>
                            <div>
                                <p>Check@gamil.com</p>
                                <p>Logout</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4>Shipping Address</h4>
                        <form action="" className={styles.form_inputs}>
                            <div className={styles.first_inp_div}>
                                <div>
                                    <input type="text" name="" id="" placeholder="First name" /></div>
                                <div><input type="text" name="" id="" placeholder="Last name" /></div>
                            </div>
                            <div>
                                <input type="text" name="" id="" placeholder="Company(optional)" />
                            </div>
                            <div>
                                <input type="text" name="" id="" placeholder="Address" />
                            </div>
                            <div>
                                <input type="text" name="" id="" placeholder="Apartment, suite, etc.(optional)" />
                            </div>
                            <div>
                                <input type="text" name="" id="" placeholder="City" />
                            </div>
                            <div className={styles.select_option}>
                                <div className={styles.padding_left}>
                                    <select className={styles.padding_left} name="" id="" style={{ padding: "20px 0px", width: '100%' }}>
                                        <option value="United ">United States</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="" id="" style={{ padding: "20px 0px", width: '100%' }}>
                                        <option disabled="">State</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AS">American Samoa</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                    </select>
                                </div>
                                <div><input type="text" name="" id="" placeholder="ZIP code" /></div>
                            </div>
                            <div>
                                <input type="text" name="" id="" placeholder="Phone" />
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
                                            <TableRow >
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
                                    <TableCell> 
                                    <input type="text" name="" id="" placeholder="Gift card or discount code"  className={styles.gift_coupon} style={{outline:color,padding:'15px',width:'200px'}} />
                                    </TableCell>
                                    <TableCell align="right"><button>APPLY</button></TableCell>
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


