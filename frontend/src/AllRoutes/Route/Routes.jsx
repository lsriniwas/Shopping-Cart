import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainBody } from '../../Components/Body/MainBody'
import { Cart } from '../../Components/Cart/Cart'
import { SocialMedia } from '../../Components/FixedSocialMediaHandle/SocialMedia'
import { Footer } from '../../Components/Footer/Footer'
import { FreeShipping } from '../../Components/FreeShipping/FreeShipping'
import { LearnMore } from '../../Components/LearnMore/LearnMore'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Register } from '../../Components/Register/Register'
import { BarPage } from '../../Pages/BarPage'
import { Product } from '../../Pages/Product'
import { PrivateRoute } from '../Private/PrivateRoute'
import { Profile } from '../Private/Profile'

const Routes = () => {
    return (
        <div>
            <Navbar />
            <SocialMedia />
            <Switch>
                <Route path="/" exact>
                    <MainBody />

                    <FreeShipping />
                    <LearnMore />
                </Route>
                <Route path="/collections/amaze-bars" exact>
                    <BarPage />

                    <FreeShipping />
                    <LearnMore />
                </Route>
                <Route path="/collections/amaze-bars/product" exact>
                    <Product />
                    <FreeShipping />
                    <LearnMore />
                </Route>
                <PrivateRoute path="/account" exact>
                   <Profile/>
                </PrivateRoute>
                <Route path="/account/register" exact>
                    <Register />
                </Route>
                <Route path="/cart" exact>
                    <Cart />
                </Route>
                <Route exact>
                    <h1>
                        404.error
                        </h1>
                </Route>
            </Switch>

            <Footer />
        </div>
    )
}

export { Routes }
