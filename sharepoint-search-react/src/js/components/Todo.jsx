
import Datatable from './Datatables/index'; 
import boc from './commons/boc.lib';

class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = {table:null};
  }

  getFilterParams(){
     return {
            UserName: "sp\\spadmin",
            Title: this.refs.title&& this.refs.title.value+"",
            SeqNo: $('#txtNo').val()+"",
            FromDate: $('#txtStartDate').val()+"",
            ToDate: $('#txtEndDate').val()+"",
            ProductNames: $('#txtPro').val()+"",
            Status: $('#ddlStatus option:selected').val()+"",
            Sender: $('#txtUser').val()+"",
            SenderOrgNo: $('#txtUserOrgNo').val()+"",
            PageIndex: 0,
            PageSize: 10,
            ItemType: $('#itemTypeOp option:selected').val()+""
    }; 
  }
    filter(){
        this.state.table.ajax.data=getFilterParams();
        this.state.table.ajax.reload();
    }
    binding(table){
        this.setState({table:table})
    }

  render() {
    let ajax={}
    ajax.type = "POST"
    ajax.url = "/sopsapi/api/WFItem/GetUserParticipantedIns"//?UserName='sp\\spadmin'&se="+ encodeURIComponent(JSON.stringify());
    ajax.data= this.getFilterParams();
    let columns = [
                    { "data": "Title"},
                    { "data": "ItemSeqCode"},
                    { "data": "SenderUserName"},
                    { "data": "SenderDisplayName"},
                    { "data": "CreatedTime"},
                    { "data": "UpdatedTime"},
                    { "data": "SenderBranchID"},
                    { "data": "SenderBranchName"},
                    { "data": "SenderProvinceBranchID"},
                    { "data": "ProductNames"},
                    { "data": "PriorityName"},
                    { "data": "CurrentStatus"}
        ];

   

    return (
        <div>
            <div className="col-xs-6 no-padding">
                <div className="form-inline">
                    <label>
                        一级分行:
                        <select className="form-control input-sm" 
                        name="Branch" data-bind="options: Branchs,optionsText:'BranchName',optionsValue:'BranchID',value:Branch"></select>
                    </label>
                    
                    <label  >
                        标题
                        <input type="text" ref="title" className="form-control" maxlength="70" />
                    </label>
             

                    <input className="sops-btn" type="button" value="添加新用户" onClick={this.filter.bind(this)} />
                </div>
            </div>

            <Datatable binding={this.binding.bind(this)} ajax={ajax} columns={columns}>
                <thead>
                    <tr>
                        <th>标题</th>
                        <th>编号</th>
                        <th>提出人</th>
                        <th>提出人姓名</th>
                        <th>提交时间</th>
                        <th>修改时间</th>
                        <th>机构号</th>
                        <th>机构</th>
                        <th>省行号</th>
                        <th>业务产品</th>
                        <th>优先级</th>
                        <th>状态</th>
                    </tr> 
                </thead>
            </Datatable>
        </div>
    );
  }
};

export default Table;

