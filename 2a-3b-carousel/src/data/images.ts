import NatureImage1 from "../assets/images/nature1.jpeg";
import NatureImage2 from "../assets/images/nature2.jpeg";
import NatureImage3 from "../assets/images/nature3.jpeg";
import NatureImage4 from "../assets/images/nature4.jpeg";
import NatureImage5 from "../assets/images/nature5.jpeg";
import SeaImage1 from "../assets/images/sea1.jpeg";
import SeaImage2 from "../assets/images/sea2.jpeg";
import SeaImage3 from "../assets/images/sea3.jpeg";
import SeaImage4 from "../assets/images/sea4.jpeg";
import SeaImage5 from "../assets/images/sea5.jpeg";
import AnimalImage1 from "../assets/images/animal1.jpeg";
import AnimalImage2 from "../assets/images/animal2.jpeg";
import AnimalImage3 from "../assets/images/animal3.jpeg";
import AnimalImage4 from "../assets/images/animal4.jpeg";
import AnimalImage5 from "../assets/images/animal5.jpeg";

export type ImageGroup = {
  name: string;
  id: number;
  images: {
    img: string;
    altText: string;
  }[];
};

export const imageGroups: ImageGroup[] = [
  {
    name: "Nature",
    id: 1,
    images: [
      { img: NatureImage1, altText: "green grass field during sunset" },
      { img: NatureImage2, altText: "waves splashing on sand" },
      { img: NatureImage3, altText: "green leaf tree under blue sky" },
      {
        img: NatureImage4,
        altText: "people on top of hill under white clouds in sunset",
      },
      { img: NatureImage5, altText: "brown mountain at night" },
    ],
  },
  {
    name: "Under the Sea",
    id: 2,
    images: [
      { img: SeaImage1, altText: "a brown sea turtle close up" },
      { img: SeaImage2, altText: "a whale under water at daytime" },
      { img: SeaImage3, altText: "a clown fish next to coral reef" },
      { img: SeaImage4, altText: "swarm of jellyfish" },
      {
        img: SeaImage5,
        altText: "white starfish on sand underwater at daytime",
      },
    ],
  },
  {
    name: "Animals",
    id: 3,
    images: [
      {
        img: AnimalImage1,
        altText: "a polar bear on snow covereg ground at daytime",
      },
      { img: AnimalImage2, altText: "a blue kingfisher close up" },
      { img: AnimalImage3, altText: "a brown squirrel on black background" },
      {
        img: AnimalImage4,
        altText: "an adult brown lion lying on gray rocks",
      },
      {
        img: AnimalImage5,
        altText: "a white fox sitting in snow at daytime",
      },
    ],
  },
];
