const typeDefinition = [`
type Lesson{
    english: String
    chinese: String
    pronunciation: String
}



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
    views: Int
    author: Author
}

type Query {
    author(firstName: String, lastName: String): Author
    fortuneCookie: String
    lottoNumbers: String
    lesson: Lesson
  }

  schema {
    query: Query
  }

`];

export default typeDefinition;