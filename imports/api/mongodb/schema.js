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
    weather(latitude: Float, longitude: Float): Weather
  }

type Weather {
    latitude: Float
    longitude: Float
    locationname: String
    timezone: String
    offset: Int
    current: CurrentWeather
}

type CurrentWeather{
    time: Int
    summary: String
    icon: String
    precipIntensity: Float
    precipProbability: Float
    precipType: String
    temperature: Float
    apparentTemperature: Float
    dewPoint: Float
    humidity: Float
    windSpeed: Float
    windBearing: Int
    visibility: Float
    cloudCover: Float
    pressure: Float
    ozone: Float
}


  schema {
    query: Query
  }

`];

export default typeDefinition;