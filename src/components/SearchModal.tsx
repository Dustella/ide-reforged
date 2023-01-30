import { Match, Switch, createMemo, createSignal } from "solid-js"
import type { Music, MusicDetail } from "../types"
import ResultList from "./ResultList"

export default () => {
  const [keyword, setKeyword] = createSignal("")
  const [tab, setTab] = createSignal("search")
  let inpute: HTMLInputElement | undefined

  const query = createMemo(() => {
    const keywordClone = keyword()
    return async (page: number) => {
      const ids = await fetch(
        `/api/netease/search?keywords=${keywordClone}&page=${page}&limit=5`
      )
        .then((a) => a.json())
        .then(
          (a: any) =>
            a.result as {
              songs: Music[]
              hasMore: boolean
              songCount: number
            }
        )
      const resp = await fetch(
        `/api/netease/song/detail?ids=${ids.songs.map((a) => a.id).join(",")}`
      )
        .then((a) => a.json())
        .then((a: any) => a.songs)
      return {
        songs: resp as MusicDetail[],
        hasMore: ids.hasMore,
        songCount: ids.songCount,
      }
    }
  })

  return (
    <>
      {/* The button to open modal */}
      <label for="my-modal-3" class="btn">
        添加歌曲
      </label>

      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative bg-gray-100">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-4 top-4"
          >
            ✕
          </label>

          <h3 class="text-xl font-bold p-2">
            <a
              class={`tab tab-lg tab-bordered ${
                tab() !== "search" ? "" : "tab-active"
              }`}
              onClick={() => setTab("search")}
            >
              搜索歌曲
            </a>
            <a
              class={`tab tab-lg tab-bordered ${
                tab() !== "rank" ? "" : "tab-active"
              }`}
              onClick={() => setTab("rank")}
            >
              排行榜
            </a>
          </h3>

          <div class="flex flex-col">
            <nav class="py-3" />
            <Switch>
              {/* begin search  */}
              <Match when={tab() === "search"}>
                <div class="p-2 w-full flex flex-row justify-between">
                  <input
                    ref={inpute}
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full mr-2"
                    // onInput={(e) => {
                    //   setKeyword(e.currentTarget.value)
                    // }}
                  />
                  <button
                    class="btn btn-primary"
                    onClick={() => setKeyword(inpute!.value)}
                  >
                    搜索
                  </button>
                </div>
                <ResultList query={query()} />
              </Match>
              {/* end search */}

              <Match when={tab() === "rank"}>aaabb</Match>
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}
