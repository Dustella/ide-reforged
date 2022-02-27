import { MusicLsBuilder, Music } from "./MusicBuilder";
import axios from "axios";

export default async function searchMusic(
  key: string | undefined
): Promise<Music[]> {
  let res: Music[] = [];
  await axios
    .get(`https://api2.163.dustella.net/search?keywords=${key}`)
    .then((response) => {
      const ids = [];
      for (const info of response.data.result.songs) ids.push(info.id);
      const infols = new MusicLsBuilder(ids);
      res = infols.ls;
    });
  return res;
}
