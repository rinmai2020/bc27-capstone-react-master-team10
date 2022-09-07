import React, { useEffect } from "react";
import {
  Badge,
  Box,
  Grid,
  Group,
  ScrollArea,
  Text,
  Title,
} from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { getTheaters } from "modules/Home/slices/theatersSlice";
const CinemaList = ({ theaterCluster, onGetTheater }) => {
  const { theaters, isLoading } = useSelector((state) => state.theater);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!theaterCluster) return;
    dispatch(getTheaters(theaterCluster));
  }, [theaterCluster]);
  return (
    <ScrollArea
      sx={(theme) => ({
        [`@media (max-width: 375px)`]: {
          width: 339,
        },
        textAlign: "left",
      })}
    >
      <Group
        sx={(theme) => ({
          minHeight: 160,
          flexWrap: "nowrap",
          alignItems: "flex-start",
        })}
      >
        {theaters?.map((item) => {
          return (
            <Box
              className="bg-white"
              key={item.maCumRap}
              sx={(theme) => ({
                minWidth: 300,
                minHeight: 160,
                backgroundColor:
                  theme.colorScheme === "dark" ? theme.colors.dark[6] : "",
                textAlign: "left",
                padding: theme.spacing.sm,
                borderRadius: theme.radius.md,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor:
                    theme.colorScheme === "dark" ? theme.colors.dark[5] : "",
                },
              })}
              onClick={() => onGetTheater(item.maCumRap)}
            >
              <Title color="green" order={4}>
                {item.tenCumRap}
              </Title>
              <Text>{item.diaChi}</Text>
              <Badge color="green">{item.danhSachRap?.length} box</Badge>
            </Box>
          );
        })}
      </Group>
    </ScrollArea>
  );
};

export default CinemaList;
