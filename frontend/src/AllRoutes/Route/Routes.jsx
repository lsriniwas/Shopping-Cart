import React, { Component } from 'react'
import { Footer } from '../../Components/Footer/Footer'
import { LearnMore } from '../../Components/LearnMore/LearnMore'

class Routes extends Component {
    render() {
        return (
            <div>
                <LearnMore/>
                <Footer/>
            </div>
        )
    }
}

export {Routes}
