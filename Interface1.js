/*
interface Composite{
 function add(child);
 function remove(child);
 function getChild(index);
}

interface FormItem{
function Save();
}
 */

var CompositeForm = function(id,method,action){
 this.implementsInterfaces = ["Composite","FormItem"];
};

function addForm(formInstance){
 if(!implements(formInstance,'Composite','FormItem')){
    throw new Error("object does not implement a required interface");
 }
    console.log("well done!");
}

function implements(obj){
    for(var i=1; i<arguments.length; i++){   //loop through all arguments after the first one
        var interfaceName = arguments[i];
        var interfaceFound = false;
        for(var j =0;j<obj.implementsInterfaces.length;j++){
            var item = obj.implementsInterfaces[j];
            if(item==interfaceName){
             interfaceFound = true;
                break;
            }
        }
        if(!interfaceFound){
            return false;
        }
    }
    return true;
}