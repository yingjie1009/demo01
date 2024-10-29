import requests from "@/utils/resquest";

export const getWeather = (params: any) => {
  return requests({
    url: "/v7/weather/now",
    method: "get",
    params: params,
  });
};
