require.ensure(["./jquery.fancytree.js", "./ui.fancytree.css"], function() {


    //注册Fancytree的自定义属性（nodeType,tenantID)
    
    require("./jquery.fancytree.js");

    (function($, undefined) {
        // Consider to use [strict mode](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/)
        "use strict";

        // Register a Fancytree extension
        // ------------------------------
        /* 'nodeType' extension */
        $.ui.fancytree.registerExtension({
            // Every extension must be registered by a unique name.	
            name: "nodeType",
            // Version information should be compliant with [semver](http://semver.org)
            version: "1.0.0"

        });
        $.ui.fancytree.registerExtension({
            // Every extension must be registered by a unique name.	
            name: "tenantID",
            // Version information should be compliant with [semver](http://semver.org)
            version: "1.0.0"

        });
        // End of namespace closure
    }(jQuery));


    var contentFrame = document.getElementById("content");


    //注册事件
    if (contentFrame.attachEvent) {
        contentFrame.attachEvent("onload", function() {
            ChangeContent();
        });
    } else {
        contentFrame.onload = function() {
            ChangeContent();
        };
    }

    $("#tree").fancytree({
        autoActivate: true, //false, // we use scheduleAction()
        autoCollapse: false, //true,
        //			autoFocus: true,
        autoScroll: true,
        clickFolderMode: 3, // expand with single click
        minExpandLevel: 1,
        tabbable: false, // we don't want the focus frame
        // scrollParent: null, // use $container

        focus: function(event, data) {
            var node = data.node;
            // Auto-activate focused node after 1 second
            if (node.data.href) {
                node.scheduleAction("activate", 1000);
            }
        },
        blur: function(event, data) {
            data.node.scheduleAction("cancel");
        },
        activate: function(event, data) {
            var node = data.node,
                orgEvent = data.originalEvent || {};

            //if (node.data.href) {
            //    //window.open(node.data.href, (orgEvent.ctrlKey || orgEvent.metaKey) ? "content" : node.data.target);
            //    parent.document.getElementById("content").src = node.data.href;
            //}
            if (window.parent && parent.history && parent.history.pushState) {
                // Add #HREF to URL without actually loading content
                //parent.history.pushState({ title: node.title }, "", "#" + (node.data.href || ""));

                // 2015.10.12
                parent.history.pushState({
                    title: node.title
                }, "", "#" + (node.data.href + "&tentantId=" + node.data.tenantID || ""));
            }
        },
        click: function(event, data) { // allow re-loads
            var node = data.node,
                orgEvent = data.originalEvent;

            //2015.8.3
            //if (node.isActive() && node.data.href) {
            if (node.data.href) {
                // data.tree.reactivate();
                //window.open(node.data.href, (orgEvent.ctrlKey || orgEvent.metaKey) ? "content" : node.data.target);

                //2015.10.12 add tenantid
                //parent.document.getElementById("content").src = node.data.href;
                parent.document.getElementById("content").src = node.data.href + "&tenantId=" + node.data.tenantID;
            }
        },
        extensions: ["nodeType"],
        extensions: ["tenantID"],
        lazyLoad: function(event, data) {
            // var node = data.node;                  // Issue an ajax request to load child nodes

            var tenantID = GetQueryStringByName("id");
            if (tenantID == "") {
                tenantID = data.node.data.tenantID;
                tenantID = window.CurrentTenantID ? CurrentTenantID : tenantID;
            }
            data.result = {
                url: "http://22.11.140.236:83/api/Tree/ChildrenNode?key=" + data.node.key + "&nodeType=" + data.node.data.nodeType + "&tenantID=" + tenantID
            };

        }
    });

    var tree = $(":ui-fancytree").fancytree("getTree"),
        frameHash = window.location.hash.replace("#", "");

    var root = tree.rootNode;
    root.lazy = true;

    root.load(true).done(function() {
        root.setExpanded(true);

        //根节点的Key（此时的根节点是root.children[0])
        var key = root.children[0].key;

        //展开第二级目录
        var tree = $(":ui-fancytree").fancytree("getTree");
        tree.getNodeByKey(key).load(true).done(function() {
            tree.getNodeByKey(key).setExpanded(true);

            //Hash
            //var frameHash = window.location.hash.replace("#","");
            if (frameHash != "") {
                var encodeUrl = encodeURIComponent(frameHash);
                //2015.7.27
                //LoadNodeMenu(encodeUrl);
                document.getElementById("content").src = frameHash;
            }
        })
    });
})




function ChangeContent() {
    var itemPath = encodeURIComponent(document.getElementById("content").contentWindow.location.pathname);
    //alert(itemPath);
    if (itemPath == "%2FHome%2FSearch") {
        return;
    }

    var responseKeyInfoText = $.ajax({
        url: "http://22.11.140.236:83/api/Tree/PathByUrl?url=" + itemPath,
        dataType: "json", //返回json格式的数据
        async: false
    });

    if (responseKeyInfoText.responseJSON) {
        var idPath = responseKeyInfoText.responseJSON.IDs;
        var namePath = responseKeyInfoText.responseJSON.Names;
    }

    // itemPath = itemPath.replace("file:///D:/Projects/TestTreeview/TestTreeview/", "");
    var top = document.getElementById("Header");


    ////TODO: 顶部菜单的显示
    if (top) {
        if (itemPath.toLowerCase() == encodeURIComponent("/searh.html").toLowerCase()) {
            top.innerHTML = "<li><a href=\"/\">主页</a></li>";
            top.innerHTML += "<li><span style=\"padding:0 5px; color:#ccc;\">/</span><a>搜索</a></li>";
        } else {
            //切换到Tree Tab，同步Treeview的节点
            //$('#tab_list').tab('show');
            var pathArr = new Array();
            pathArr = namePath.split("\\");
            var idArr = new Array();
            idArr = idPath.split("\\");
            top.innerHTML = "<li ><a href=\"/\">主页</a></li>";

            var tenantId;

            for (var i = 1; i < pathArr.length; i++) {
                var item = pathArr[i].replace(".html", "").replace(".htm", "");
                var id;
                if (i < pathArr.length - 1) {
                    if (i == 1) {
                        id = "T" + idArr[i];
                        tenantId = idArr[i];
                    } else
                        id = "C" + idArr[i];

                    top.innerHTML += "<li><span style=\"padding:0 5px; color:#ccc;\">/</span><a href=\"javascript:SwitchChannel('" + id + "','" + tenantId + "');\">" + item + "</a></li>";
                } else
                    top.innerHTML += "<li><span style=\"padding:0 5px; color:#ccc;\">/</span>" + item + "</li>";
            }

        }

    }

    var divTree = document.getElementById("tree");

    if (divTree) {
        //var nav = this.frames["nav"];
        //2015.7.27
        LoadNodeMenu(itemPath, idPath);
        // nav.ActiveItme(itemPath);
    }

}

function SwitchChannel(channelID, tenantID) {
    var contentFrame = document.getElementById("content");
    contentFrame.src = "/Home/Right?parentKey=" + channelID + "&tenantId=" + tenantID;
}


function Menu_Loaded(tree, i, keyArr) {
    //2015.7.31
    if (i >= keyArr.length - 1)
        return;

    var node = tree.getNodeByKey(keyArr[i]);
    if (node) {
        //2015.7.31
        if (i == keyArr.length - 2) {
            //Leaf Node
            node.setActive();
            node.data.noteType;
            return;
        }
        if (!node.isLoaded() || node.isLoaded() == false) {
            //如果没有加载这个节点，就load
            node.load(true).done(function() {
                Menu_Loaded(tree, i + 1, keyArr)
            });

            //node.setExpanded();
        } else {
            //如果已经加载了这个节点，就递归看下一个
            Menu_Loaded(tree, i + 1, keyArr);
        }
    }


}

//2015.7.27
function LoadNodeMenu(item, idPath) {
    var tree = $(":ui-fancytree").fancytree("getTree");
    if (!tree.activeNode || encodeURI(tree.activeNode.data.href) != item) {
        //如果当前的页面不是选中的菜单节点，就加载这个节点

        if (idPath == "") {
            var responseKeyInfoText = $.ajax({
                url: "http://22.11.140.236:83/api/Tree/PathByUrl?url=" + item,
                dataType: "json", //返回json格式的数据
                async: false
            })

            if (responseKeyInfoText.responseJSON) {
                idPath = responseKeyInfoText.responseJSON.IDs;
                var namePath = responseKeyInfoText.responseJSON.Names;
            }
        }

        var keyArr = new Array();
        keyArr = idPath.split("\\");
        if (keyArr.length > 1) {
            keyArr[1] = "T" + keyArr[1]; //keyArr[1]是根节点，Tenant,Key="T"+id
            for (var i = 2; i < keyArr.length - 1; i++) {
                keyArr[i] = "C" + keyArr[i]; //中间的节点是Channel,Key="C"+id
            }

            //最后一个节点是Doc,Key = "D"+id
            keyArr[keyArr.length - 1] = "D" + keyArr[keyArr.length - 1]
        }

        var i = 1;

        Menu_Loaded(tree, i, keyArr);

        //var leafNode = tree.getNodeByKey(keyArr[keyArr.length - 1]);
        //if (leafNode)
        //    leafNode.setActive();
    }

}

//no use
function ActiveItme(item) {
    var tree = $(":ui-fancytree").fancytree("getTree");
    // frameHash = window.parent && window.parent.location.hash;

    if (item) {
        item = item.replace("#", "");
        tree.visit(function(node) {
            if (node.data.href && node.data.href === item) {
                node.setActive();
                return false; // done: break traversal
            }
        });
    }
}

function GetQueryStringByName(name) {
    var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));

    if (result == null || result.length < 1) {
        return "";
    }

    return result[1];
}

function GetInternetExplorerVersion() {
    var rv = 999; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}



var html = require("./tpl.html");


module.exports = {
    viewModel: function() {},
    template: html
};