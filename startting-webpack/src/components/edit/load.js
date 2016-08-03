var html = require('./tpl.html');

/*

    public class Item
    {
        public int id { get; set; }
        public string name { get; set; }
    }
    public static class Global
    {
        public static List<Item> db = new List<Item>(); 

    }
    public class ValuesController : ApiController
    {
        

        // GET api/<controller>
        public IEnumerable<Item> Get()
        {
            return Global.db;
        }

        // GET api/<controller>/5
        public Item Get(int id)
        {
            return Global.db.FirstOrDefault(p=>p.id== id);
        }

        // POST api/<controller>
        public int Post([FromBody]Item item)
        {
            Global.db.Add(item);
            return Global.db.Count;
        }

        // PUT api/<controller>/5
        public bool Put(int id, [FromBody]Item item)
        {
            var i = Global.db.FirstOrDefault(p => p.id == id);
            i.name = item.name;
            return true;
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
*/

var viewModel = function(pars) { 
    var self = this;

    $.ajax({
        url:pars.url,
        cache:false,
        type:"GET",
        async:false,
        success:function(res){
            self.uploadMaxSize =res.uploadMaxSize || 0;
            self.Groups = res.Groups || []
            self.QuestionTypes = res.PostType || []
            self.BusinessProducts = res.BusinessProducts || []
            self.Levels = res.Levels || []
        },
        error:function(res){
            
        }
    })


    ko.validation.rules["checked"] = {
        validator: function(value) {
            if (!value)
                return false;
            return value.length > 0;
        }
    };
    ko.validation.registerExtenders();


    self.Title = ko.observable().extend({
        required: {
            params: true,
            message: "请输入标题"
        },
        maxLength: {
            params: 70,
            message: "最多输入70个字符"
        }
    });

    self.QuestionType = ko.observable().extend({
        checked: {
            message: "请选择类型"
        }
    });
    self.BusinessProduct = ko.observableArray(); //.extend({checked: { message: "请选择业务产品" }});

    self.Group = ko.observable();
    self.Level = ko.observable();

    self.Contact = ko.observable().extend({
        required: {
            params: true,
            message: "请输入联系方式"
        },
        maxLength: {
            params: 50,
            message: "最多输入50个字符"
        }
    });

    self.RelationSystem = ko.observable().extend({
        maxLength: {
            params: 255,
            message: "最多输入255个字符"
        }
    });
    self.Content = ko.observable().extend({
        required: {
            params: true,
            message: "请输入内容"
        },
        maxLength: {
            params: 5000,
            message: "最多输入5000个字符"
        }
    });


    self.isGroupVisible = self.Groups.length > 1;

    self.submitEnable = ko.observable(true);
    self.Message = ko.observable('');

    var options = {
        type: "POST",
        beforeSend: function() {
            viewModel.submitEnable(false)
            viewModel.Message('正在提交更新中，请稍后...');
        },
        uploadProgress: function(event, position, total, percentComplete) {
            //var percentVal = percentComplete + '%';

        },
        success: function() {

        },
        complete: function(xhr) {
            var msg = "";
            if (xhr.responseText.length < 180) {
                msg = xhr.responseText;
            } else {
                msg = "系统出现未知异常，请检查附件是否超过5MB";
            }

            viewModel.Message(msg);
            if (xhr.responseText == "Done!") {
                location.href = "list.html";
            }
            viewModel.submitEnable(true);
            viewModel.Message('');
        }
    };
    $('form').ajaxForm(options);


    self.submit = function() {

        self.submitEnable(false)
        self.errors = ko.validation.group(self);
        if (self.errors().length === 0) {
            $('form').submit()

            return false;
        }

        self.submitEnable(true)
        self.errors.showAllMessages();
        $(".validationMessage:visible").first().parent().find("input:first,textarea").focus()
        return false;
    }


}

module.exports = {
    viewModel: viewModel,
    template: html
}

