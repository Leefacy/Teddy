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
/* 16.Parse ID card
   Return a object contains isCard,age,sex*/
var idCardParse = function(num){
    var idCard = {isCard:true};   // the return object.
    var no = num.toString();   // the id card number
    var age;  //
    var sex;  //
    try{
        if(no.length==18){//身份证位数为18位
		  for(var i=0;i<17;i++){//前十七个必须是数字
			if(isNaN(Number(no.charAt(i)))){
				throw new Error('非法的身份证号码!前17位应该是数字.');
			}
		  }
		  if(isNaN(Number(no.charAt(17)))){//最后一位可以是x
			if(no.charAt(17)!='X'&&no.charAt(17)!='x'){
				throw new Error('非法的身份证号码!最后为只能为X或者x的非数字字符.');
			}
		  }
		  if(Number(no.substr(10,2))>12||Number(no.substr(10,2))==0){//月份必须在1-12之间
			throw new Error('非法的身份证号码!月份应该在1-12之间.');
		  }
		  var year = Number(no.substr(6,4));
		  if(year%400==0||(year%4==0&&year%100!=0)){//判断是否为闰年
			if(Number(no.substr(10,2))==2){//闰年2月有29天
				if(Number(no.substr(12,2))>29||Number(no.substr(12,2))==0){
					throw new Error('非法的身份证号码!');
				}
			}
		  }else{//非闰年，二月为28天
			if(Number(no.substr(10,2))==2){
				if(Number(no.substr(12,2))>28||Number(no.substr(12,2))==0){
					throw new Error('非法的身份证号码!');
				}
			}
		  }
		  var month = Number(no.substr(10,2));//判断大月是否正确
		  if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
			if(Number(no.substr(12,2))>31||Number(no.substr(12,2))==0){
				throw new Error('非法的身份证号码!');
			}
		  }//判断小月是否正确
		  if(month==4||month==6||month==9||month==11){
			if(Number(no.substr(12,2))>30||Number(no.substr(12,2))==0){
				throw new Error('非法的身份证号码!');
			}
		  }
		  //判断性别
		  sex = Number(no.substr(16,1))%2;
		  //判断出生年月日
		  var birthday = no.substr(6,4)+"-"+no.substr(10,2)+"-"+no.substr(12,2);
		  //判断年龄
		  var date = new Date();
		  date.setYear(Number(no.substr(6,4)));
		  date.setMonth(Number(no.substr(10,2))-1);	
		  date.setDate(Number(no.substr(12,2)));	
		  var now = new Date();
		  age = Number(now.getFullYear())-Number(date.getFullYear());

		  now.setYear(date.getFullYear());
		  if(now.getTime()-date.getTime()<0){
			age = age -1;
		  }
	   }else if(no.length==15){//身份证位数为15位
		  for(var i=0;i<15;i++){//前十五个必须是数字
			if(isNaN(Number(no.charAt(i)))){
                throw new Error('非法的身份证号码!');
			}
		  }
		  if(Number(no.substr(8,2))>12||Number(no.substr(8,2))==0){//月份必须在1-12之间
			throw new Error('非法的身份证号码!');
		  }
		  var year = Number('19'+no.substr(6,2));
		  if(year%400==0||(year%4==0&&year%100!=0)){//判断是否为闰年
			if(Number(no.substr(8,2))==2){//闰年2月有29天
				if(Number(no.substr(10,2))>29||Number(no.substr(10,2))==0){
					throw new Error('非法的身份证号码!');
				}
			}
		  }else{//非闰年，二月为28天
			if(Number(no.substr(8,2))==2){
				if(Number(no.substr(10,2))>28||Number(no.substr(10,2))==0){
					throw new Error('非法的身份证号码!');
				}
			}
		  }
		  var month = Number(no.substr(8,2));//判断大月是否正确
		  if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
			if(Number(no.substr(10,2))>31||Number(no.substr(10,2))==0){
				throw new Error('非法的身份证号码!');
			}
		  }//判断小月是否正确
		  if(month==4||month==6||month==9||month==11){
			if(Number(no.substr(10,2))>30||Number(no.substr(10,2))==0){
				throw new Error('非法的身份证号码!');
			}
		  }
		  //判断性别
		  sex = Number(no.substr(14,1))%2;
		  //判断出生年月日
		  var birthday = '19'+no.substr(6,2)+"-"+no.substr(8,2)+"-"+no.substr(10,2);
		  //判断年龄
		  var date = new Date();
		  date.setYear(Number('19'+no.substr(6,2)));
		  date.setMonth(Number(no.substr(8,2))-1);	
		  date.setDate(Number(no.substr(10,2)));	
		  var now = new Date();
		  age = Number(now.getFullYear())-Number(date.getFullYear());

		  now.setYear(date.getFullYear());
		  if(now.getTime()-date.getTime()<0){
			age = age -1;
		  }
	   }else{
		  throw new Error('输入的身份证号码位数不对!');
	   }
    }catch(e){
        idCard.isCard = false;
        idCard.msg = e.message;
    }finally{
        if(idCard.isCard){
            idCard.age = age;
            idCard.sex = sex?'男':'女';
        }
        return idCard;
    }
}
/* 17.This function implements a breakpoint. It repeatedly prompts the user
   for an expression,evaluates it with the supplied self-inspecting closure,
   and displays the result. It is the closure that provides access to the
   scope to be inspected, so each function must supply its own closure.
   Inspired bt Steve Yen's breakpoint() function at 
   http://trimpath.com/project/wiki/TrimBreakpoint*/
var inspect_ = function(inspector, title){
    var expression,result;
    /* You can use a breakpoint to turn off subsequent breakpoints by creating 
        a preoperty named 'ignore' on this function.*/
    if('ignore' in arguments.callee) return;
    
    while(true){
        /*Figure out how to prompt the user*/
        var message = '';
        /*if we were given a title, display that first*/
        if(title) message = title+'\n';
        /*if we have already evaluated an expression, display it and its value*/
        if(expression) message +='\n'+expression+'==>'+result+'\n';
        else expression ='';
        /* we always display at least a basic prompt*/
        message += 'Enter an expression to evaluate:';
        
        /*Get the user's input, displaying our prompt and using the last
        expression as the default value this time.*/
        expression = prompt(message,expression);
        
        /*If the user did not enter anything( or clicked cancel ), they are done, and
        so we return ,ending the breakpoint.*/
        if(!expression) return;
        
        /*Otherwise, use the supplied closure ti evaluate the expression in the 
        scope that is being inspected. The result will be displayed on the next
        iteration.*/
        result = inspector(expression);
    }
}
var factorial_n = function(n){
    var inspector = function($){ return eval($);}
    inspect_(inspector, 'Entering factorial{}');
    var result = 1;
    while(n>1){
        result = result*n;
        n--;
        inspect_(inspector,'factorial() loop');
    }
    inspect_(inspector,'Exiting factorial{}');
    return result;
}



















