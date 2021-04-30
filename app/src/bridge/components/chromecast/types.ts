"use strict";

export interface Image {
    url: string;
    height?: number;
    width?: number;
}

enum VolumeControlType {
    ATTENUATION = "attenuation"
  , FIXED = "fixed"
  , MASTER = "master"
}

export interface Volume {
    controlType?: VolumeControlType;
    stepInterval?: number;
    level: Nullable<number>;
    muted: Nullable<boolean>;
}

// Media

enum IdleReason {
    CANCELLED = "CANCELLED"
  , INTERRUPTED = "INTERRUPTED"
  , FINISHED = "FINISHED"
  , ERROR = "ERROR"
}

enum HlsSegmentFormat {
    AAC = "aac"
  , AC3 = "ac3"
  , MP3 = "mp3"
  , TS = "ts"
  , TS_AAC = "ts_aac"
  , E_AC3 = "e_ac3"
  , FMP4 = "fmp4"
}

export enum HlsVideoSegmentFormat {
    MPEG2_TS = "mpeg2_ts"
  , FMP4 = "fmp4"
}

enum MetadataType {
    GENERIC
  , MOVIE
  , TV_SHOW
  , MUSIC_TRACK
  , PHOTO
  , AUDIOBOOK_CHAPTER
}

enum PlayerState {
    IDLE = "IDLE"
  , PLAYING = "PLAYING"
  , PAUSED = "PAUSED"
  , BUFFERING = "BUFFERING"
}

enum RepeatMode {
    OFF = "REPEAT_OFF"
  , ALL = "REPEAT_ALL"
  , SINGLE = "REPEAT_SINGLE"
  , ALL_AND_SHUFFLE = "REPEAT_ALL_AND_SHUFFLE"
}

enum ResumeState {
    PLAYBACK_START = "PLAYBACK_START"
  , PLAYBACK_PAUSE = "PLAYBACK_PAUSE"
}

enum StreamType {
    BUFFERED = "BUFFERED"
  , LIVE = "LIVE"
  , OTHER = "OTHER"
}

enum TrackType {
    TEXT = "TEXT"
  , AUDIO = "AUDIO"
  , VIDEO = "VIDEO"
}

export enum UserAction {
    LIKE = "LIKE"
  , DISLIKE = "DISLIKE"
  , FOLLOW = "FOLLOW"
  , UNFOLLOW = "UNFOLLOW"
}


interface Break {
    breakClipIds: string[];
    duration?: number;
    id: string;
    isEmbedded?: boolean;
    isWatched: boolean;
    position: number;
}

interface BreakClip {
    clickThroughUrl?: string;
    contentId?: string;
    contentType?: string;
    contentUrl?: string;
    customData?: {};
    duration?: number;
    id: string;
    hlsSegmentFormat?: HlsSegmentFormat;
    posterUrl?: string;
    title?: string;
    vastAdsRequest?: VastAdsRequest;
    whenSkippable?: number;
}

interface TextTrackStyle {
    backgroundColor: Nullable<string>;
    customData: any;
    edgeColor: Nullable<string>;
    edgeType: Nullable<string>;
    fontFamily: Nullable<string>;
    fontGenericFamily: Nullable<string>;
    fontScale: Nullable<number>;
    fontStyle: Nullable<string>;
    foregroundColor: Nullable<string>;
    windowColor: Nullable<string>;
    windowRoundedCornerRadius: Nullable<number>;
    windowType: Nullable<string>;
}

interface Track {
    customData: any;
    language: Nullable<string>;
    name: Nullable<string>;
    subtype: Nullable<string>;
    trackContentId: Nullable<string>;
    trackContentType: Nullable<string>;
    trackId: string;
    type: TrackType;
}

interface UserActionState {
    customData: any;
    userAction: UserAction;
}

interface VastAdsRequest {
    adsResponse?: string;
    adTagUrl?: string;
}

type Metadata =
        GenericMediaMetadata
      | MovieMediaMetadata
      | MusicTrackMediaMetadata
      | PhotoMediaMetadata
      | TvShowMediaMetadata;

interface MediaInformation {
    atvEntity?: string;
    breakClips?: BreakClip[];
    breaks?: Break[];
    contentId: string;
    contentType: string;
    contentUrl?: string;
    customData: any;
    duration: Nullable<number>;
    entity?: string;
    hlsSegmentFormat?: HlsSegmentFormat;
    hlsVideoSegmentFormat?: HlsVideoSegmentFormat;
    metadata: Nullable<Metadata>;
    startAbsoluteTime?: number;
    streamType: StreamType;
    textTrackStyle: Nullable<TextTrackStyle>;
    tracks: Nullable<Track[]>;
    userActionStates?: UserActionState[];
    vmapAdsRequest?: VastAdsRequest;
}

interface GenericMediaMetadata {
    images?: Image[];
    metadataType: number;
    releaseDate?: string;
    releaseYear?: number;
    subtitle?: string;
    title?: string;
    type: MetadataType.GENERIC;
}

interface MovieMediaMetadata {
    images?: Image[];
    metadataType: number;
    releaseDate?: string;
    releaseYear?: number;
    studio?: string;
    subtitle?: string;
    title?: string;
    type: MetadataType.MOVIE;
}

interface TvShowMediaMetadata {
    episode?: number;
    episodeNumber?: number;
    episodeTitle?: string;
    images?: Image[];
    metadataType: number;
    originalAirdate?: string;
    releaseYear?: number;
    season?: number;
    seasonNumber?: number;
    seriesTitle?: string;
    title?: string;
    type: MetadataType.TV_SHOW;
}

interface MusicTrackMediaMetadata {
    albumArtist?: string;
    albumName?: string;
    artist?: string;
    artistName?: string;
    composer?: string;
    discNumber?: number;
    images?: Image[];
    metadataType: number;
    releaseDate?: string;
    releaseYear?: number;
    songName?: string;
    title?: string;
    trackNumber?: number;
    type: MetadataType.MUSIC_TRACK;
}

interface PhotoMediaMetadata {
    artist?: string;
    creationDateTime?: string;
    height?: number;
    images?: Image[];
    latitude?: number;
    location?: string;
    longitude?: number;
    metadataType: number;
    title?: string;
    type: MetadataType.PHOTO;
    width?: number;
}

interface QueueItem {
    activeTrackIds: Nullable<number[]>;
    autoplay: boolean;
    customData: any;
    itemId: Nullable<number>;
    media: MediaInformation;
    playbackDuration: Nullable<number>;
    preloadTime: number;
    startTime: number;
}


export interface MediaStatus {
    mediaSessionId: number;
    media?: MediaInformation;
    playbackRate: number;
    playerState: PlayerState;
    idleReason?: IdleReason;
    currentTime: number;
    supportedMediaCommands: number;
    repeatMode: RepeatMode;
    volume: Volume
    customData: unknown;
}

export interface ReceiverApplication {
    appId: string
  , appType: string
  , displayName: string
  , iconUrl: string
  , isIdleScreen: boolean
  , launchedFromCloud: boolean
  , namespaces: Array<{ name: string }>
  , sessionId: string
  , statusText: string
  , transportId: string
  , universalAppId: string
}

export interface ReceiverStatus {
    applications?: ReceiverApplication[]
  , isActiveInput?: boolean
  , isStandBy?: boolean
  , volume: Volume
}


interface ReqBase {
    requestId: number;
}

// NS: urn:x-cast:com.google.cast.receiver
export type SenderMessage =
        ReqBase & { type: "LAUNCH", appId: string }
      | ReqBase & { type: "STOP", sessionId: string }
      | ReqBase & { type: "GET_STATUS" }
      | ReqBase & { type: "GET_APP_AVAILABILITY", appId: string[] }
      | ReqBase & { type: "SET_VOLUME", volume: Volume };

export type ReceiverMessage =
        ReqBase & {
            type: "RECEIVER_STATUS"
          , status: ReceiverStatus
        };


interface MediaReqBase extends ReqBase {
    customData?: unknown;
}

// NS: urn:x-cast:com.google.cast.media
export type SenderMediaMessage =
      | MediaReqBase & { type: "PLAY" }
      | MediaReqBase & { type: "PAUSE" }
      | MediaReqBase & { type: "MEDIA_GET_STATUS" }
      | MediaReqBase & { type: "STOP" }
      | MediaReqBase & { type: "MEDIA_SET_VOLUME", volume: Volume }
      | MediaReqBase & { type: "SET_PLAYBACK_RATE" , playbackRate: number }
      | MediaReqBase & {
            type: "LOAD"
          , media: MediaInformation
          , autoplay: Nullable<boolean>
          , currentTime: Nullable<number>
        }
      | MediaReqBase & {
            type: "SEEK"
          , resumeState: Nullable<ResumeState>
          , currentTime: Nullable<number>
        }  
      | MediaReqBase & {
            type: "EDIT_TRACKS_INFO"
          , activeTrackIds: Nullable<number[]>
          , textTrackStyle: Nullable<string>
        }
        // QueueLoadRequest
      | MediaReqBase & {
            type: "QUEUE_LOAD"
          , items: QueueItem[]
          , startIndex: number
          , repeatMode: string
          , sessionId: Nullable<string>
        }
        // QueueInsertItemsRequest
      | MediaReqBase & {
            type: "QUEUE_INSERT"
          , items: QueueItem[]
          , insertBefore: Nullable<number>
          , sessionId: Nullable<string>
        }
        // QueueUpdateItemsRequest
      | MediaReqBase & {
            type: "QUEUE_UPDATE"
          , items: QueueItem[]
          , sessionId: Nullable<string>
        }
        // QueueJumpRequest
      | MediaReqBase & {
            type: "QUEUE_UPDATE"
          , jump: Nullable<number>
          , currentItemId: Nullable<number>
          , sessionId: Nullable<number>
        }
        // QueueRemoveItemsRequest
      | MediaReqBase & {
            type: "QUEUE_REMOVE"
          , itemIds: number[]
          , sessionId: Nullable<string>
        }
        // QueueReorderItemsRequest
      | MediaReqBase & {
            type: "QUEUE_REORDER"
          , itemIds: number[]
          , insertBefore: Nullable<number>
          , sessionId: Nullable<string>
        }
        // QueueSetPropertiesRequest
      | MediaReqBase & {
            type: "QUEUE_UPDATE"
          , repeatMode: Nullable<string>
          , sessionId: Nullable<string>
        };

export type ReceiverMediaMessage =
        MediaReqBase & { type: "MEDIA_STATUS", status: MediaStatus[] }
      | MediaReqBase & { type: "INVALID_PLAYER_STATE" }
      | MediaReqBase & { type: "LOAD_FAILED" }
      | MediaReqBase & { type: "LOAD_CANCELLED" }
      | MediaReqBase & { type: "INVALID_REQUEST" };