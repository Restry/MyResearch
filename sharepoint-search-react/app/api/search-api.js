import axios from 'axios';
import store from '../store';
import { searchSuccess } from '../actions/search-actions';
import q from 'q';

/**
 * Search users
 */

function searchdata(searchQuery, pageIndex=0) {
    var defer = q.defer();

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                defer.resolve(this.response || this.responseText);
            } else if (this.status >= 400) {
                defer.reject({
                    message: this.response['odata.error'].message.value,
                    statusText: this.statusText,
                    status: this.status
                });
            }
        }
    }
    var mark = (new Date()).getTime();
    var search = `Keywords=${searchQuery}&Start=${pageIndex}&PageSize=10`;
    xhr.open('POST', `/sopsapi/api/SPSearch/ServerSearchResult?_=${mark}`, true);
    //  xhr.open('POST', `/sopsapi/api/Search/ClientSearchResult?_=${mark}`, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //xhr.setRequestHeader('Accept', 'application/json; odata=verbose');
    xhr.responseType = 'json';
    xhr.send(search);
    return defer.promise;
}

export function switchPage(searchQuery,pageIndex) { 
    return search(searchQuery,pageIndex);
}

export function search(searchQuery, pageIndex=0) {
    var data ={ 
        results: [],
        itemCount: pageIndex-1,
        pageIndex: 0,
        pageSize: 20,
        searchQuery:searchQuery,
        searching:true
    }
 
    searchdata(searchQuery, pageIndex-1).then(function(response) {
        

        if (typeof(response) === "string") {
            response = JSON.parse(response);
        }
        if (response) {
            response.Value.forEach((row) => {
                data.results.push({
                    title: row.Title,
                    url: row.TargetUrl,
                    description: row.HitHighlightedSummary
                });
            });

            data.itemCount = response.Count;
            data.searching = false;

            store.dispatch(searchSuccess(data));
        }
    }, function(err) {
        _error = err;
    }).finally(function() { 
      //  SearchResultsStore.emitChange();
    });
}

/*
export function search(query = '',pageIndex=0) {
  return axios.get('http://localhost:3001/users?q='+ query)
    .then(response => {
      store.dispatch(searchSuccess(response.data));
      return response;
    });
}
*/

