
import Datatable from './Datatables/index'; 
import boc from './commons/boc.lib';

class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    let ajax={}
    ajax.type = "POST"
    ajax.url = boc.sops.util.createOperationAddress({
        Action: "User",
        Method: "GetAllUsers",
        Branch: '00001'
    });

    let columns = [
                    {
                        "className": 'remove-user',
                        "orderable": false,
                        "data": null,
                        "defaultContent": '删除'
                    },
                    {
                        "className": 'details-control',
                        "orderable": false,
                        "data": null,
                        "defaultContent": '详细'
                    },
                    { "data": "ID" },
                    { "data": "UserName" },
                    { "data": "DisplayName" },
                    { "data": "BranchID" },
                    { "data": "BranchName" },
                    { "data": "Department" },
                    { "data": "ProvinceName" },
                    { "data": "BranchInformation" }
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
                    <input className="sops-btn" type="button" value="添加新用户" data-bind="click: toAddNewUser" />
                </div>
            </div>

            <Datatable ajax={ajax} columns={columns}>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>ID</th>
                        <th>用户名</th>
                        <th>显示名</th>
                        <th>机构号</th>
                        <th>机构名称</th>
                        <th>部门</th>
                        <th>省行名</th>
                        <th>机构信息</th>
                    </tr>
                </thead>
            </Datatable>
        </div>
    );
  }
};

export default Table;

