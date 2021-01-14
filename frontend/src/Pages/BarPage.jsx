import React, { useEffect } from 'react'
import { fetchCollectionBars } from '../Redux/Collections/actions'
import { useDispatch, useSelector } from "react-redux";
import styles from "../Styles/BarPage/BarPage.module.css"
import "../Styles/BarPage/BarPage.module.css"
import { Breadcrumbs, Grid, Paper, Typography } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
export const BarPage = () => {
    const dispatch = useDispatch()
    const bars = useSelector(state => state.collectionsBarReducer.bars)
    const loading = useSelector(state => state.collectionsBarReducer.isLoading)
    useEffect(() => {
        document.title = `Bars —Taza Chocolate`
        dispatch(fetchCollectionBars())
    }, [dispatch])
    const handleClick = () => {

    }
    console.log(bars)
    return !loading && (
        <div className={styles.root}>
            <div>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    <Link color="inherit" to="/" onClick={handleClick}>
                        HOME
                     </Link>
                    <Link color="inherit" to="/" onClick={handleClick}>
                        BUY
                    </Link>
                    <Typography color="textPrimary">BAR</Typography>
                </Breadcrumbs>
            </div>
            <div className={styles.title_img}>
                <div>
                    <h1>bars</h1>
                </div>
            </div>
            <div className={styles.info}>
                <div>
                    <span>Our Chocolate Bars take stone ground chocolate to another dimension by mixing incredible flavor combinations into our minimally processed, bold chocolate.</span>
                </div>
            </div>
            <div className={styles.body_wrapper}>
                <div>
                    <div className={styles.grid_data}>
                        {
                            bars?.map(bar => 
                                    <div  key={bar.id} item xs={3}>
                                        <div>
                                            <div className={styles.newproduct}></div>

                                            <Link to="/" title="Taza dairy-free plant-based Almond Milk Chocolate">
                                                <img src={bar.src} alt={bar.alt} />
                                            </Link>

                                            <p >
                                                <NavLink to="/" title="Almond Milk Classic">{bar.name}</NavLink>
                                            </p>
                                            <p>
                                                ${bar.price}
                                            </p>
                                            <NavLink to="/" className="buynow" title="Buy">BUY</NavLink>
                                        </div>
                                    </div>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
