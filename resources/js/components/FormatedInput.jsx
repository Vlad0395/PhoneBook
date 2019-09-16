import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import withStyles from '@material-ui/core/styles/withStyles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const Styles = (theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        // margin: theme.spacing(1),
    },
});



class TextMaskCustom extends Component {
    render() {
        const { inputRef, ...other } = this.props;

        return (
            <MaskedInput
                {...other}
                ref={ref => {
                    inputRef(ref ? ref.inputElement : null);
                }}
                mask={['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                placeholderChar={'\u2000'}
                showMask
            />
        );
    }
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};


class FormatInput extends Component {
    state = {
        // mobile: '(095)    -    '
    }

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value,
    //     });
    // };

    render() {
        const { classes } = this.props
        const { mobile } = this.state
        return (
            <div className={classes.container}>
                <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="formatted-text-mask-input">Mobile</InputLabel>
                    <Input
                        value={mobile}
                        // onChange={this.handleChange}
                        id="formatted-text-mask-input"
                        name='mobile'
                        inputComponent={TextMaskCustom}
                    />
                </FormControl>
            </div>
        );
    }
}

export default (withStyles(Styles)(FormatInput))