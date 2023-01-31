export const onRequest = async (context: any) => {
  const path = context.request.url.split("/").slice(5)
  const query = path.join("/")
  const resp = await fetch(`https://api-netease-music.dustella.net/${query}`, {
    cache: "no-cache",
  })
  return resp
}
