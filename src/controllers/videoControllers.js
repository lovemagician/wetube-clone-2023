let videos = [
    {
        title: "안녕하세요",
        rating:5,
        comments:2,
        createdAt: "2 minutes ago",
        views:1,
        id: 1,
    },
    {
        title: "반갑습니다",
        rating:5,
        comments:2,
        createdAt: "2 minutes ago",
        views:59,
        id: 2,
    },
    {
        title: "환영합니다",
        rating:5,
        comments:2,
        createdAt: "2 minutes ago",
        views:59,
        id: 3,
    },
];

export const trending =  (req, res) => {
 
    return res.render("home", { pageTitle: "Home", videos })
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id-1]
  return res.render("watch", {pageTitle: `Watching ${video.title}`, video })
};
export const edit = (req, res) => res.render("edit");

export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
    return res.send("Delete Video");
}