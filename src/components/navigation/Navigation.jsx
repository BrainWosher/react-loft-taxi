import React, {PureComponent} from 'react';
import css from './style.module.css';
import Button from '@material-ui/core/Button';

class Navigation extends PureComponent {
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
            <Button onClick= {this.handleClick} className={this.getActiveStyle()}>
                { page }
            </Button>
        );
    }
}

export default Navigation;