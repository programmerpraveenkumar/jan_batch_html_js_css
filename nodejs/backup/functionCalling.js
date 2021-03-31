function executeFunction(fun){
    fun();
}
executeFunction(
    function(){
        var add = 5+8;
        console.log("this is sample function",add);
    }
);

