export interface MusicDetail {
  name: string
  id: number
  pst: number
  t: number
  ar: Ar[]
  alia: any[]
  pop: number
  st: number
  rt: string
  fee: number
  v: number
  crbt?: any
  cf: string
  al: Al
  dt: number
  h: H
  m: H
  l: H
  sq: H
  hr?: any
  a?: any
  cd: string
  no: number
  rtUrl?: any
  ftype: number
  rtUrls: any[]
  djId: number
  copyright: number
  s_id: number
  mark: number
  originCoverType: number
  originSongSimpleData?: any
  tagPicList?: any
  resourceState: boolean
  version: number
  songJumpInfo?: any
  entertainmentTags?: any
  awardTags?: any
  single: number
  noCopyrightRcmd?: any
  mv: number
  rtype: number
  rurl?: any
  mst: number
  cp: number
  publishTime: number
  tns: string[]
}

interface H {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

interface Al {
  id: number
  name: string
  picUrl: string
  tns: any[]
  pic_str: string
  pic: number
}

interface Ar {
  id: number
  name: string
  tns: any[]
  alias: any[]
}

export interface Music {
  id: number
  name: string
  artists: Artist[]
  album: Album
  duration: number
  copyrightId: number
  status: number
  alias: any[]
  rtype: number
  ftype: number
  transNames: string[]
  mvid: number
  fee: number
  rUrl?: any
  mark: number
}

interface Album {
  id: number
  name: string
  artist: Artist
  publishTime: number
  size: number
  copyrightId: number
  status: number
  picId: number
  alia: string[]
  mark: number
}

interface Artist {
  id: number
  name: string
  picUrl?: any
  alias: any[]
  albumSize: number
  picId: number
  fansGroup?: any
  img1v1Url: string
  img1v1: number
  trans?: any
}
