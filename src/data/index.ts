import { createStore } from 'solid-js/store'

const [get, set] = createStore({
  keyword: '',
  selectedMusicIds: [] as string[],
  mediaPlay: {
    isPlaying: false,

  },
})

export default { get, set }
