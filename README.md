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

- firefox ios doesnt handle the form input
- some of the strapi API has capital letters where it would be nicer to be camelCase no underscores, hypens or whatever else
- footer links dont fill the space

### Workarounds 

- hasVideo | hasGallery etc I was having problems with booleans so I used numbers with 0 and 1 instead