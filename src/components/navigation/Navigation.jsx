import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import css from './style.module.css';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";

class Navigation extends PureComponent {
    static propTypes = {
        page: PropTypes.string
    }
    handleClick = () =>{
        const {changePage, page} = this.props;
        changePage(page);
    }
    getActiveStyle = () => {
        if(this.props.activePage === this.props.page) {
            return css.active;
        }
        return '';
    }
    render() {
        const { page } = this.props;

        return(
            <BTN 
                handleClick={this.handleClick}
                style={this.getActiveStyle()}
                page={page}
            />
        );
    }
}

const BTN = ({page, handleClick, styles}) => {
    const history = useHistory();
    const click = () => {
        history.push(`/${page}`);
        handleClick();
    }
    return <Button onClick= {click} className={styles}>
        { page }
    </Button>
}

export default Navigation;