import { IStatistics } from '../shared/models/videos.model';

export interface State {
  customCards: CustomCard[],
  youtubeCards: YoutubeCard[],
}

export interface CustomCard {
  title: string,
  linkVideo: string,
  linkImage: string,
  creationDate: string,
  description: string,
}

export interface YoutubeCard extends CustomCard{
  statictics: IStatistics
  tags: string[]
  id: string
}
