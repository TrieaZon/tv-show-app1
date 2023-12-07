export interface ITvShowData {
  name: string, 
  genres: [string],
  status: string,

  rating: {average: number},
  image: {medium: string},
  summary: string,
  }


//https://api.tvmaze.com/search/shows?q=girls from api