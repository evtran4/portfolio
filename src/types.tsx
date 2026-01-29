import * as en from './en'
import * as es from './es'
import * as fr from './fr'
import * as ch from './ch'

export interface Icon {
    link: string,
    imagePath: string
}

export interface Tab {
    name: string,
    element: string
}

export interface Song {
    title: string,
    audio: string,
    image: string,
    artist: string,
    album:  string,
    albumName: string,
}



export const languages = {
  en,
  es,
  fr,
  ch
}

export type Language = keyof typeof languages