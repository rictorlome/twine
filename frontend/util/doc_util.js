export const pullDoc = (path) => {
  return $.ajax({
    url: `/api/documents/${path}`,
    method: 'GET'
  })
}
