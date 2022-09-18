import axios from 'axios'
import { getInfo } from './getInfo'
import type { Music } from './type'

export const searchMusic = async (key: string): Promise<Music[]> => {
  const searchResp = await axios.get(`/search?keywords=${key}`)
  const idList = searchResp.data.result.songs.map(
    (item: { id: number }) => item.id,
  )
  const musicInfos = await getInfo(idList)
  return musicInfos
}
