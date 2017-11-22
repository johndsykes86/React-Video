import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) =>{
  if (props.onVideoSelect===null) return(<div className="empty">please search for a video</div>)
  const videoItems = props.videos.map((video, index)=> {
    return (
      <VideoListItem
        videos={props.videos}
        onVideoSelect={props.onVideoSelect}
        video={video}
        key={video.etag}
      />
    )
  })

  return(
    <ul className="col-md-4 list-group">

      {videoItems}
    </ul>
  )
}

export default VideoList
