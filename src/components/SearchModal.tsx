import { Match, Switch, createSignal } from "solid-js"

export default () => {
  //   const keyword = createSignal('')
  const [tab, setTab] = createSignal("search")

  return (
    <>
      {/* The button to open modal */}
      <label for="my-modal-3" class="btn">
        添加歌曲
      </label>

      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
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
              <Match when={tab() === "search"}>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                />
              </Match>
              <Match when={tab() === "rank"}>aaabb</Match>
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}
