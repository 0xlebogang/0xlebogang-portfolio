export interface Thumbnail {
  src: string;
  alt: string;
}

export interface Stack {
  name: string;
  description?: string;
  thumbnail?: Thumbnail;
}

export interface StackContent {
  title: string;
  description: string;
  stacks: Stack[];
}
