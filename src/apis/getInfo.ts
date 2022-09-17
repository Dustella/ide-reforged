import axios from "axios";
import { Music } from "./type";

export const getInfo = async(id: number[]): Promise<Music[]> =>{
  const ids = id.join(",");
  const resp = await axios.get(`/song/detail?ids=${ids}`)
  const musicInfos = resp.data.songs.map(({name,id,ar,al}: {
    name: string;
    id: number;
    ar: { name: string }[];
    al: { name: string; picUrl: string };
  }) => ({
    name,id,
    artist:ar[0].name,
    album:al.name,
    picUrl:al.picUrl
  }));
  return musicInfos as Music[];
}