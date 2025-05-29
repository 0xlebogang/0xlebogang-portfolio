export interface Image {
  imageUrl: string;
  alt: string;
}

export interface About {
  title: string;
  description: string;
  resumeUrl: string;
  image?: Image;
}
