import { IPageInfo, IThumbnails } from './videos.model';

export interface ISearchVideo {
  kind: string,
  etag: string,
  id: ISearchId,
  snippet: ISearchSnippet
}

export interface ISearchId {
  kind: string,
  videoId: string,
  channelId: string,
  playlistId: string
}

export interface ISearchSnippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: IThumbnails,
  channelTitle: string,
  liveBroadcastContent: string
}

export interface ISearchResponce {
  kind: string,
  etag: string,
  pageInfo: IPageInfo,
  items: ISearchVideo[]
}
