module.exports = {
  "title": "荒唐半生",
  "description": "记录自己的成长历程",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          // {
          //   "text": "vuepress-reco",
          //   "link": "/docs/theme-reco/"
          // }
        ]
      },
      {
        "text": "链接",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          },
          {
            "text": "搭建个人博客指南",
            "link": "https://blog.csdn.net/zbw125/article/details/117400303",
            "icon": ""
          }
        ]
      }
    ],
    "valineConfig": {     // valine 评论功能配置信息
      appId: 'tJ5JRN4r0dx7NYhKP7hWBvlQ-gzGzoHsz',// your appId
      appKey: 'isEPiFHFLDJgwcabPk63ljsG', // your appKey
      placeholder: '尽情留下你想说的话吧',     // 评论框占位符
      avatar: 'wavatar',      // 评论用户的头像类型
      highlight: true,      // 代码高亮
      recordIP: true,    // 记录评论者的IP
    },
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "文章分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [

    ],
    "plugins": [
      // 更新刷新插件
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
      }],
    // 代码复制弹窗插件
      ["vuepress-plugin-nuggets-style-copy", {
        copyText: "copy",
        tip: {
            content: "复制成功!"
        }
      }],
      ['@vuepress/last-updated', 
        {
          transformer: (timestamp, lang) => {
            return (new Date(timestamp)).toUTCString() 
            //或者用下面这段
            // const moment = require('moment')
            // moment.locale(lang)
            // return moment(timestamp).toLocaleString()
          }
        }],
      ['@vuepress-reco/vuepress-plugin-pagation', {
        perPage: 16
      }],
      ['sitemap', {
        hostname: 'https://conimi.com'
      }],
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Felix",
    "authorAvatar": "/avatar.png",
    // "record": "",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  }
}