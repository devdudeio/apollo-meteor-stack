##meteor apollo server demo

Tutorial: How to build a GraphQL server
<a href="https://medium.com/apollo-stack/tutorial-building-a-graphql-server-cddaa023c035#.2lyrh8yfk">Medium Blogpost</a>

I just followed the blogpost to integrate everything into a meteor stack.
Also added some other features from [fortunecookieapi.com](fortunecookieapi.com) like

- random lotto numbers
- random english/chinese lessons


tested with METEOR@1.4.0.1

```bash
meteor npm install && meteor
```

open your browser and take a look at
[http://localhost:3000/graphql
](http://localhost:3000/graphql)

####example graphql query

```javascript
  author(firstName: "Marlen") {
    id
    firstName
    lastName
    posts {
      views
      title
      text
      id
    }
  }
  fortuneCookie
  lottoNumbers
  lesson {
    english
    chinese
    pronunciation
  }
  weather(latitude: 41.05041, longitude: 13.73726) {
    timezone
    locationname
    current {
      time
      summary
      temperature
      ozone
    }
  }
```

make sure you replace "Marlen" with a name from your generated db (see logs on server startup). 


####k thx bye

