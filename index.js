function superbowlWin(array) {
  let win = array.find((e) => e.result === "W");
  return win ? win.year : undefined;
}