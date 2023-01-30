import type { Component } from "solid-js"
import MusicDisplay from "./components/MusicDisplay"
import VideoPlay from "./components/VideoPlay"

const App: Component = () => {
  return (
    <>
      <main class="mx-auto max-w-[980px] flex flex-col items-center py-30">
        <h1 class="text-3xl font-bold">室内操工厂</h1>
        <VideoPlay />
        <MusicDisplay />
      </main>
    </>
  )
}

export default App