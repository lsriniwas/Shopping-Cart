import React from 'react'
import styles from "../../Styles/Footer/Footer.module.css"
import "../../Styles/Footer/Footer.module.css"
import { Grid } from "@material-ui/core"
export const Footer = () => {
    return (
        <div className={styles.footer_main}>
            <div className={styles.footer_wrapper}>
                <div className={styles.footer_upper}>
                    <div className={styles.footer_upper_left}>
                        <Grid container>
                            <Grid className={styles.grid_item} xs={12} lg={3} xl={3} >
                                <h3><a href="buy.com">BUY</a></h3>
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
                            <Grid className={styles.grid_item} xs={12} lg={3} xl={3} >
                                <h3>LEARN</h3>
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
                            <Grid className={styles.grid_item} xs={12} lg={3} xl={3} >
                                <h3>VISIT</h3>
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
                            <Grid className={styles.grid_item} xs={12} lg={3} xl={3} >
                                <h3>More</h3>
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
                        </Grid>
                    </div>
                    <div className={styles.footer_upper_right}>
                        <h3>JOIN OUR MAILING LIST</h3>
                        <form action="">
                            <input type="text" name="" id="" />
                            <input type="text" name="" id="" />
                            <button type="submit">SIGN UP</button>
                        </form>
                    </div>
                </div>
                <div className={styles.footer_lower}>
                    <div className={styles.hr}>
                        <hr className={styles.thin} />
                    </div>
                    <div className={styles.footer_lower_left}>
                        <div className={styles.footer_logo}>
                            <img src="https://cdn.shopify.com/s/files/1/0974/7668/t/8/assets/taza-white-footer.png" width="77px" alt="" />
                        </div>
                        <div class="credits">
                            <h4>TAZA CHOCOLATE</h4>
                            <address>561 Windsor Street, Somerville MA 02143561 Windsor Street, Somerville MA 02143</address>
                            <p className={styles.copyright}>
                                © 2021 Taza Chocolate. All rights reserved.<br/>
                                Web design by <a href="http://www.jumpingjackrabbit.com/" target="_blank">Jackrabbit</a>
                            </p>
                        </div>
                        </div>
                        <div className={styles.footer_lower_right}></div>
                    </div>
                </div>
            </div>
    )
}
