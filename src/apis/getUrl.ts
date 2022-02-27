import axios from "axios";

export default async function getUrl(id: number): Promise<string> {
  let res = "";
  const cookie =
    "MUSIC_R_T=1454311071243; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/openapi/clientlog;;MUSIC_U=6f1c5aa1918db87f42c583135f64c2750669c3fdc54f1b8856468d29cf746b4d519e07624a9f0053d78b6050a17a35e705925a4e6992f61d07c385928f88e8de; Max-Age=1296000; Expires=Mon, 14 Mar 2022 11:28:27 GMT; Path=/;;MUSIC_R_T=1454311071243; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/weapi/clientlog;;MUSIC_R_T=1454311071243; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/weapi/feedback;;MUSIC_A_T=1454310986056; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/wapi/feedback;;__csrf=e0409255c459cc1c8b463002620374c3; Max-Age=1296010; Expires=Mon, 14 Mar 2022 11:28:37 GMT; Path=/;;MUSIC_A_T=1454310986056; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/neapi/feedback;;MUSIC_A_T=1454310986056; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/eapi/feedback;;MUSIC_A_T=1454310986056; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/api/feedback;;MUSIC_A_T=1454310986056; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/eapi/clientlog;;MUSIC_R_T=1454311071243; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/eapi/clientlog;;MUSIC_A_T=1454310986056; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/weapi/feedback;;MUSIC_R_T=1454311071243; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/neapi/feedback;;MUSIC_R_T=1454311071243; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/wapi/clientlog;;MUSIC_R_T=1454311071243; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/neapi/clientlog;;MUSIC_A_T=1454310986056; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/neapi/clientlog;;__remember_me=true; Max-Age=1296000; Expires=Mon, 14 Mar 2022 11:28:27 GMT; Path=/;;MUSIC_R_T=1454311071243; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/eapi/feedback;;MUSIC_R_T=1454311071243; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/api/clientlog;;MUSIC_A_T=1454310986056; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/weapi/clientlog;;MUSIC_R_T=1454311071243; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/wapi/feedback;;MUSIC_A_T=1454310986056; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/wapi/clientlog;;MUSIC_A_T=1454310986056; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/api/clientlog;;MUSIC_A_T=1454310986056; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/openapi/clientlog;;MUSIC_SNS=; Max-Age=0; Expires=Sun, 27 Feb 2022 11:28:27 GMT; Path=/;MUSIC_R_T=1454311071243; Max-Age=2147483647; Expires=Fri, 17 Mar 2090 14:42:34 GMT; Path=/api/feedback;";
  await axios
    .get(
      `https://api2.163.dustella.net/song/url?id=${id}&cookie=${encodeURIComponent(
        cookie
      )}`
    )
    .then((response) => {
      res = response.data.data[0].url;
    });
  return res;
}
