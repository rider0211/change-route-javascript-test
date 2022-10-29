function cd(a, b) {
    var a_path_arry = a.split('/');
    var a_clear_path = [];
    var b_clear_path = [];
    a_path_arry.map((ele) => {
        if(ele != '') a_clear_path.push(ele);
    });
    
    b_path_arry = b.split('/');
    b_path_arry.map((ele) => {
        if(ele != '') b_clear_path.push(ele);
    });
    b_path_length = b_clear_path.length;

    for(var i=0;i<b_path_length;i++) {
        if(b_clear_path[i] == '.') {
            continue;
        } else if(b_clear_path[i] != '..') {
            a_clear_path.push(b_clear_path[i])
        }  
        else {
            a_clear_path.pop();            
        }
    }

    var path = '';
    a_clear_path.map((ele)=> {
        path += ele + '/';
    });

    console.log(path);
    
}

cd('a/b/c', './//d/e');
