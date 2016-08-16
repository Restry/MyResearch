import React from 'react';
import {get} from '../utils/ajax';
 


export default class Plist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"loading":false, "list": []};
  }
  
  componentDidMount() {
       require.ensure([],function(){
            require('../lib/bs-datepicker/bootstrap-datepicker.css'); 
            require('imports?jQuery=jquery!../lib/bs-datepicker/bootstrap-datepicker'); 
            require('imports?jQuery=jquery!../lib/bs-datepicker/bootstrap-datepicker.zh-CN.min'); 
            
            $(".datepicker").datepicker({
                multidate: "d4",
                format:"yyyy-mm-dd",
                language:"zh-CN"
            });

       })
        
            jQuery.support.cors = true;

        this.setState({"firstView": true});
        this.setState({"loading": true, 'firstView': false});
        let url = 'http://localhost:2580/odata/Calendars';
        var self =this;
        $.ajaxSetup ({ cache: false}); 

        $.ajax({url:url,
                dataType: 'json',
                type: 'GET',
                async: false}).done(function(data) {
                                self.setState({"loading":false, "list": data.value});
                            }) 
  }

//   componentWillReceiveProps(nextProps) {
//     let keyword = nextProps.keyword;
//     receiver()
//   }
handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`

            $.ajaxSetup ({ cache: false}); 
            jQuery.support.cors = true;

    $.ajax({
        type:"POST",
        contentType: "application/json",
        url:"http://localhost:2580/odata/Calendars",
        data:JSON.stringify({
            title:event.target.elements[0].value,
            class:"",
            url:"",
            start:new Date(event.target.elements[1].value).getTime(),
            end:new Date(event.target.elements[2].value).getTime()
        }),
        success:(function(res){
            alert(JSON.stringify(res));
        })
    })

   // alert(path)
  }
  render() {
    const imgStyle = {
      width: '100px'
    }
    if (this.state.firstView) {
      return (
        <h2>Enter name to search</h2>
      )
    }
    if (this.state.loading) {
      return (
        <h2>Loading result...</h2>
      );
    } else {
      if (this.state.list.length === 0) {
        return (
          <h2>No result.</h2>
        )
      } else {
        return (
          <div className="row">
            
            <h4>假期列表</h4>
            <small>除周末外的假期或特殊日期</small>
            <ul className="nav nav-list"> 
                {this.state.list.map(item=>{
                    return (
                        <li key={item.Id}>
                            <a title={item.title}> 
                                <span className={item.class}>[{item.Id}]</span>
                                {item.title.length>15?item.title.substring(0,15):item.title}[{new Date(parseInt(item.start)).toLocaleDateString()}]-[{new Date(parseInt(item.end)).toLocaleDateString()}]
                            </a> 
                        </li>
                    )
                })} 
            </ul>
            <div className="row" id="gsp-dp-component"> 
                <form className="form-horizontal" onSubmit={this.handleSubmit}> 
                    <div className="form-group">
                        <legend>添加事件</legend>
                    </div>

                    <div className="form-group"> 
                        <input type="text" placeholder="事件名" className="form-control" id="exampleInputName0" /> 
                    </div> 
                    <div className="form-group"> 
                        <div className="input-group date">
                            <input type="text" placeholder="开始日期" className="datepicker form-control"/>
                            <span className="input-group-addon"><i className="glyphicon glyphicon-th"></i></span>
                        </div> 
                    </div>  
                    <div className="form-group"> 
                        <div className="input-group date">
                            <input type="text" placeholder="结束日期" className="datepicker form-control"/>
                            <span className="input-group-addon"><i className="glyphicon glyphicon-th"></i></span>
                        </div> 
                    </div>

                    <div className="form-group">
                        <div className="col-sm-10 col-sm-offset-2"> 
                                    <button type="submit" className="btn btn-primary">添加</button>
                        </div>
                    </div>
                  
                </form>
            
            </div>
         </div>
       );
      }
    }
  }
}
