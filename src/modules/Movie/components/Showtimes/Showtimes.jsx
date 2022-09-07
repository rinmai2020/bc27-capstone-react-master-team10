import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { Tabs } from "antd";

const Showtimes = ({ movieId }) => {
  // useRequest call API lấy lịch chiếu
  const [tabPosition, setTabPosition] = useState("left");
  const {
    data: showtimes,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovieDetails(movieId));

  if (!showtimes) {
    return null;
  }

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  return (
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab="Logo" key="1">
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </Tabs.TabPane>
    </Tabs>
  );
};

export default Showtimes;
