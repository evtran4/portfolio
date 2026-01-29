import * as en from './en'
import * as es from './es'
import * as fr from './fr'

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
  fr
}

export type Language = keyof typeof languages