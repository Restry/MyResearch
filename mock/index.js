module.exports = function() {
    var data = {
        random: random([], 0)
    };

    return data
}

var roundin = 0;

function random(root, pid) {

    // Create 100 users

    for (var i = 0; i < 10; i++) {


        var key = parseInt(Math.random() * 10000000000);
        var node ={
            id: key,
            pid: pid,
            name: 'Depart-' + key,
            isParent: false 
        };

        if (parseInt((Math.random() * 1000) % 2) && roundin < 10) {
            roundin++;
            node.isParent=true;
            node.name='Depart-' + i;
            random(root, key); 
        }

        root.push(node);
    }
    return root;

}