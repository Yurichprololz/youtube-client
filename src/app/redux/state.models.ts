import { IStatistics } from '../shared/models/videos.model';

export interface State {
  customCards: CustomCard[],
  youtubeCards: YoutubeCard[],
}

export interface BasicCard {
  title: string,
  linkVideo: string,
  linkImage: string,
  creationDate: string,
  description?: string,
}

export interface YoutubeCard extends BasicCard{
  statictics: IStatistics
  tags: string[]
  id: string
}

export interface CustomCard extends BasicCard {}

export interface SearchCard extends BasicCard {
  statictics?: IStatistics
  tags?: string[]
  id?: string
}



export type Card = CustomCard | YoutubeCard;
