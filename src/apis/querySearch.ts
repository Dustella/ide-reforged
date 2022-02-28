import getInfo from "./getInfo";
import Music from "./Music";
import axios from "axios";

export default async function searchMusic(
  key: string | undefined
): Promise<Music[]> {
  let res: Music[] = [];
  await axios
    .get(`https://api2.163.dustella.net/search?keywords=${key}`)
    .then(async (response) => {
      const ids = [] as number[];
      for (const info of response.data.result.songs) ids.push(info.id);
      await getInfo(ids).then((info) => {
        res = info;
      });
    });
  return res;
}
