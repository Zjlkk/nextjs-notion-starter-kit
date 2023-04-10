import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '6bec0c76a0f74ddeae36807fae9c92bb',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '20% Time',
  domain: 'https://angry-tire-e58.notion.site/20-Time-6bec0c76a0f74ddeae36807fae9c92bb',
  author: 'Jialin',

  // open graph metadata (optional)
  description: 'I will spend 20% time exploring, understanding and writing things related to Economics, Products and Start-ups.',

  // social usernames (optional)
  twitter: 'jjialinn',
  github: 'Zjlkk',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
   navigationStyle: 'custom',
   navigationLinks: [
     {
       title: 'About',
       pageId: 'c0c322c722d54efbbff70255f10c97f0?pvs=4'
     },
     {
       title: 'Contact',
       pageId: '9850aa9e34e74c31a88003bcd460fcde?pvs=4'
     }
   ]
})
