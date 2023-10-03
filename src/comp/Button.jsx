import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './index.module.css'


export default function CustomButton({ label, variant, onClick, className, size, disabled, disabledClassName, children }) {

    const _className = cx(
        className, styles[size], styles[variant], styles.button, {[styles.disabled]:disabled, [disabledClassName]:disabled}
    )

    //if label render label otherwise renderChildren
    const renderChildren = () => {
        if (label) {
            return label;
        }
        if (children) {
            return children;
        }
        return "Button"
    }

    const handleClick=(event)=>{
        if(disabled) return;

        onClick && onClick({event});
    }
    return (
        <div className={_className} onClick={handleClick}>
            {renderChildren()}
        </div>
    )
}




CustomButton.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.arrayOf['basic', 'info', 'error'],
    size: PropTypes.arrayOf['small', 'large'],
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    disabledClassName: PropTypes.string,
    children: PropTypes.node
}

CustomButton.defaultProps = {
    label: '',
    variant: 'basic',
    size: 'small',
    disabled: false,
    disabledClassName: "",
    className: ""

}