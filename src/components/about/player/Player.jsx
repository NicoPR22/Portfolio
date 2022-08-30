import React, { useState, useRef, useEffect } from "react";
import { BsPlay } from "react-icons/bs";
import { BsPause } from "react-icons/bs";
import { BsSkipBackward } from "react-icons/bs";
import { BsSkipForward } from "react-icons/bs";
import "./Player.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const songsdata = [
  {
    title: "American Woman",
    author: "The Guess Who",
    index: S1,
  },
  {
    title: "Do I Wanna Know",
    author: "Artic Monkeys",
    index: S2,
  },
  {
    title: "Sabotage",
    author: "Beastie Boys",
    index: S3,
  },
  {
    title: "Behind The Sun",
    author: "Living Coulor",
    index: S4,
  },
];

const Player = () => {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(
    { title: songsdata[0].title,
      author: songsdata[0].author,
      index: songsdata[0].index,
      progress: 0,
      length: 0
    });

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    console.log(duration)
    console.log(ct)


    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration * 1/60,
    });
  };

  const PlayPause = () => {
    setisplaying(!isplaying);
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };

  const skipBack = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);
    if (index == 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    audioElem.current.currentTime = 0;
  };

  const skiptoNext = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);

    if (index == songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    audioElem.current.currentTime = 0;
  };

  return (
    <>
      <div className="player">
        <div className="player__display">
          <Carousel
            infiniteLoop={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            swipeable={true}
            draggable={true}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            centerMode={true}
          >
            <p className="player__artist">{currentSong.author}</p>
            <p className="player__song">{currentSong.title}</p>
          </Carousel>
        </div>
        {/*
        <input
          type="range"
          value={currentSong.progress}
          className="player__level"
        />
        <div className="audio__duration">
          <div className="start">{ currentSong.progress }</div>
          <div className="end">{ currentSong.length }</div>
        </div>
        */}
        <audio
          src={currentSong.index}
          ref={audioElem}
          onTimeUpdate={onPlaying}
          controls
          id="audio"
          className="player__audio"
        >
          <source src="" type="audio/mpeg" />
        </audio>

        <div className="player__controls">
          <div className="player__btn  btn btn-primary">
            <BsSkipBackward onClick={skipBack} />
          </div>
          <div className="player__btn  btn btn-primary">
            {isplaying ? (
              <BsPause onClick={PlayPause} />
            ) : (
              <BsPlay onClick={PlayPause} />
            )}
          </div>
          <div className="player__btn btn btn-primary">
            <BsSkipForward onClick={skiptoNext} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;

/*const audio = document.getElementById("audio"); const playPause = document.getElementById("play");
playPause.addEventListener("click", o = { if (audio.paused_|| audio.ended) {
playPause.querySelector('.pause-btn").classList.toggle("hide"); playPause.querySelector('.play-btn").classList.toggle("hide"); audio.play(); else { audio.pause(); playPause.querySelector('.pause-btn").classList.toggle "hide"); playPause.querySelector(".play-btn").classList.toggle("hide");
}); */
