import { getTheaterBrands } from "modules/Home/slices/theaterBrandSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Center,
  Container,
  Image,
  SegmentedControl,
  Select,
  Space,
  Loader,
} from "@mantine/core";
import { useMediaQuery } from "@mui/material";
import CinemaList from "./CinemaList";
import CinemaShowTime from "./CinemaShowTime";
const Cinema = () => {
  const isMobile = useMediaQuery("(max-width: 576px)");
  const { theaterBrands, isLoading } = useSelector(
    (state) => state.theaterBrand
  );
  const [theaterId, setTheaterId] = useState();
  const defaultTheater = theaterBrands[0]?.maHeThongRap;
  const [theaterCluster, setTheaterCluster] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTheaterBrands());
  }, []);
  const segmentedItems = theaterBrands?.map((item) => ({
    value: item.maHeThongRap,
    label: (
      <Center>
        <Image src={item.logo} height={40} width={40} />
      </Center>
    ),
  }));
  const selectItems = theaterBrands?.map((item) => ({
    value: item.maHeThongRap,
    label: item.tenHeThongRap,
  }));
  return (
    <Container size={1320}>
      {isLoading && <Loader size={100} variant="dots" />}
      {!isLoading && theaterBrands.length > 0 && (
        <>
          {!isMobile && (
            <SegmentedControl
              onChange={(value) => setTheaterCluster(value)}
              data={segmentedItems}
              defaultValue={defaultTheater || ""}
              size="md"
              color="blue"
              radius={8}
              fullWidth
            />
          )}
          {isMobile && (
            <Select
              defaultValue={theaterCluster}
              data={selectItems}
              onChange={(value) => setTheaterCluster(value)}
            />
          )}
        </>
      )}
      <Space h={32} />
      <CinemaList
        onGetTheater={(id) => setTheaterId(id)}
        theaterCluster={theaterCluster || defaultTheater}
      />
      <Space h={32} />
      <CinemaShowTime
        theaterId={theaterId || ""}
        theaterCluster={theaterCluster}
      />
    </Container>
  );
};

export default Cinema;
