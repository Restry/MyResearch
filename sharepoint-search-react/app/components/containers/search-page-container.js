
import SearchPage from '../views/search-page';
import * as searchApi from '../../api/search-api';
import { loadSearchLayout } from '../../actions/search-layout-actions';

const SearchPageContainer = React.createClass({
  
    previewsPage:function(){
        if(this.props.pageIndex==1){
            alert("最小页");return;
        } 
        searchApi.switchPage(this.props.searchQuery,this.props.pageIndex-1); 
    },
    nextPage: function(){
        if(this.props.pageIndex==this.props.pageCount){
            alert("最大页");return;
        }
        searchApi.switchPage(this.props.searchQuery,this.props.pageIndex+1); 
    },
    switchPage:function(obj){
        //this.setState({pageIndex:obj.target.text})
        searchApi.switchPage(this.props.searchQuery, obj.target.text); 
        
    },
    render: function() { 
            return (<SearchPage previewsPage={this.previewsPage} 
            nextPage={this.nextPage} switchPage={this.switchPage}
             {...this.props}/>)
    }

});

export default SearchPageContainer;
