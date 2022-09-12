import axios from "axios";
import { Music } from "./Music";

export const getInfo = async(id: number[]): Promise<Music[]> =>
  (await axios.get(`/song/detail?ids=${id.join(",")}`))
  .data.songs.map(({name,id,ar,al}: any) => ({
    name,id,
    artist:ar[0].name,
    album:al.name,
    picUrl:al.picUrl
  }));

