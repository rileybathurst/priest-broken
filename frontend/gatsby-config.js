module.exports = {
  siteMetadata: {
    title: 'Priest Sheet Metal & Plate Christchurch',
    titleTemplate: "%s",
    description: 'Specialist Sheetmetal Engineers, Heavy Plate Workers and Metal Fabricators',
    url: 'https://priestsheetmetal.co.nz/',
    siteUrl: `https://priestsheetmetal.co.nz/`,
    image: 'src/images/PriestSheetMetal&PlateChristchurch-blue.jpg', // this could probably be a specific image once I know if it works
    openingHours: 'Mo, Tu, We, Th, Fr 07:00-17:00',
    telephone: '(03) 366 9818',
    faxNumber: '(03) 366 9819',
    logo: 'src/images/PriestSheetMetal&PlateChristchurch-blue.jpg',
    areaServed: 'Christchurch, New Zealand',
    author: 'Priest Sheetmetal'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        // queryLimit: 1000, // Default to 100
        contentTypes: [
          // these can be found at http://localhost:1337/admin/plugins/users-permissions/roles/edit/2 always add the 's' case insensitive
          `service`, // http://localhost:1337/services
          `Slider-Ones`, // http://localhost:1337/Slider-Ones
          `Slider-Twos`,
          `galleries`,
          `videos`,
          
          // Im getting this with pretty much everything
          // ERROR (node:3759) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated

          // Even with a singular service query Im getting this 
          // warn Multiple node fields resolve to the same GraphQL field `StrapiService.Cover` - [`Cover`,
          // Its a warning which I was always getting so Im ok with it for now

        ],
        //If using single types place them in this array.
        // singleTypes: [`home-page`, `contact`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        // loginData: {
        //   identifier: "",
        //   password: "",
        // },
      },
      
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
