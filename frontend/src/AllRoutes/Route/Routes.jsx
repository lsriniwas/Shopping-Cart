import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainBody } from '../../Components/Body/MainBody'
import { SocialMedia } from '../../Components/FixedSocialMediaHandle/SocialMedia'
import { Footer } from '../../Components/Footer/Footer'
import { FreeShipping } from '../../Components/FreeShipping/FreeShipping'
import { LearnMore } from '../../Components/LearnMore/LearnMore'
import { Navbar } from '../../Components/Navbar/Navbar'
import { BarPage } from '../../Pages/BarPage'

class Routes extends Component {

    render() {
        return (
            <div>
                <SocialMedia />
                {/* <Navbar /> */}
                <Switch>
                    <Route path="/" exact>
                        <MainBody />
                    </Route>
                    <Route path="/collections/amaze-bars" exact>
                        <BarPage/>
                    </Route>
                </Switch>
                <FreeShipping />
                <LearnMore />
                <Footer />
            </div>
        )
    }
}

export { Routes }
