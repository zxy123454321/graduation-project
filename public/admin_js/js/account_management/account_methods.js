define(["jquery","account_add","account_change","account_delete","account_search"], function($,added,changed,deleted,searched) {
    //console.log("i am methods");
    return {
        add:added,
        change:changed,
        delete:deleted,
        search:searched
    }
});