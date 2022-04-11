import { ISearchVideo } from './search-video.model';

export interface IPoster {
  url: string,
  width: number,
  height: number
}

export interface IThumbnails {
  default:IPoster,
  medium: IPoster,
  high: IPoster,
  standard?: IPoster,
  maxres?: IPoster
}

export interface ILocalized{
  title: string,
  description: string
}

export type ISnippet = {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: IThumbnails,
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  defaultLanguage?: string,
  localized: ILocalized,
  defaultAudioLanguage: string
};

export interface IStatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount?: string,
  favoriteCount: string,
  commentCount: string
}

export interface IVideo{
  kind: string,
  etag: string,
  id: string,
  snippet: ISnippet,
  statistics: IStatistics
}

export interface IPageInfo{
  totalResults: number,
  resultsPerPage: number
}

export interface IResponce {
  kind: string,
  etag: string,
  pageInfo: IPageInfo,
  items: IVideo[] | ISearchVideo[]
}
