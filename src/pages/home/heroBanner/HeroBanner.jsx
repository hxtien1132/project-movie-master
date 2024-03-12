import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import dayjs from "dayjs";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import { fetchDataFromApi } from "../../../utils/api";
const HeroBanner = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const [background, setBackground] = useState("");
  const [data, setData] = useState({});
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    fetchDataFromApi(`/${endpoint}/upcoming`)
      .then((res) => {
        const obj = res?.results?.[Math.floor(Math.random() * 10)];
        setData(obj);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  // const obj = data?.results?.slice(0,5);
  // useEffect(() => {
  //   const bg = url.backdrop + data?.backdrop_path;
  //   setBackground(bg);
  // }, [data, background]);

  // const searchQueryHandler = (event) => {
  //   if (event.key === "Enter" && query.length > 0) {
  //     navigate(`/search/${query}`);
  //   }
  // };

  return (
    <div className="heroBanner">
      <Swiper grabCursor={true} slidesPerView={"auto"}>
        {data && <Item data={data} />}
      </Swiper>
    </div>
  );
};

const Item = (props) => {
  const data = props.data;
  const [videoId, setVideoId] = useState(null);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { url } = useSelector((state) => state.home);
  const bg = url.backdrop + data?.backdrop_path;
  const watchTrailer = () => {
    setShow(true);
  };
  fetchDataFromApi(`/movie/${data?.id}/videos`).then((res) => {
    setVideoId(res.results?.[1]?.key);
  });
  return (
    <>
      <div className="backdrop-img">
        <Img src={bg} className="img" />
      </div>
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <div className="posterBlock">
            <span className="title">{data?.title}</span>
            <div className="description">
              <div className="infoItem">
                <span className="text">
                  {dayjs(data?.release_date).format("MMM D, YYYY")}
                </span>
              </div>
              <div className="infoItem">
                <span className="text bold">Votes: </span>
                <span className="text">{data?.vote_average?.toFixed(1)}</span>
              </div>
              <div className="infoItem">
                <span className="text bold">Views: </span>
                <span className="text">{data?.popularity}</span>
              </div>
            </div>
            <div className="buttons">
              <button
                className="btn btn-wn"
                onClick={() => navigate(`/movie/${data?.id}`)}
              >
                Watch now
              </button>
              <button className="btn btn-wt" onClick={watchTrailer}>
                Watch trailer
              </button>
            </div>
          </div>
        </div>
        <VideoPopup
          show={show}
          setShow={setShow}
          videoId={videoId}
          setVideoId={setVideoId}
        />
      </ContentWrapper>
    </>
  );
};

// const HeroBanner = () => {
//   const [endpoint, setEndpoint] = useState("movie");
//   const [background, setBackground] = useState("");
//   const [data, setData] = useState([]);
//   const { url } = useSelector((state) => state.home);
//   useEffect(() => {
//     fetchDataFromApi(`/${endpoint}/upcoming`)
//       .then((res) => {
//         setData(res?.results.slice(0, 5));
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   console.log(data);

//   const watchTrailer = () => {
//     setShow(true);
//   };
//   return (
//     <div className="hero-wrap">
//       <Swiper
//         grabCursor={true}
//         spaceBetween={50}
//         slidesPerView={1}
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         {data.length > 0 &&
//           data.map((item) => (
//             <SwiperSlide key={item.id}>
//               <Item data={item} />
//             </SwiperSlide>
//           ))}
//       </Swiper>
//     </div>
//   );
// };

// const Item = (props) => {
//   // console.log("123123");
//   const data = props.data;
//   const [videoId, setVideoId] = useState(null);
//   const navigate = useNavigate();
//   const [show, setShow] = useState(false);
//   const { url } = useSelector((state) => state.home);
//   const bg = url.backdrop + data?.backdrop_path;
//   const watchTrailer = () => {
//     setShow(true);
//     fetchDataFromApi(`/movie/${data?.id}/videos`).then((res) => {
//       setVideoId(res.results?.[1]?.key);
//     });
//   };

//   return (
//     <div className="heroBanner" style={{ backgroundImage: `url(${bg})` }}>
//       {/* <div className="backdrop-img">
//         <Img src={bg} className="img" />
//       </div> */}
//       <ContentWrapper>
//         <div className="opacity-layer"></div>
//         <div className="heroBannerContent">
//           <div className="posterBlock">
//             <span className="title">{data?.title}</span>
//             <div className="description">
//               <div className="infoItem">
//                 <span className="text">
//                   {dayjs(data?.release_date).format("MMM D, YYYY")}
//                 </span>
//               </div>
//               <div className="infoItem">
//                 <span className="text bold">Votes: </span>
//                 <span className="text">{data?.vote_average?.toFixed(1)}</span>
//               </div>
//               <div className="infoItem">
//                 <span className="text bold">Views: </span>
//                 <span className="text">{data?.popularity}</span>
//               </div>
//             </div>
//             <div className="buttons">
//               <button
//                 className="btn btn-wn"
//                 onClick={() => navigate(`/movie/${data?.id}`)}
//               >
//                 Watch now
//               </button>
//               <button className="btn btn-wt" onClick={watchTrailer}>
//                 Watch trailer
//               </button>
//             </div>
//           </div>
//         </div>
//         <VideoPopup
//           show={show}
//           setShow={setShow}
//           videoId={videoId}
//           setVideoId={setVideoId}
//         />
//       </ContentWrapper>
//     </div>
//   );
// };
export default HeroBanner;
