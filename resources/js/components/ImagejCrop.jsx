import React, { Component } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Grid from '@material-ui/core/Grid';
// import Dialog from "./DialogWindow"

class ImagejCrop extends Component {
	render() {
		const { src, crop, croppedImageUrl, onSelectFile, onImageLoaded, onCropComplete, onCropChange } = this.props;

		return (
			<div className="App">
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<div>
							<input type="file" onChange={onSelectFile} />
						</div>
						<Grid container spacing={1}>
							<Grid item xs={6}>
								{src && (
									<ReactCrop
										src={src}
										crop={crop}
										onImageLoaded={onImageLoaded}
										onComplete={onCropComplete}
										onChange={onCropChange}
									/>
								)}
							</Grid>
							<Grid item xs={6}>
								{croppedImageUrl && <img alt="Crop" style={{ maxWidth: '' }} src={croppedImageUrl} />}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}
export default ImagejCrop;
