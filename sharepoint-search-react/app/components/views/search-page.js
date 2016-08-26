

export default function(props) {
    var items = []; 
    var count =(props.pageCount>10?10:props.pageCount);
    for (var index = 1; index <= count; index++) {
        items.push(<li className={props.pageIndex==index?"active":""} key={index}>
            <a onClick={props.switchPage} href="#">{index}</a>
        </li>)
    }

    return (
        <div> 
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    <li>
                        <a onClick={props.previewsPage} href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li> 
                    {items}
                    <li>
                        <a onClick={props.nextPage} href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>);
}
