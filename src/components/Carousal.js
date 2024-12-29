import React, { useState, useRef, useEffect } from "react";
import "./Carousal.css";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";

export default function Carousal() {
  // State to track the active video index
  const [activeVideo, setActiveVideo] = useState(0);

  // Array of video sources
  const videos = [video1, video3, video4, video2, video5];

  // Refs for controlling video playback
  const videoRefs = useRef(videos.map(() => React.createRef()));

  // Function to handle play/pause toggle
  const togglePlayPause = (index) => {
    const video = videoRefs.current[index].current;
    if (video.paused) {
      video.play(); // Play the video if it's paused
    } else {
      video.pause(); // Pause the video if it's playing
    }
  };

  useEffect(() => {
    // Automatically play the selected video when the activeVideo changes
    const video = videoRefs.current[activeVideo].current;
    if (video) {
      video.play(); // Play the video when it's active
    }

    // Pause all other videos
    videoRefs.current.forEach((ref, index) => {
      if (index !== activeVideo) {
        const otherVideo = ref.current;
        if (otherVideo && !otherVideo.paused) {
          otherVideo.pause();
        }
      }
    });
  }, [activeVideo]); // Re-run this effect when the active video changes

  return (
    <div>
      <section className="home">
        {/* Render only the active video */}
        <video
          ref={videoRefs.current[activeVideo]} // Attach ref to control the active video
          key={activeVideo} // Add key to force re-render
          className="video-slide"
          muted
          loop
        >
          <source src={videos[activeVideo]} type="video/mp4" />
        </video>

        {/* Custom Play/Pause button */}
        <button
          className="play-pause-btn"
          onClick={() => togglePlayPause(activeVideo)}
        >
          {videoRefs.current[activeVideo]?.current?.paused ? "Play" : "Pause"}
        </button>

        <div className="content">
          <h1>
            Discover Yourself In
            <br />
            <span>Goa</span>
          </h1>
          <p>
            Goan Beaches, Portuguese Colony, Art galleries & museums, Wildlife
            sanctuaries. Experiences: Beach-facing shacks, Water sports,
            Surfing, Paragliding, Culture, Heritage, Sossegado.
          </p>
          <button className="btn">Book now</button>
        </div>

        <div className="slider-navigation">
          {/* Render navigation buttons */}
          {videos.map((_, index) => (
            <div
              key={index}
              className={`video-slide nav-btn ${
                index === activeVideo ? "active" : ""
              }`}
              onClick={() => setActiveVideo(index)} // Set active video index on click
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
}
