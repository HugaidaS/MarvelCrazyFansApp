export type CharacterType = {
  id: number
  name?: string
  hero: string
  description: string
  thumbnail: {
    extension: string,
    path: string
  }
}

export type DetailsLists = {
  comics: List[]
  events: List[]
  series: List[]
  stories: List[]
}

export type Participations = {
  available: number
  collectionURI: string
  returned: number
  items: List[]
}

export type List = {
  id: number
  thumbnail: {
    path:string,
    extension:string
  }
  title: string
  src?:string
}

type InfoKey = "comics"|"events"|"series"|"stories"
