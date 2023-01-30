export interface Music {
  id: number;
  name: string;
  artists: Artist[];
  album: Album;
  duration: number;
  copyrightId: number;
  status: number;
  alias: any[];
  rtype: number;
  ftype: number;
  transNames: string[];
  mvid: number;
  fee: number;
  rUrl?: any;
  mark: number;
}

interface Album {
  id: number;
  name: string;
  artist: Artist;
  publishTime: number;
  size: number;
  copyrightId: number;
  status: number;
  picId: number;
  alia: string[];
  mark: number;
}

interface Artist {
  id: number;
  name: string;
  picUrl?: any;
  alias: any[];
  albumSize: number;
  picId: number;
  fansGroup?: any;
  img1v1Url: string;
  img1v1: number;
  trans?: any;
}
