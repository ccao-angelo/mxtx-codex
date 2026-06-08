# WEB103 Project 1 - *The MXTX Codex 🗡️*

Submitted by: **Chau Cao**

About this web app: **The MXTX Codex is a bilingual (English/Vietnamese) interactive directory of characters from the Mo Xiang Tong Xiu universe (MDZS, TGCF, SVSSS). Users can browse a visually immersive grid of characters and view dynamically generated detail pages for their lore, sects, and weapons.**

Time spent: **8** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  - [x] **Each detail view should be a unique endpoint, such as as `localhost:3000/bosses/crystalguardian` and `localhost:3000/mantislords`**
  - [x] *Note: When showing this feature in the video walkthrough, please show the unique URL for each detailed view. We will not be able to give points if we cannot see the implementation* 
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] **The web app is styled using Picocss**

The following **optional** features are implemented:

- [x] The web app displays items in a unique format, such as cards rather than lists or animated list items

The following **additional** features are implemented:

- [x] Added an interactive English/Vietnamese language toggle that saves user preferences via `localStorage`.
- [x] Overrode PicoCSS defaults to create a dark-fantasy aesthetic with frosted glass, custom hover animations, and glowing card borders.
- [x] Implemented Google Fonts (Cormorant Garamond and Lora) to specifically support beautiful rendering of Vietnamese accents.
- [x] Utilized CSS `aspect-ratio` and `object-fit` to force uniform portrait dimensions across all dynamically generated character cards.

## Video Walkthrough

<img src='https://i.imgur.com/GoTcGYd.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

* Originally faced issues with hotlink protection from external image sources (Pinterest/Facebook). Transitioned to locally hosted images, which required configuring Express to properly serve a static `public` directory.
* Implementing the language toggle caused a slight bug where the JS crashed trying to translate missing DOM elements. Fixed this by ensuring strict ID matching between the HTML and the JS dictionary.
* Discovered that certain cinematic fonts (like Cinzel) do not support the extended Latin characters needed for Vietnamese accents. Swapped to Cormorant Garamond to maintain the historical fantasy aesthetic while ensuring 100% language support.

## License

Copyright [2026] [Chau Cao]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.