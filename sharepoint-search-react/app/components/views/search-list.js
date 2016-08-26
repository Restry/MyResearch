
// Using "Stateless Functional Components"

export default function(props) {
    if (props.results.length > 0) {
        var items = props.results.map((result, i) => {
          return (
            <li className="list-item" key={i}>
              <a href={result.url} className="item-primaryText">{result.title}</a>
              <span className="item-secondaryText" dangerouslySetInnerHTML={{ __html: result.description }}/>
              <span className="item-tertiaryText">{result.url}</span>
            </li>
          );
        });

        return (
          <div> 
            <ul className="list">
                {items}
            </ul>
          </div>
        );
      }
    else {
      return (<div/>);
    } 
}

