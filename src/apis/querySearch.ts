import { getInfo } from "./getInfo";
import { Music } from "./Music";
import axios from "axios";

export const searchMusic = async (key: string): Promise<Music[]> =>
  await getInfo(
    (
      (
        await axios.get(`/search?keywords=${key}`)
      ).data.result.songs as { id: number }[]
    ).map(({ id }) => id)
  );
