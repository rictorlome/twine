export const signup = (user) => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user },
  });
};

export const logout = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
}

export const createDocument = () => {
  return $.ajax({
    url: '/api/documents',
    method: 'POST'
  })
}
