import { Badge } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../Styles/Navbar/Navbar.module.css"
import styles from "../../Styles/Navbar/Navbar.module.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import SearchIcon from '@material-ui/icons/Search';
const LightTooltip = withStyles(() => ({
    tooltip: {
      backgroundColor: 'white',
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: '0 0 10px rgba(0,0,0,0.5)',
      fontSize: 12,
      wordSpacing:'7px',
      width:'225px',
    },
  }))(Tooltip);
export const Navbar = () => {
    return (
        <div className={styles.root}>
            <div className={styles.top}>
                <NavLink to="#">Free shipping on orders $50+</NavLink>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.grid_item}>
                    <div className={styles.grid_item_1}>
                        <div className={styles.top_margin}></div>
                        <div className={styles.link}>
                            <ul>
                                <li>
                                    <NavLink to="/"  title="Buy">BUY</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/"  title="Learn">LEARN</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" title="Visit">VISIT</NavLink>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className={styles.grid_item_2}>
                        <div className={styles.grid_item_2_wrapper}>
                            <NavLink to="#">
                                <img src="https://cdn.shopify.com/s/files/1/0974/7668/t/8/assets/logo.png" alt="" />
                            </NavLink>
                        </div>

                    </div>
                    <div className={styles.grid_item_3}>
                        <div className={styles.grid_item_3_top}>
                            <LightTooltip  title="Free shipping on orders over $50. Offer applicable to contiguous US addresses only. Total order price must be over $50 AFTER any discounts are applied. Orders ship one business day after being placed.">
                              <NavLink to="/" className={styles.freeinfo}>
                                    Free shipping on orders $50+
                                </NavLink>
                           </LightTooltip >
                        </div>
                        <div className={styles.grid_item_3_bottom}>
                            <ul>
                                <li><NavLink to="/" title="Join Our Mailing List">Join Our Mailing List</NavLink></li>
                                <li><NavLink to="/" title="Contact">Contact</NavLink></li>
                                <li><NavLink to="/" title="Sign In">Sign In</NavLink></li>
                                <li><NavLink to="#" title="Search"><SearchIcon/></NavLink></li>
                                <li><NavLink to="/cart">
                                        <Badge color="secondary" badgeContent={2}>
                                            <ShoppingCartIcon />
                                        </Badge>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
