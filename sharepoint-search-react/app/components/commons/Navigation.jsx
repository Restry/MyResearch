import NavLink from './NavLink';

var Navigation = React.createClass({

  getInitialState: function() {
    return {
        items:[],
        loading:true
    };
  },
  componentDidMount: function() {
      $.ajax({
            url:"/boc/_api/web/Navigation/QuickLaunch?$expand=Children",
            method: "GET",
            headers: { "Accept": "application/json; odata=verbose" }
        }).then((data)=>{ 
            this.setState({items:data.d.results,loading:false}); 
        }) 
  },
  render:function(){
      if(this.state.loading){
          return (<div>
            正在加载导航...
          </div>);
      }else{
          return (  
            <ul className="sops-list sops-left-nav">
                {this.state.items.map(item=>{
                    var childrens=[];
                    {if(item.Children.results.length>0){
                        item.Children.results.map(ci=>{ 
                            childrens.push(<li key={ci.Id}> <a href={ci.Url}>{ci.Title}</a></li>)
                        })
                    }} 
                    return (
                        <div key={item.Id}>
                            <li><a href={item.Url}>{item.Title}</a></li>
                            <ul>
                                {childrens} 
                            </ul>
                        </div> 
                    ); 
                })}
                <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li> 
                <li><NavLink to="/search">Search</NavLink></li> 
                <li><NavLink to="/Holiday">节假日管理</NavLink></li> 
                <li><NavLink to="/settings/report">数据统计参数</NavLink></li> 
            </ul>
            );
      }

  }

});


module.exports = Navigation;