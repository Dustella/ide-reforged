import axios from "axios";
import Music from "./Music";

export default async function getInfo(id: number[]): Promise<Music[]> {
  const ids = id.join(",");
  const ls = [] as Music[];
  await axios
    .get(`https://api2.163.dustella.net/song/detail?ids=${ids}`)
    .then((res) => {
      for (const info of res.data.songs) {
        const music = new Music(
          info.name,
          info.id,
          info.ar[0].name,
          info.al.name,
          info.al.picUrl
        );
        ls.push(music);
      }
    })
    .catch();
  return ls;
}
