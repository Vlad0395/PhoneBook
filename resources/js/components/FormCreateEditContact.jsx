import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import TextField from '@material-ui/core/TextField';
import PhoneIcon from '@material-ui/icons/Phone';
import FormatedInput from './FormatedInput';
import CompanyIcon from '@material-ui/icons/Business';
import EmailIcon from '@material-ui/icons/Email';
import CakeIcon from '@material-ui/icons/Cake';
import DialogWindow from './DialogWindow';
import Avatar from '@material-ui/core/Avatar';

const Styles = theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: 200,
		},
	},
	appBar: {
		position: 'relative',
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
	},
	input: {
		display: 'none',
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	photo: {
		position: 'relative',
		left: '-13px',
		top: '14px',
		'&:hover': {
			'& $btnPhoto': {
				display: 'inline-block',
			},
		},
	},
	birthDay: {
		width: '200px',
	},
	textField: {
		width: 200,
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
	btnPhoto: {
		position: 'absolute',
		top: '14px',
		left: '12px',
		display: 'none',
	},
});

class FormCreateEditContact extends Component {
	state = {
		/**state FormContact */
		src: null,
		crop: {
			unit: '%',
			width: 30,
			// aspect: 16 / 9,
		},
		croppedImageUrl: null,
		/**endState FormContact */
		/**state DialogWindow */
		openDialog: false,
		/**state DialogWindow */
	};

	/***FormContact function */

	onSelectFile = e => {
		if (e.target.files && e.target.files.length > 0) {
			const reader = new FileReader();
			reader.addEventListener('load', () => this.setState({ src: reader.result }));
			reader.readAsDataURL(e.target.files[0]);
		}
	};

	// If you setState the crop in here you should return false.
	onImageLoaded = image => {
		this.imageRef = image;
	};

	onCropComplete = crop => {
		this.makeClientCrop(crop);
	};

	onCropChange = crop => {
		this.setState({ crop });
	};

	async makeClientCrop(crop) {
		if (this.imageRef && crop.width && crop.height) {
			const croppedImageUrl = await this.getCroppedImg(this.imageRef, crop, 'newFile.jpeg');
			this.props.handleChange({ target: { value: croppedImageUrl.blob, name: 'photo_contact' } });
			this.setState({ croppedImageUrl: croppedImageUrl.url });
		}
	}

	getCroppedImg(image, crop, fileName) {
		const canvas = document.createElement('canvas');
		const scaleX = image.naturalWidth / image.width;
		const scaleY = image.naturalHeight / image.height;
		canvas.width = crop.width;
		canvas.height = crop.height;
		const ctx = canvas.getContext('2d');

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
					reject(new Error('Canvas is empty'));
					return;
				}
				blob.name = fileName;
				window.URL.revokeObjectURL(this.fileUrl);
				this.fileUrl = window.URL.createObjectURL(blob);
				resolve({
					url: this.fileUrl,
					blob,
				});
			}, 'image/jpeg');
		});
	}
	/***End FormContact function */ /***DialogWindow */
	handleClickOpen = () => {
		this.setState({
			openDialog: !this.state.openDialog,
		});
	};
	/***EndDialogWindow */

	render() {
		const { classes, handleChange, first_name, last_name, company, birth_day, mobile, email } = this.props;
		/***FormContact state */
		const { src, crop, croppedImageUrl } = this.state;
		/***End FormContact state */ return (
			<Grid>
				<Grid container spacing={2} alignItems="center" justify="center">
					<Grid item md={6}>
						<Grid container spacing={2} alignItems="flex-end" justify="center" direction="row">
							<Grid item xs={1} className={classes.photo}>
								{/* <input
											accept="image/*"
											className={classes.input}
											id="icon-button-file"
											type="file"
										/> */}
								{/* <label htmlFor="icon-button-file"> */}
								<Avatar
									alt="Remy Sharp"
									src={croppedImageUrl ? croppedImageUrl : '/images/Contacts-icon.png'}
									className={classes.large}
								/>
								<IconButton
									className={classes.btnPhoto}
									color="primary"
									aria-label="upload picture"
									component="span"
									onClick={() => this.handleClickOpen()}
								>
									<PhotoCamera />
								</IconButton>
								{/* </label> */}
							</Grid>
							<Grid item xs={3}>
								<TextField
									id="first_name"
									label="Your Name"
									name="first_name"
									onChange={handleChange}
									value={first_name}
								/>
							</Grid>
							<Grid item xs={3}>
								<TextField
									id="last_name"
									label="Your Surname"
									name="last_name"
									onChange={handleChange}
									value={last_name}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid container spacing={2} alignItems="center" justify="center">
					<Grid item md={6}>
						<Grid container spacing={2} alignItems="flex-end" justify="center" direction="row">
							<Grid item xs={1}>
								<PhoneIcon className={classes.phone} />
							</Grid>
							<Grid item xs={6}>
								<FormatedInput name="mobile" mobile={mobile} onChange={handleChange} />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid container spacing={2} alignItems="center" justify="center">
					<Grid item md={6}>
						<Grid container spacing={2} alignItems="flex-end" justify="center" direction="row">
							<Grid item xs={1}>
								<CompanyIcon />
							</Grid>
							<Grid item xs={6}>
								<TextField
									className={classes.birthDay}
									id="company"
									label="Company"
									name="company"
									onChange={handleChange}
									value={company}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid container spacing={2} alignItems="center" justify="center">
					<Grid item md={6}>
						<Grid container spacing={2} alignItems="flex-end" justify="center" direction="row">
							<Grid item xs={1}>
								<EmailIcon />
							</Grid>
							<Grid item xs={6}>
								<TextField
									id="email"
									label="Email"
									name="email"
									onChange={handleChange}
									value={email}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid container spacing={2} alignItems="center" justify="center">
					<Grid item md={6}>
						<Grid container spacing={2} alignItems="flex-end" justify="center" direction="row">
							<Grid item xs={1}>
								<CakeIcon />
							</Grid>
							<Grid item xs={6}>
								<TextField
									id="birth_day"
									name="birth_day"
									label="Birthday"
									type="date"
									onChange={handleChange}
									value={birth_day}
									className={classes.textField}
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<DialogWindow
					src={src}
					crop={crop}
					open={this.state.openDialog}
					handleClose={this.handleClickOpen}
					croppedImageUrl={croppedImageUrl}
					onSelectFile={this.onSelectFile}
					onImageLoaded={this.onImageLoaded}
					onCropComplete={this.onCropComplete}
					onCropChange={this.onCropChange}
					getCroppedImg={this.getCroppedImg}
					makeClientCrop={this.makeClientCrop}
				/>
			</Grid>
		);
	}
}

export default connect()(withStyles(Styles)(FormCreateEditContact));
