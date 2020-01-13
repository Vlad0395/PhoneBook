import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import ImagejCrop from './ImagejCrop';
import Grid from '@material-ui/core/Grid';
import Styles from '../styles/StyleDialog';

class MaxWidthDialog extends Component {
	state = {
		fullWidth: true,
		maxWidth: 'sm',
	};

	handleMaxWidthChange = event => {
		this.setState({
			[event.target.value]: event.target.value,
		});
	};

	handleFullWidthChange = event => {
		this.setState({
			[event.target.value]: event.target.value,
		});
	};
	render() {
		const {
			classes,
			src,
			crop,
			croppedImageUrl,
			onSelectFile,
			onImageLoaded,
			onCropComplete,
			onCropChange,
			open,
			handleClose,
		} = this.props;
		const { fullWidth, maxWidth } = this.state;
		return (
			<Grid>
				<Dialog
					fullWidth={fullWidth}
					maxWidth={maxWidth}
					open={open}
					onClose={handleClose}
					aria-labelledby="max-width-dialog-title"
				>
					<DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
					<DialogContent>
						<DialogContentText>You can set my maximum width and whether to adapt or not.</DialogContentText>
						<form className={classes.form} noValidate>
							<FormControl className={classes.formControl}>
								<ImagejCrop
									src={src}
									crop={crop}
									croppedImageUrl={croppedImageUrl}
									onSelectFile={onSelectFile}
									onImageLoaded={onImageLoaded}
									onCropComplete={onCropComplete}
									onCropChange={onCropChange}
								/>
							</FormControl>
						</form>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Ok
						</Button>
					</DialogActions>
				</Dialog>
			</Grid>
		);
	}
}

export default withStyles(Styles)(MaxWidthDialog);
