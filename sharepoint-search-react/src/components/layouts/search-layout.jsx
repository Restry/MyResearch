
import SearchBoc from '../search/SearchBox';
import Paging from '../search/Page';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="search">
      <header className="search-header">
        {props.title}
        <SearchBoc searchType={props.searchType} />
      </header>
      <div className="search-results">
        {props.children}
      </div>
      <footer className="search-footer">
        <Paging />
        {props.totalResults} Results
      </footer>
    </div>
    );
}
