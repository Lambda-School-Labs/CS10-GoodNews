define({ "api": [
  {
    "type": "get",
    "url": "api/article/:keyword",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "keyword",
            "description": "<p>gets all the articles with that keyword phrase</p>"
          }
        ]
      }
    },
    "group": "Api_group:_Articles_Router",
    "description": "<p>gets all of the articles that have ${keyword}</p>",
    "version": "0.0.0",
    "filename": "article/ArticleRouter.js",
    "groupTitle": "Api_group:_Articles_Router",
    "name": "GetApiArticleKeyword"
  },
  {
    "type": "get",
    "url": "api/article/post-article",
    "title": "",
    "group": "Api_group:_Articles_Router",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"id\": \"id\", \"name\": \"Article Name\",\"url\": \"https://www.cnn.com/article.html\",\"timestamp\": \"timestamp\",\"description\": \"description\",\"keywords\": [ \"keyword\"],\"summary\": \"summary\",\"content\": \"content\",\"clickbait\": \"0\",\"imageurl\": \"https://imageurl.com/image\"}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Post a new article</p>",
    "permission": [
      {
        "name": "needs-auth"
      }
    ],
    "version": "0.0.0",
    "filename": "article/ArticleRouter.js",
    "groupTitle": "Api_group:_Articles_Router",
    "name": "GetApiArticlePostArticle"
  },
  {
    "type": "get",
    "url": "api/article/topfive",
    "title": "",
    "group": "Api_group:_Articles_Router",
    "permission": [
      {
        "name": "No-Auth"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "response",
          "content": "[\n \"keyword_1\",\n\"keyword_2\",\n \"keyword_3\",\n \"keyword_4\",\n \"keyword_5\"\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "article/ArticleRouter.js",
    "groupTitle": "Api_group:_Articles_Router",
    "name": "GetApiArticleTopfive"
  },
  {
    "type": "get",
    "url": "api/article/user-saved",
    "title": "",
    "group": "Api_group:_Articles_Router",
    "permission": [
      {
        "name": "Requires-Auth"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Response",
          "content": "[{ \"_id\": \"_id\",\"id\": \"id\", \"name\": \"Article Name\",\"url\": \"https://www.cnn.com/article.html\",\"timestamp\": \"timestamp\",  \"description\": \"description\", \"keywords\": [     \"keyword\"  ],  \"summary\": \"summary\", \"content\": \"content\",\"clickbait\": \"0\", \"createdAt\": Date, \"imageurl\": \"https://imageurl.com/image\" }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "article/ArticleRouter.js",
    "groupTitle": "Api_group:_Articles_Router",
    "name": "GetApiArticleUserSaved"
  },
  {
    "type": "get",
    "url": "api/articles.get/:articleid",
    "title": "",
    "group": "Api_group:_Articles_Router",
    "description": "<p>gets a specific article by its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>articleid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "[ { \"_id\": \"_id\", \"id\": \"id\", \"name\": \"Article Name\", \"url\": \"https://www.cnn.com/article.html\", \"timestamp\": \"timestamp\", \"description\": \"description\", \"keywords\": [ \"keyword\" ], \"summary\": \"summary\", \"content\": \"content\", \"clickbait\": \"0\", \"createdAt\": Date, \"imageurl\": \"https://imageurl.com/image\" } ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "article/ArticleRouter.js",
    "groupTitle": "Api_group:_Articles_Router",
    "name": "GetApiArticlesGetArticleid"
  },
  {
    "type": "post",
    "url": "api/article/get-articles/:flag/:activePage",
    "title": "",
    "group": "Api_group:_Articles_Router",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example",
          "content": "[\n{\n      \"_id\": \"_id\",\n      \"id\": \"id\",\n      \"name\": \"Article Name\",\n      \"url\": \"https://www.cnn.com/article.html\",\n      \"timestamp\": \"timestamp\",\n     \"description\": \"description\",\n      \"keywords\": [\n         \"keyword\"\n    ],\n      \"summary\": \"summary\",\n      \"content\": \"content\",\n      \"clickbait\": \"0\",\n      \"createdAt\": Date,\n      \"imageurl\": \"https://imageurl.com/image\"\n }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "flag",
            "description": "<p>can be either &quot;0&quot; or &quot;1&quot;</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "activePage",
            "description": "<p>string that represents a number in the 1-30 range</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "article/ArticleRouter.js",
    "groupTitle": "Api_group:_Articles_Router",
    "name": "PostApiArticleGetArticlesFlagActivepage"
  },
  {
    "type": "put",
    "url": "api/article/:articleid/:type",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "article_id",
            "description": "<p>this param is just the id of the article in question</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "type",
            "description": "<p>this is the type of the article</p>"
          }
        ]
      }
    },
    "group": "Api_group:_Articles_Router",
    "description": "<p>Update an article</p>",
    "version": "0.0.0",
    "filename": "article/ArticleRouter.js",
    "groupTitle": "Api_group:_Articles_Router",
    "name": "PutApiArticleArticleidType"
  }
] });