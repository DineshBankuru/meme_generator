export const getAllMemes = async () => {
  return await fetch("https://api.imgflip.com/get_memes").then((data) =>
    data.json()
  );
};
