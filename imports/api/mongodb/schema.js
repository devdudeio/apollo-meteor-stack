const typeDefinition = [`
type Author{
    id: Int
    firstName: String
    lastName: String
    posts: [Post]
}

type Post {
    id: Int
    title: String
    text: String
    author: Author
}

 type Query {
    author(firstName: String, lastName: String): Author
  }

  schema {
    query: Query
  }

`];

export default typeDefinition;