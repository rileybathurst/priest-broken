# API

[strapi documentation](https://strapi.io/documentation/3.0.0-beta.x/cli/CLI.html#strapi-generate-api)

 `strapi generate:api product name:string description:text price:integer `



string is short text

Text is long text





## Remeber to make these public

I think a single argument defaults to a text block but this isnt documented so maybe dont rely on it incase things start to break

Relations dont finish through the cli

more details are defintley possible through the visual interface

I dont understand much about which relations cause things to be null vs which are empty - this is probably why I was having problems with booleans but that seems like the most likely to always have a spot

` strapi generate:api services title:string byline:string content:text cover:media slug:string gallery:media hasGallery:integer coverMedium:string coverVideo:string hasVideo:integer video:relation order:integer` 

`strapi generate:api sliderOne title:string sliderOneImage:media`

`Strapi generate:api sliderTwo title:string sliderTwoImage:media`

`strapi generate:api videos title:string content:text vimeo:string service:relation`

these videos need a few pieces of additional info so even tho they always stick with a service at the moment that also might change hence they are split off.



This is the specific gallery page not a gallery for a specific service gallery

` strapi generate:api gallery galleryImage:media alt:string`

Each Image is individual as that gives Gatsby-image so things load as fast as possible



I dont know if its this specific name but testimonials is killing me

`strapi generate:api testimonials content:text stars:integer author:string origin:string `





strapi generate:api reviews content:text stars:integer author:string origin:string