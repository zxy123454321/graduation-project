define(["jquery","file_add","file_change","file_delete","file_search"], function($,added,changed,deleted,searched) {
    //console.log("i am methods");
    return {
        add:added,
        change:changed,
        delete:deleted,
        search:searched
    }
});