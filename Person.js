function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype = {
    getName:function(){
        return this.name;
    },
    getAge:function(){
        return this.age;
    }
};
var alice = new Person('alice',93);
var jack = new Person('lili',74);
console.log(alice.name);
console.log(alice.age);
console.log(jack.age);
console.log(jack.getAge());
console.log(jack.getName());
Person.prototype.getGreeting = function(){
    console.log("hi"+ this.name);
};
var ll = new Person('pp',10);
console.log(ll.getGreeting());
jack.sayHello = function(){
    console.log("hello everyone!");
};
