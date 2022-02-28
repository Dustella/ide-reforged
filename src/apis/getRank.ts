import axios from "axios";
import Music from "./Music";

export default async function getRank(): Promise<Music[]> {
  const result = [] as Music[];
  axios.get("https://api.ide.dustella.net/getRank").then((response) => {
    console.log(response.data);
  });
  return result;
}
