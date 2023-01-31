import type { Component } from "solid-js"
import { For, createEffect, createSignal } from "solid-js"
import type { MusicDetail } from "../types"

const TheList: Component<{
  query: (page: number) => Promise<{
    songs: MusicDetail[]
    hasMore: boolean
    songCount: number
  }>
}> = (props) => {
  const [data, setData] = createSignal<MusicDetail[]>([])
  const [count, setCount] = createSignal(2)
  const [page, setPage] = createSignal(0)

  createEffect(() =>
    props.query(page()).then(({ songs, songCount }) => {
      setData(songs)
      setCount(Math.ceil(songCount / 5))
    })
  )

  return (
    <>
      <For each={data()}>
        {(item) => (
          <div class="h-20 card card-side shadow-md m-2 p-0 bg-white w-full m-2">
            <figure
              class="h-20 w-20 m-0"
              style={{
                "background-image": `linear-gradient(to left, #FFFFFF, transparent),url(${item.al.picUrl})`,
              }}
            />
            <div class="card-body p-1 pl-4 ">
              <h1 class="text-base font-bold">{item.name}</h1>
              <p class="text-sm text-gray">{item.al.name}</p>
            </div>
          </div>
        )}
      </For>
      <div class="btn-group mt-4">
        <button
          class="btn"
          onClick={() =>
            setPage((a) => {
              return a > 0 ? a - 1 : a
            })
          }
        >
          «
        </button>
        <button class="btn">
          Page {page() + 1} of {count()}
        </button>
        <button
          class="btn"
          onClick={() =>
            setPage((a) => {
              return a < count() ? a + 1 : 0
            })
          }
        >
          »
        </button>
      </div>
    </>
  )
}

export default TheList
