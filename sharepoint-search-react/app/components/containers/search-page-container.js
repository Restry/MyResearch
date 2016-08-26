
import SearchPage from '../views/search-page';
import * as searchApi from '../../api/search-api';
import { loadSearchLayout } from '../../actions/search-layout-actions';

const SearchPageContainer = React.createClass({
  
    previewsPage:function(){
        //event.preventDefault();

        if(this.props.pages.pageIndex==1){
            alert("最小页");return;
        } 
        searchApi.switchPage(this.props.pages.searchQuery,this.props.pages.pageIndex-1); 
        
        return false;
    },
    nextPage: function(){
        //event.preventDefault();
        
        if(this.props.pages.pageIndex==this.props.pages.pageCount){
            alert("最大页");return;
        }
        searchApi.switchPage(this.props.pages.searchQuery,this.props.pages.pageIndex+1); 
        return false;
    },
    switchPage:function(obj){
        //event.preventDefault();
        
        //this.setState({pageIndex:obj.target.text})
        searchApi.switchPage(this.props.pages.searchQuery, obj.target.text);  
        return false;
    },
    render: function() { 
            return (<SearchPage previewsPage={this.previewsPage} 
            nextPage={this.nextPage} switchPage={this.switchPage}
             {...this.props.pages}/>)
    }

});

export default SearchPageContainer;
