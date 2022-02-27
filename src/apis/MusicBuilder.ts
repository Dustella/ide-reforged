import axios from "axios";

export class Music {
  Name: string;
  Id: number;
  alName: string;
  arName: string;
  alSrc: string;
  constructor(
    name: string,
    id: number,
    alName: string,
    arName: string,
    alSrc: string
  ) {
    this.Name = name;
    this.Id = id;
    this.alName = alName;
    this.arName = arName;
    this.alSrc = alSrc;
  }
}

export class MusicLsBuilder {
  constructor(id: number[]) {
    let ids = "";
    for (const i of id) {
      ids += i;
      ids += ",";
    }
    ids = ids.slice(0, -1);
    // This convertes list into str
    this.ls = [];
    // init ls
    axios
      .get(`https://api2.163.dustella.net/song/detail?ids=${ids}`)
      .then((res) => {
        for (const info of res.data.songs) {
          const name: string = info.name;
          const id: number = info.id;
          const arName: string = info.ar[0].name;
          const alName: string = info.al.name;
          const alSrc: string = info.al.picUrl;
          const music = new Music(name, id, alName, arName, alSrc);
          this.ls.push(music);
        }
      })
      .catch();
  }
  ls: Music[] = [];

  getLs(): Music[] {
    return this.ls;
  }
}
