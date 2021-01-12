import React, { useState } from 'react'
import styles from "../../Styles/Footer/Footer.module.css"
import "../../Styles/Footer/Footer.module.css"
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@material-ui/core"
export const Footer = () => {
    const [hidden, setHidden] = useState(false)
    return (
        <div className={styles.footer_main}>
            <div className={styles.footer_wrapper}>
                <div className={styles.footer_upper}>
                    <div className={styles.footer_upper_left}>
                        <Grid container className={styles.grid_item_list}>
                            <Grid className={styles.grid_item} item sm={3} md={3} lg={3} xl={3} >
                                <h3><a href="buy.com" className={styles.buylink}>BUY</a></h3>
                                <ul>
                                    <li><a href="/collections/gifts-collections" title="Gifts">Gifts</a></li>
                                    <li><a href="/collections/dark-bark" title="Dark Bark">Dark Bark</a></li>
                                    <li><a href="/collections/amaze-bars" title="Chocolate Bars">Chocolate Bars</a></li>
                                    <li><a href="/collections/discs" title="Chocolate Discs">Chocolate Discs</a></li>
                                    <li><a href="/collections/chocolate-covered-nuts" title="Chocolate Covered">Chocolate Covered</a></li>
                                    <li><a href="/collections/baking" title="Bulk and Baking">Bulk and Baking</a></li>
                                    <li><a href="/collections/80-cacao-up" title="80% Cacao &amp; Up">80% Cacao &amp; Up</a></li>
                                </ul>
                            </Grid>
                            <Grid className={styles.grid_item} item sm={3} md={3} lg={3} xl={3} >
                                <h3>LEARN</h3>
                                <ul>
                                    <li><a href="/pages/about-taza" title="About Taza">About Taza</a></li>
                                    <li><a href="/pages/our-process" title="Our Process">Our Process</a></li>
                                    <li><a href="/pages/taza-direct-trade" title="Taza Direct Trade">Taza Direct Trade</a></li>
                                    <li><a href="/pages/recipes" title="Recipes">Recipes</a></li>
                                    <li><a href="/blogs/news" title="Stone Ground Blog">Stone Ground Blog</a></li>
                                    <li><a href="/pages/wholesale" title="Wholesale">Wholesale</a></li>
                                </ul>
                            </Grid>
                            <Grid className={styles.grid_item} item sm={3} md={3} lg={3} xl={3} >
                                <h3>VISIT</h3>
                                <ul>
                                    <li><a href="/pages/factory-store" title=" Our Factory Store"> Our Factory Store</a></li>
                                    <li><a href="/pages/tours-events" title="Tours &amp; Events">Tours &amp; Events</a></li>
                                </ul>
                            </Grid>
                            <Grid className={styles.grid_item} item sm={3} md={3} lg={3} xl={3} >
                                <h3>More</h3>
                                <ul>
                                    <li><a href="/pages/contact-us" title="Contact Us">Contact Us</a></li>
                                    <li><a href="/pages/faqs" title="FAQs">FAQs</a></li>
                                    <li><a href="/pages/shipping-info" title="Shipping Info">Shipping Info</a></li>
                                    <li><a href="https://www.tazachocolate.com/pages/return-policy" title="Return Policy">Return Policy</a></li>
                                    <li><a href="/pages/careers" title="Careers">Careers</a></li>
                                    <li><a href="/apps/store-locator" title="Find Us in Stores">Find Us in Stores</a></li>
                                    <li><a href="/pages/press" title="Press">Press</a></li>
                                </ul>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={styles.footer_upper_right}>
                        <h3>JOIN OUR MAILING LIST</h3>
                        <form action="">
                            <input type="text" name="" id="" placeholder="Name" />
                            <input type="email" name="" id="" placeholder="Email" />
                            <input type="submit" value="SIGN UP" />
                        </form>
                        <ul className={styles.footersocial}>
                            <li><a href="##" className={styles.facebook}></a></li>
                            <li><a href="##" className={styles.instagram}></a></li>
                            <li><a href="##" className={styles.pinterest}></a></li>
                            <li><a href="##" className={styles.twitter}></a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footer_lower}>
                    <div className={styles.hr}>
                        <hr className={styles.thin} />
                    </div>
                    <div className={styles.footer_lower_bottom}>
                        <div className={styles.footer_lower_left}>
                            <div className={styles.footer_logo}>
                                <img src="https://cdn.shopify.com/s/files/1/0974/7668/t/8/assets/taza-white-footer.png" width="77px" alt="" />
                            </div>
                            <div className={styles.credits}>
                                <h4>TAZA CHOCOLATE</h4>
                                <address>561 Windsor Street, Somerville MA 02143561 Windsor Street, Somerville MA 02143</address>
                                <p className={styles.copyright}>
                                    © 2021 Taza Chocolate. All rights reserved.<br />
                                Web design by <a href="http://www.jumpingjackrabbit.com/" target="_blank">Jackrabbit</a>
                                </p>
                            </div>
                        </div>
                        <div className={styles.footer_lower_right}>
                            <div className={styles.badges}>
                                <img src="https://cdn.shopify.com/s/files/1/0974/7668/files/taza-badges-all_400x.png" className={styles.first} alt="" />
                                <img src="https://cdn.shopify.com/s/files/1/0974/7668/files/taza-badges-all-stacked_400x.png" className={styles.second} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom_corner_share}>
                <div>
                    <button onClick={() => setHidden(prev => !prev)}>SHARE</button>
                </div>
                {
                    hidden &&
                      <>
                        <div><a href="##" className={styles.facebook}></a></div>
                        <div><a href="##" className={styles.instagram}></a></div>
                        <div><a href="##" className={styles.pinterest}></a></div>
                        <div><a href="##" className={styles.twitter}></a></div>
                        </>
                            }
            </div>
                    </div>
    )
}
