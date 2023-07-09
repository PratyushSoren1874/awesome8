import React, { Component } from 'react';
import './Navbar.css';
import { Grid } from '@mui/material';
import arrow from '../../images/arrow.png';
import bell from '../../images/bell.png';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state =  { }
    }
    render() {
        return (
            <div>
            <div className="navbar_barContent">
                <Grid container>

                    <Grid item xs={4}>
                    <img className="arrow" src={arrow} width="25px"/>
                    </Grid>

                    <Grid item xs={4}>자유톡
                    </Grid>

                    <Grid item xs={4} style={{"display":"flex"}}>
                        <img className="notification" src={bell} width="25px"/>
                    </Grid>
                </Grid>
            </div>
        </div>
        );
    }
}

export default Navbar;