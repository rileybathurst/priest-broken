# API

[strapi documentation](https://strapi.io/documentation/3.0.0-beta.x/cli/CLI.html#strapi-generate-api)

 `strapi generate:api product name:string description:text price:integer `



## Remeber to make these public

I think a single argument defaults to a text block but this isnt documented so maybe dont rely on it incase things start to break

Relations dont finish through the cli

more details are defintley possible through the visual interface

I dont understand much about which relations cause things to be null vs which are empty - this is probably why I was having problems with booleans but that seems like the most likely to always have a spot

` strapi generate:api services title:text content:text cover:media slug:text gallery:media hasGallery:number coverMedium:text coverVideo:text hasVideo:number video:relation order:number` 

`strapi generate:api sliderOne title:text sliderOneImage:media`

`Strapi generate:api sliderTwo title:text sliderTwoImage:media`

`starpi generate:api videos title:text content:text vimeo:text service:relation`

these videos need a few pieces of additional info so even tho they always stick with a service at the moment that also might change hence they are split off.



This is the specific gallery page not a gallery for a specific service gallery

` strapi generate:api gallery galleryImage:media alt:text`

Each Image is individual as that gives Gatsby-image so things load as fast as possible

