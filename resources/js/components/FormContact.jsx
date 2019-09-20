import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import CancelContact from '@material-ui/icons/Cancel';
import SaveContact from '@material-ui/icons/CheckCircleOutline';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PhoneAndroid from '@material-ui/icons/PhoneAndroid';
import Business from '@material-ui/icons/Business';
import Email from '@material-ui/icons/Email';
import Cake from '@material-ui/icons/Cake'
import Styles from '../styles/StyleFormContact';
import FormatedInput from './FormatedInput'

class FormContact extends Component {
    state = {
        expanded: false,
        src: null,
        crop: {
            unit: "%",
            width: 30,
            aspect: 16 / 9
        }
    }
    onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", () =>
                this.setState({ src: reader.result })
            );
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    onImageLoaded = image => {
        this.imageRef = image;
    };

    onCropComplete = crop => {
        this.makeClientCrop(crop);
    };

    onCropChange = (crop, percentCrop) => {
        // You could also use percentCrop:
        // this.setState({ crop: percentCrop });
        this.setState({ crop });
    };

    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await this.getCroppedImg(
                this.imageRef,
                crop,
                "newFile.jpeg"
            );
            this.setState({ croppedImageUrl });
        }
    }

    getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                if (!blob) {
                    //reject(new Error('Canvas is empty'));
                    console.error("Canvas is empty");
                    return;
                }
                blob.name = fileName;
                console.log(blob.name, 'blob');
                window.URL.revokeObjectURL(this.fileUrl);
                this.fileUrl = window.URL.createObjectURL(blob);
                resolve(this.fileUrl);
            }, "image/jpeg");
        });
    }

    render() {
        const { classes, first_name, last_name, company, birth_day, mobile, photo_contact, email, handleChange, ActionWithData } = this.props;
        const { crop, croppedImageUrl, src } = this.state;
        let url = window.location.href;
        let id = url.substring(url.lastIndexOf('/') + 1);
        return (
            <Grid container justify="center" spacing={1}>
                <Grid container justify="center" spacing={1}>
                    <Grid item xs={3} >
                        <Grid className={classes.root}>
                            <AppBar position="static">
                                <Toolbar className={classes.header}>
                                    <Link to="/">
                                        <IconButton className={classes.menuButton} color="inherit">
                                            <CancelContact className={classes.link} />
                                        </IconButton>
                                    </Link>
                                    <Typography variant="h6" className={classes.title}>
                                        {id >= 0 ? ' Edit Contact' : 'Create Contact'}
                                    </Typography>
                                    <IconButton className={classes.menuButton} color="inherit"
                                        onClick={() => ActionWithData()}
                                    >
                                        <SaveContact />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>

                    <Grid className={classes.margin}>
                        <Grid container spacing={1} >
                            <Grid item>
                                {/* <TextField
                                    type="file"
                                    name='photo_contact'
                                    onChange={handleChange}
                                /> */}
                                <input type='file' name='photo_contact' onChange={this.onSelectFile} />
                                <Grid>
                                    {src && (
                                        <ReactCrop
                                            src={src}
                                            crop={crop}
                                            onImageLoaded={this.onImageLoaded}
                                            onComplete={this.onCropComplete}
                                            onChange={this.onCropChange}
                                        />
                                    )}
                                    {croppedImageUrl && (
                                        <img alt="Crop" style={{ maxWidth: "100%" }} src={croppedImageUrl} />
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end" >
                            <Grid item xs={2} align="center">
                                <AccountCircle />
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    fullWidth
                                    id="input-with-icon-grid"
                                    name='first_name'
                                    label="First Name"
                                    onChange={handleChange}
                                    value={first_name}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item xs={2} align="center">
                                <AccountCircle />
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    fullWidth
                                    id="input-with-icon-grid"
                                    name='last_name'
                                    label="Last Name"
                                    onChange={handleChange}
                                    value={last_name}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item xs={2} align="center">
                                <PhoneAndroid />
                            </Grid>
                            <Grid item xs={10}>
                                <FormatedInput
                                    name='mobile'
                                    mobile={mobile}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item xs={2} align="center">
                                <Business />
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    fullWidth
                                    id="input-with-icon-grid"
                                    name='company'
                                    label="Company"
                                    onChange={handleChange}
                                    value={company} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item xs={2} align="center">
                                <Email />
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    fullWidth
                                    id="input-with-icon-grid"
                                    name='email'
                                    label="email"
                                    onChange={handleChange}
                                    value={email} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item xs={2} align="center">
                                <Cake />
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    fullWidth
                                    type='date'
                                    id="input-with-icon-grid"
                                    name='birth_day'
                                    onChange={handleChange}
                                    value={birth_day} />
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid >
            </Grid >


        );
    }
}

export default connect()(withStyles(Styles)(FormContact))
