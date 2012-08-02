/*
 
 javascript权威指南学习笔记
 @author:Teddy (2012.07.31- 2012.08.02)
 
*/

/* 1.n! */
var factorial_ = function(n){
    if(n<=1) return 1;
    else return n*arguments.callee(n-1);
};
/* 2.get the max value form a group of numbers*/
var getMax_ = function(){
    var max_ = Number.NEGATIVE_INFINITY;
    for(var i=0;i<arguments.length;i++){
        max_ = arguments[i]>max_?arguments[i]:max_;
    }
    return max_;
}
/* 3.get the min value form a group of numbers*/
var getMin_ = function(){
    var min_ = Number.POSITIVE_INFINITY;
    for(var i=0;i<arguments.length;i++){
        min_ = arguments[i]<min_?arguments[i]:min_;
    }
    return min_;
}
/* 4.order an array asc*/
var orderAsc_ = function(arr_){
    return arr_.sort(function(a,b){return a-b});
}
/* 5.order an array desc*/
var orderDesc_ = function(arr_){
    return arr_.sort(function(a,b){return b-a});
}
/* 6.check the object is number or not*/
var isNum_ = function(num){  
    reg=/^\d*$/;  
    if(reg.exec(num)){  
        return true;  
    }else{  
        return false;  
    }  
}
/* 7.replace all non-number characters into '' */
var beNum_ = function(obj){  
    reg=/^\d*$/;  
    var num = obj.toString().replace(/\D/g,"");
    if(num.length>0) return num;
    else throw new Error('"'+obj+'" can not change into a number!');
} 
/* 8.return an array that holds the names of the enumerable properties of obj*/
var getPropertyNames_ = function(/*object*/obj){
    var arr_ = [];
    for(name in obj) arr_.push(name+':'+obj.name+'<br>');
    return arr_;
}
/* 9.copy the enumerable properties of the object form obj_f to object obj_t
  if to is null, a new object is created. The function returns obj_t or the 
  newly created object.*/
var copyProperties_ = function(/*object*/obj_f,/*object*/obj_t){
    if(!obj_t) obj_t = {};
    for(name in obj_f) obj_t.name = obj_f.name;
    return obj_t;
}
/* 10.copy the enumerable properties of the object from obj_f to the objec obj_t, but 
  only the ones that are not already defined by obj_t.*/
var copyUndefinedProperties_ = function(/*object*/obj_f,/*object*/obj_t){
    for(name in obj_f){
        if(!name in obj_t) obj_t.name = obj_f.name;
    }
}
/* 11.pass each element of the array arr to the specified predicate function.
  Return an array that hold the elements for whick the predicate returned true.*/
var filterArray_ = function(/*array*/arr,/*boolean function*/func){
    var results = [];
    var lth = arr.length;    // In case the function func changes the length!
    for(var i =0;i < lth;i++){
        if(func(arr[i])) results.push(arr[i]);
    }
    return results;
}
/* 12.Return the array of values that result when each of the elements
  of the array arr are passed to the function func*/
var mapArray_ = function(/*array*/arr,/*functioin*/func){
    var results = [];
    var lth = arr.length;    // In case the function func changes the length!
    for(var i =0;i < lth;i++) results[i] = func(arr[i]);
    return results;
}
/* 13.Return the array of values that result when each of the elements
  of the array arr are passed to the functions1 that worked on elements.
  and order the list of the array by the functions2 that worked on array.*/
var mapAndOrderArray_ = function(/*array*/arr,/*array of functioins1*/arrs1,
    /*array of functions2*/arrs2){
    var results = arr.concat();
    results = mapArray_(results,arrs1);   // do map and filter on the array arr.
    results = orderArray_(results,arrs2);  // do order on the array.
    return results;
}
/* 14.Return the array of values that result when each of the elements
  of the array arr are passed to the functions at arrs serail*/
var mapArray_ = function(/*array*/arr,/*functions' array*/arrs){
    var results = arr.concat();
    var lth;
    for(var i = 0;i < arrs.length;i++){
        lth = results.length;    // In case the current function changes the length!
        for(var j =0;j < lth;j++) results[j] = arrs[i](results[j]);
    }
    return results;
}
/* 15.Return the array that ordered by the functions of arrs*/
var orderArray_ = function(/*array*/arr,/*functions' array*/arrs){
    var results = arr.concat();
    for(var i = 0;i < arrs.length;i++){ 
        results = arrs[i](results);
    }
    return results;
}


























