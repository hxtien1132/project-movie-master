// fetchDataFromApi(`/movie/now_playing`).then((res) => console.log(res));
import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const NowPlaying = () => {
  const [endpoint, setEndpoint] = useState("airing_today");
  const { data, loading } = useFetch(`/tv/${endpoint}`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Tv channel" ? "airing_today" : "on_the_air");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">TV shows </span>
        <SwitchTabs data={["Tv channel", "Talk show"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default NowPlaying;
