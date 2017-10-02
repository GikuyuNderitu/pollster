import React, {Component} from 'react';
import { SmallScreen, Desktop } from '../../common/Responsive';
import './Header.css';

import {Link} from 'react-router-dom'

import {blue500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';

import HomeIcon from 'material-ui/svg-icons/action/home'
import DescIcon from 'material-ui/svg-icons/action/description'
import CancelIcon from 'material-ui/svg-icons/navigation/cancel';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import PencilIcon from 'material-ui/svg-icons/content/create';
import AddIcon from 'material-ui/svg-icons/content/add';
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import {ToolbarGroup, Toolbar, ToolbarTitle, ToolbarSeparator} from 'material-ui/Toolbar';

const menuIconStyle = {height: '36px', minWidth: '36px', color:'#fff'}
const endToolBarStyle = {marginRight: '5px'}

const Nav = (props) => (
    <nav className="Nav-mobile">
        <FlatButton
            onClick={props.toggleSideNav}
            icon={<MenuIcon />}
            style={menuIconStyle} />
    </nav>
)

const DesktopNav = () => (
    <nav>
        <FlatButton />
        <FlatButton />
        <FlatButton />
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
                        <Desktop>

                        </Desktop>
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

                                <MenuItem
                                    rightIcon={<HomeIcon color="#06d" />}
                                    containerElement={<Link to="/" />}
                                    onClick={this.toggleSideNav}
                                    primaryText="Home" />
                                <Divider />
                                <MenuItem
                                    rightIcon={<DescIcon color="goldenrod" />}
                                    containerElement={<Link to="/polls" />}
                                    onClick={this.toggleSideNav}
                                    primaryText="Polls" />
                                <Divider />
                                <MenuItem 
                                    rightIcon={<AddIcon color="green" />}
                                    containerElement={<Link to="/signup" />}
                                    onClick={this.toggleSideNav}
                                    primaryText="Sign Up" />
                                <Divider />
                                <MenuItem 
                                    rightIcon={<PencilIcon color="#d21" />}
                                    containerElement={<Link to="/signin" />}
                                    onClick={this.toggleSideNav}
                                    primaryText="Sign In" />
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