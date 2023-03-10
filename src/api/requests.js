const API_KEY = "b978128d0ad4f5eeaf223929834c3298";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&page=`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchAccordingGenre: `/discover/movie?api_key=${API_KEY}&with_genres=`,
  fetchBollywood: `/discover/movie?api_key=${API_KEY}&region=IN&language=hi-IN&with_original_language=hi&page=1`,
  fetchTvShows: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page`,
};
export default requests;
