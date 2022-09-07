import React, { useEffect } from "react";
import {
  Badge,
  Card,
  Grid,
  Group,
  Image,
  Loader,
  ScrollArea,
  Text,
} from "@mantine/core";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getTheaterShowtimes } from "modules/Home/slices/theaterShowtimeSlice";
const CinemaShowTIme = ({ theaterCluster, theaterId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theaterShowtimes, isLoading } = useSelector(
    (state) => state.theaterShowtime
  );
  const theater = theaterShowtimes[0]?.lstCumRap.find(
    (item) => item.maCumRap === theaterId
  );
  const movieList = theater?.danhSachPhim;
  console.log("3 ", movieList);
  const navigateHandler = (showtimeId) => {
    navigate(`/purchase/${showtimeId}`);
  };
  useEffect(() => {
    dispatch(getTheaterShowtimes(theaterCluster));
  }, [theaterCluster]);

  return (
    <>
      {isLoading && <Loader size={100} variant="dots" />}

      {!isLoading && movieList && (
        <ScrollArea
          sx={(theme) => ({
            height: theme.breakpoints.xs ? 640 : 320,
          })}
        >
          <Grid
            sx={(theme) => ({
              margin: 0,
            })}
          >
            {movieList?.map((item) => {
              return (
                <Grid.Col key={item.maPhim.toString()} md={4} sm={6}>
                  <Group
                    sx={{
                      alignItems: "flex-start",
                    }}
                  >
                    <Card withBorder sx={{ width: "30%" }}>
                      <Card.Section>
                        <Image height={160} src={item.hinhAnh} />
                      </Card.Section>
                    </Card>
                    <Group
                      sx={{
                        maxWidth: "50%",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <Text
                        color="white"
                        sx={{
                          display: "block",
                          textAlign: "left",
                          fontWeight: 500,
                          fontSize: 18,
                        }}
                      >
                        {item.tenPhim}
                      </Text>
                      <Group>
                        {item.dangChieu && (
                          <Badge color="gray" variant="outline">
                            Showing
                          </Badge>
                        )}
                        {item.hot && (
                          <Badge color="orange" variant="outline">
                            Hot
                          </Badge>
                        )}
                      </Group>
                      <Group
                        sx={{
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "4px",
                        }}
                      >
                        {item.lstLichChieuTheoPhim?.slice(-3).map((item) => {
                          return (
                            <Badge
                              onClick={() =>
                                navigateHandler(item.maLichChieu.toString())
                              }
                              variant="gradient"
                              gradient={{ from: "orange", to: "red" }}
                              key={item.maLichChieu}
                              size="lg"
                              radius="md"
                              sx={{
                                cursor: "pointer",
                                transition: "all ease 0.1s",
                                "&:hover": {
                                  transform: "scale(105%)",
                                },
                              }}
                            >
                              {new Date(
                                item.ngayChieuGioChieu
                              ).toLocaleString()}
                            </Badge>
                          );
                        })}
                      </Group>
                    </Group>
                  </Group>
                </Grid.Col>
              );
            })}
          </Grid>
        </ScrollArea>
      )}
    </>
  );
};

export default CinemaShowTIme;
