import { subtractTimeFromDate } from "./helpers";
import type { TimelinePost, User } from "./types";

export const posts: TimelinePost[] = [
  {
    author: {
      name: "MoonTory",
      handle: "TheMoonTory",
      profile: "profile.jpg",
    },
    image: undefined,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, eligendi.",
    likes: 0,
    shares: 0,
    comments: 0,
    createdAt: subtractTimeFromDate(Date.now(), 2),
  },
  {
    author: {
      name: "Elon Musk",
      handle: "teslaLad",
      profile: "elon.jpg",
    },
    image: undefined,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel, nisi, qui expedita numquam quia magnam quasi doloremque perferendis beatae reiciendis error possimus culpa iure.",
    likes: 17464,
    shares: 4763,
    comments: 321,
    createdAt: subtractTimeFromDate(Date.now(), 7),
  },
  {
    author: {
      name: "Elon Musk",
      handle: "teslaLad",
      profile: "elon.jpg",
    },
    image:
      "https://www.cnet.com/a/img/resize/59aff026a606fa767082eb01bc8af2f2ad99484c/hub/2018/02/08/3dcc95d9-a305-407d-9a7a-5aa80802cf45/screen-shot-2018-02-08-at-12-07-40-pm-1-1.jpg?auto=webp&fit=crop&height=675&width=1200",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam error doloremque animi ex architecto odio!",
    likes: 132876,
    shares: 5672,
    comments: 1243,
    createdAt: subtractTimeFromDate(Date.now(), 9),
  },
  {
    author: {
      name: "Kevin Hart",
      handle: "miniRock",
      profile: "kevin.jpg",
    },
    image: undefined,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel, nisi, qui expedita numquam quia magnam quasi doloremque perferendis beatae reiciendis error possimus culpa iure.",
    likes: 5422,
    shares: 233,
    comments: 142,
    createdAt: subtractTimeFromDate(Date.now(), 36),
  },
  {
    author: {
      name: "MoonTory",
      handle: "TheMoonTory",
      profile: "profile.jpg",
    },
    image: undefined,
    content:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique et quis voluptatem numquam nam facere repudiandae veniam libero ut provident. Sapiente nobis quis nemo eligendi nihil deserunt corporis eveniet incidunt!",
    likes: 893,
    shares: 432,
    comments: 142,
    createdAt: subtractTimeFromDate(Date.now(), 63),
  },
];

export const trending = [
  { top: "Trending in TX", title: "Gigi", bottom: "Trending with: Rip Gigi" },
  { top: "Music", title: "We Won", bottom: "135K Tweets" },
  { top: "Pop", title: "Blue Ivy", bottom: "40k tweets" },
  { top: "Trending in US", title: "Denim Day", bottom: "40k tweets" },
  { top: "Trending", title: "When Beyonce", bottom: "25.4k tweets" },
];

export const whoToFollow: User[] = [
  { profile: "elon.jpg", name: "Elon Musk", handle: "@teslaLad" },
  { profile: "monk.jpg", name: "Adrian Monk", handle: "@detective" },
  { profile: "kevin.jpg", name: "Kevin Hart", handle: "@miniRock" },
];
