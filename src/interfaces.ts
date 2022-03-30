export interface Iposer {
  url: string,
  width: number,
  height: number
}

export interface Ithumbnails {
  default:Iposer,
  medium: Iposer,
  high: Iposer,
  standard: Iposer,
  maxres: Iposer
}

export interface Ilocalized{
  title: string,
  description: string
}

export interface Isnippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: Ithumbnails,
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  localized: Ilocalized,
  defaultAudioLanguage: string
}

export interface Istatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string
}

export interface Ivideo{
  kind: string,
  etag: string,
  id: string,
  snippet: Isnippet,
  statistics: Istatistics
}

export interface IpageInfo{
  totalResults: number,
  resultsPerPage: number
}

export interface Iresponce {
  kind: string,
  etag: string,
  pageInfo: IpageInfo,
  items: Ivideo[]
}
