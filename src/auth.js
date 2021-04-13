export function getAuthFormHTML() {
  return `
  <form class="mui-form" id="auth-form">
    <div class="mui-textfield mui-textfield--float-label">
      <input
        type="email"
        id="email"
        required
      />
      <label for="email">email:</label>
    </div>

    <div class="mui-textfield mui-textfield--float-label">
      <input
        type="password"
        id="password"
        required
      />
      <label for="password">password:</label>
    </div>

    <button
      type="submit"
      class="mui-btn mui-btn--raised mui-btn--primary"
    >
      Log in
    </button>
  </form>
  `
}

export function authWithEmailAndPassword(email, password) {
  const apiKey = 'AIzaSyB2fU5sRTZCTkpOkPk9e7-Z60e9abmQOD4'
  return fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data.idToken)
}
