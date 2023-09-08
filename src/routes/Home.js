import HeroSection from "../components/HeroSection";
import ResultsGrid from "../components/ResultsGrid";
import SearchBox from "../components/SearchBox";

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