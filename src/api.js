
const newRoomEndpoint = `https://api.daily.co/v1/rooms`;

/**
 * Create a short-lived room for demo purposes.
 *
 * It uses the redirect proxy as specified in netlify.toml`
 * This will work locally if you following the Netlify specific instructions
 * in README.md
 *
 * See https://docs.daily.co/reference#create-room for more information on how
 * to use the Daily REST API to create rooms and what options are available.
 */
async function createRoom() {
  const exp = Math.round(Date.now() / 1000) + 60 * 30;
  const options = {
    properties: {
      exp: exp,
    },
  };
  let response = await fetch(newRoomEndpoint, {
      method: 'POST',
      body: JSON.stringify(options),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.REACT_APP_DAILY_API_KEY, // token은 인증 토큰
      }
    }),
    room = await response.json();
  return room;

  // Comment out the above and uncomment the below, using your own URL
  // 자신의 URL을 사용하여 위의 주석을 제거하고 아래의 주석을 제거하십시오.
  // return { url: 'https://westreed.daily.co/hello' }
}

export default { createRoom };
