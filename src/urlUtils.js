export function roomUrlFromPageUrl() {
  // 현재 url 주소에 roomUrl이 존재하는 경우
  const match = window.location.search.match(/roomUrl=([^&]+)/i);
  // match
  // 0: "roomUrl=https://westreed.daily.co/00o4xUhexxo4Vh6qlio4"
  // 1: "https://westreed.daily.co/00o4xUhexxo4Vh6qlio4"
  return match && match[1] ? decodeURIComponent(match[1]) : null;
}

export function pageUrlFromRoomUrl(roomUrl) {
  return (
    window.location.href.split('?')[0] +
    (roomUrl ? `?roomUrl=${encodeURIComponent(roomUrl)}` : '')
  );
}
