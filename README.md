# Priest 2

The website for https://priestsheetmetal.co.nz

Priest 1 died a sad death with some sort of strapi error so this is a rebuild



## Built on

- Strapi
- Gatsby



## Development

First

``` cd backend ```
``` strapi dev ```



Second

``` cd frontend ```
``` gatsby develop``` 



## Strapi Content Types

this needs way more documentation

### Services

- user, default setup
- page
- service
- sliderone
- nextslider, this should get renamed
- featured
- gallery
- videos



### Meta 

https://www.gatsbyjs.org/docs/add-page-metadata/

### Gatsby Clean
``` gatsby clean ```

``` gatsby build ```

Move the uploads gallery
this needs more documentation

``` cd public ```

``` git init ```

``` git remote add dreamhost ssh://rilbat2@sumter.dreamhost.com/~/priest.rileybathurst.com ```

``` git add * -f ```

``` git commit -am "clean build" ```

``` git push --set-upstream dreamhost master --force ```

# Issues

- when coming from a service where I dont have video it shows as null which breaks things as opposed to being empty [] which is fine
- firefox ios doesnt handle the form input
- some of the strapi API has capital letters where it would be nicer to be camelCase no underscores, hypens or whatever else
- footer links dont fill the space
- on develop or build of Gatsby ERROR (node:9401) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated

### Workarounds 

- hasVideo | hasGallery etc I was having problems with booleans so I used numbers with 0 and 1 instead - test some booleans on a new build and implement them where I can
- The Uploads are not coming across properly manually copy the uploads dir from /backend/public/uploads/ to /frontend/public/uploads this also has to happen on upload where the directory is moved to .com/uploads this all needs to be done better but for right now i'll get through



## To Do

- Other services link at the bottom of each service page
- add a nice quote mark to the testimonials
- There are some really old class names from Foundation which I haven't used for years so just check into if they are the best ways
- can I compress the vimeo player script?
- Divide the scss to atomic design and rebuild the patternlab with the new things



## Naming

I need some new hero name 

I've renamed the old her to summit which is the light grey are at the top of the page mainly on the front page



## Layout

Is it going to be possible to line up all the angles or does that matter if it just looks nice