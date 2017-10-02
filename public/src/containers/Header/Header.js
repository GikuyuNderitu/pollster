import React, {Component} from 'react';
import { SmallScreen, Desktop } from '../../common/Responsive';
import { MenuIcon } from '../../common/ReactIcons';
import './Header.css'

import {blue500} from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'
import Drawer from 'material-ui/Drawer'
import CancelIcon from 'material-ui/svg-icons/navigation/cancel'
import {ToolbarGroup, Toolbar, ToolbarTitle, ToolbarSeparator} from 'material-ui/Toolbar'

const menuIconStyle = {height: '36px', minWidth: '36px'}
const endToolBarStyle = {marginRight: '5px'}

const Nav = (props) => (
    <nav className="Nav-mobile">
        <FlatButton
            onClick={props.toggleSideNav}
            icon={<MenuIcon />}
            style={menuIconStyle} />
    </nav>
)

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }

        this.toggleSideNav = this.toggleSideNav.bind(this);
    }
    toggleSideNav() {
        this.setState({open: !this.state.open})
    }
    render() {
        return (
            <header>
                <Toolbar>
                    <ToolbarGroup>
                        <ToolbarTitle text="Pollster" />
                    </ToolbarGroup>
                    <ToolbarGroup 
                        lastChild={true}
                        style={endToolBarStyle} >
                        <SmallScreen>
                            <Nav toggleSideNav={this.toggleSideNav}/>
                            <Drawer
                                docked={false}
                                width={300}
                                onRequestChange={(open) => this.setState({open})}
                                open={this.state.open}>
                                <Toolbar>
                                    <ToolbarGroup>
                                        <ToolbarTitle text="Menu"></ToolbarTitle>
                                    </ToolbarGroup>
                                    <ToolbarGroup lastChild={true}>
                                        <FlatButton 
                                            icon={<CancelIcon />}
                                            color={blue500}
                                            onClick={this.toggleSideNav}
                                            style={menuIconStyle} />
                                    </ToolbarGroup>
                                </Toolbar>
                            </Drawer>
                        </SmallScreen>
                        <Desktop>
                        </Desktop>
                    </ToolbarGroup>
                </Toolbar>


            </header>
        )
    }
}

export default Header;