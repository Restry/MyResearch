
// Using "Stateless Functional Components"
export default function(props) {
  return (
      <form onSubmit={props.handleSubmit} className="form-horizontal">
        {props.keys.map((sets)=>{
            return (
                    <div key={sets.key} className="form-group"> 
                        <label htmlFor="" className="col-sm-10 col-sm-offset-2">{sets.description}</label>
                        <label className="col-xs-2 control-label">
                            {sets.title}
                        </label>
                        <div className="col-xs-3">
                            <input type="text" defaultValue={sets.value} name="title" className="form-control"/>
                            <label>{sets.note}</label>
                        </div>
                    </div>   	 
            );
        })}
        
         <div className="form-group">
             <div className="col-sm-10 col-sm-offset-2">
                 <button type="submit" className="btn btn-primary">提交</button>
             </div>
         </div>
      </form>
    )
}
