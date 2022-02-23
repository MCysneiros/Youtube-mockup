import './VideoItem.css';

export const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div className='item VideoItem' onClick={() => onVideoSelect(video)}>
			<img
				className='ui image'
				alt={video.snippet.title}
				src={video.snippet.thumbnails.medium.url}
			/>
			<div className='content'>
				<div className='header'>{video.snippet.title}</div>
			</div>
		</div>
	);
};
