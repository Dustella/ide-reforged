import type { Component } from "solid-js"
import { For, createEffect, createSignal, onMount } from "solid-js"
import type { MusicDetail } from "../types"

const TheList: Component<{
  query: (page: number) => Promise<{
    songs: MusicDetail[]
    hasMore: boolean
    songCount: number
  }>
}> = (props) => {
  const [data, setData] = createSignal<MusicDetail[]>([])
  const [count, setCount] = createSignal(0)
  const [page, setPage] = createSignal(1)

  onMount(async () => {
    const { songs, songCount } = await props.query(page())
    setData(songs)
    setCount(songCount)
  })

  createEffect(() => props.query(page()).then(({ songs }) => setData(songs)))

  return (
    <>
      <For each={data()}>
        {(item) => (
          <div class="h-20 card card-side shadow-md m-2 p-2 bg-white">
            <figure>
              <img src={item.al.picUrl} alt="Movie" class="h-20" />
            </figure>
            <div class="card-body p-1 pl-4">
              <h1>{item.name}</h1>
              <p>{item.al.name}</p>
            </div>
          </div>
        )}
      </For>
    </>
  )
}

export default TheList
