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
		src: null,
		crop: {
			unit: '%',
			width: 30,
			// aspect: 16 / 9,
		},
		croppedImageUrl: null,
		openDialog: false,
	};

	onSelectFile = e => {
		if (e.target.files && e.target.files.length > 0) {
			const reader = new FileReader();
			reader.addEventListener('load', () => this.setState({ src: reader.result }));
			reader.readAsDataURL(e.target.files[0]);
		}
	};

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

	handleClickOpen = () => {
		this.setState({
			openDialog: !this.state.openDialog,
		});
	};

	render() {
		const {
			classes,
			handleChange,
			first_name,
			last_name,
			company,
			birth_day,
			number,
			email,
			photo_contact,
			error,
		} = this.props;

		const { src, crop, croppedImageUrl } = this.state;
		return (
			<Grid container justify="center">
				<Grid container spacing={2} alignItems="center" justify="center">
					<Grid item xs={1} sm={1} md={1} lg={1} className={classes.photo}>
						<Avatar
							alt="Remy Sharp"
							src={
								croppedImageUrl
									? croppedImageUrl
									: photo_contact
									? 'images/' + photo_contact
									: 'images/Contacts-icon.png'
							}
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
					</Grid>
					<Grid item xs={4} sm={4} md={4} lg={4}>
						<Grid>
							<TextField
								id="first_name"
								label="Your Name"
								name="first_name"
								onChange={handleChange}
								value={first_name}
								error={Boolean(error && error.first_name)}
							/>
						</Grid>
						<Grid>
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
				<Grid container spacing={2} alignItems="flex-end" justify="center">
					<Grid item xs={1} sm={1} md={1} lg={1}>
						<PhoneIcon className={classes.phone} />
					</Grid>
					<Grid item xs={4} sm={4} md={4} lg={4}>
						<FormatedInput name="number" number={number} onChange={handleChange} />
					</Grid>
				</Grid>
				<Grid container spacing={2} alignItems="flex-end" justify="center">
					<Grid item xs={1} sm={1} md={1} lg={1}>
						<CompanyIcon />
					</Grid>
					<Grid item xs={4} sm={4} md={4} lg={4}>
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
				<Grid container spacing={2} alignItems="flex-end" justify="center">
					<Grid item xs={1} sm={1} md={1} lg={1}>
						<EmailIcon />
					</Grid>
					<Grid item xs={4} sm={4} md={4} lg={4}>
						<TextField
							id="email"
							label="Email"
							name="email"
							onChange={handleChange}
							value={email}
							error={Boolean(error && error.email)}
						/>
					</Grid>
				</Grid>
				<Grid container spacing={2} alignItems="flex-end" justify="center">
					<Grid item xs={1} sm={1} md={1} lg={1}>
						<CakeIcon />
					</Grid>
					<Grid item xs={4} sm={4} md={4} lg={4}>
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
					photo_contact={photo_contact}
				/>
			</Grid>
		);
	}
}

export default connect()(withStyles(Styles)(FormCreateEditContact));
