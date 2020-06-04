# API

[strapi documentation](https://strapi.io/documentation/3.0.0-beta.x/cli/CLI.html#strapi-generate-api)

 `strapi generate:api product name:string description:text price:integer `



## Remeber to make these public

I think a single argument defaults to a text block but this isnt documented so maybe dont rely on it incase things start to break

Relations dont finish through the cli

more details are defintley possible through the visual interface

I dont understand much about which relations cause things to be null vs which are empty - this is probably why I was having problems with booleans but that seems like the most likely to always have a spot

` strapi generate:api services title:text content:text cover:media slug:text gallery:media hasGallery:number coverMedium:text coverVideo:text hasVideo:number video:relation`

`strapi generate:api sliderOne title:text sliderOneImage:media`

`Strapi generate:api sliderTwo title:text sliderTwoImage:media`

`starpi generate:api videos title:text content:text vimeo:text service:relation`

these videos need a few pieces of additional info so even tho they always stick with a service at the moment that also might change hence they are split off.







Im not sure if this needs to be split out or not as I cant work out what I was doing and the whole point of graphQL is the documentation doesnt really show it

I dont think it should be as its really part of the page and doesnt need much additional info on each piece. maybe alt tags for each image but I dont think those are going to get done maybe other than original name

` strapi generate:api gallery galleryImage:media service:Relation`

