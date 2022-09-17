import { getInfo } from "./getInfo";
import { Music } from "./type";
import axios from "axios";

export const searchMusic = async (key: string): Promise<Music[]> => {
  const searchResp = await axios.get(`/search?keywords=${key}`);
  const idList = searchResp.data.result.songs.map(
    (item: { id: number }) => item.id
  );
  const musicInfos = await getInfo(idList);
  return musicInfos;
};
