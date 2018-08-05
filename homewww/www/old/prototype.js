var a={
  x:10,
  calculate:function(z){
    return this.x + this.y + z
  }
}
// var b = Object.create(a, {x:{value:20},y: {value: 20}});
// var c = Object.create(a, {y: {value: 30}});
// var d = Object.create(a,{y:{value:10}});
// console.log(b.calculate(30));
// console.log(c.calculate(40));
// console.log(d.calculate(40));

var b = {
  y:20,
  _proto_:a
};
var c = {
  y:30,
  _proto_:a
};
b.calculate(30);
c.calculate(40);
console.log(b.calculate(30));
console.log(c.calculate(40));
// console.log(d.calculate(40));