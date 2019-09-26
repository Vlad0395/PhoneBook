import React, { Component } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
// import Dialog from "./DialogWindow"

class ImagejCrop extends Component {
	render() {
		const { src, crop, croppedImageUrl, onSelectFile, onImageLoaded, onCropComplete, onCropChange } = this.props;

		return (
			<div className="App">
				<div>
					<input type="file" onChange={onSelectFile} />
				</div>
				{src && (
					<ReactCrop
						src={src}
						crop={crop}
						onImageLoaded={onImageLoaded}
						onComplete={onCropComplete}
						onChange={onCropChange}
					/>
				)}
				{croppedImageUrl && <img alt="Crop" style={{ maxWidth: '50%' }} src={croppedImageUrl} />}
			</div>
		);
	}
}
export default ImagejCrop;
