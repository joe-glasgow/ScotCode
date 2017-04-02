import React, { Component } from 'react';
import Sidebar from '../../../elements/Sidebar';

export default class Interests extends Component {
    render() {
        return (
            <div className="o-layout o-layout--right o-layout--flush u-1/1">
                <Sidebar />
                <div className="o-layout__item u-2/3@tablet u-2/3@desktop u-1/1@mobile">
                    <div className="u-padding-left-small u-padding-right-small">
                        <h2 className="center-on-mobile">Hey there!</h2>
                        <p>You've probably guessed my name's Joe and I'm an experienced Web Developer from Glasgow, Scotland.</p>
                        <p>I'm a code enthusiast and love learning new things. I've worked for some high profile clients and some really low key ones too.
                            Lots of the work I have done has been for Global or Internal projects so you can ask me about these - I'll stick the things that are public in my portfolio section!
                        </p>
                        <p>
                            When I'm not coding I like to attend meetups, go to the gym, game on my PS4 or Switch and generally socialise!
                        </p>
                        <p>
                            If you want to find out more or check my availability, please feel free to <a href="mailto:web@devbyjoe.co.uk" target="_blank">Contact me.</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}