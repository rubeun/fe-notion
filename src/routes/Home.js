import HeroSection from "../components/HeroSection/HeroSection";
import ResultsGrid from "../components/ResultsGrid/ResultsGrid";
import SearchBox from "../components/SearchBox/SearchBox";

const Home = ({ searchData, searchResults }) => {

  return (
    <>
      <HeroSection />
      <SearchBox searchData={searchData} />
      <ResultsGrid resultsArr={searchResults} />
    </>
  );
}

export default Home;