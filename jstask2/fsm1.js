var fsm = new StateMachine({
    init:'solid',
  transitions: [
    {name: 'Melt', from: 'solid', to: 'liquid'},
    {name: 'Vaporize', from: 'liquid', to: 'gas'},
    {name: 'Condense', from: 'gas', to: 'liquid'},
    {name: 'Freeze', from: 'liquid', to: 'solid'}
  ],

  methods: {
    onBeforeMelt:        function() {
      console.log('11');/* ... */ },
    onBeforeVaporize:    function() {
      console.log('22');/* ... */ },
    /* ... */
    onBeforeCondense:    function() {
      console.log('33'); /* ... */ },
    onBeforeFreeze:      function() {
      console.log('44');/* ... */ },
    onLeaveSolid:        function() {
      console.log('12');/* ... */ },
    onLeaveLiquid:        function() {
      console.log('13');/* ... */ },
    onLeaveGas:          function() {
      console.log('14');/* ... */ },
    onEnterLiquid:        function() {
      console.log('15');
    /* ... */ },
    onEnterGas:          function() {
      console.log('16');/* ... */ },
    onEnterSolid:        function() {
      console.log('17');/* ... */ },
    onAfterMelt:          function() {
      console.log('18');/* ... */ },
    onAfterVaporise:      function() {
      console.log('19');/* ... */ },
    onAfterCondense:      function() {
      console.log('54');/* ... */ },
    onAfterFreeze:        function() {
      console.log('64');/* ... */ },
  }
  });
// fsm.onMelt();
// fsm.onVaporize();
// fsm.onCondense();
// fsm.onFreeze();
fsm.Melt();
fsm.Vaporize();
fsm.Condense();
fsm.Freeze();
var melt = document.getElementById('melt');
melt.onclick = function (ev) {
  fsm.melt();
}
var solid = document.getElementById('solid');
solid.onclick = function (ev) {
  fsm.vaporize();
}
var cold = document.getElementById('cold');
cold.onclick = function (ev) {
  fsm.Condense();
}
var freeze = document.getElementById('freeze');
freeze.onclick = function (ev) {
  fsm.freeze();
  // fsm.Freeze();
}
// fsm.melt();
// fsm.solid();
// fsm.melt();
// fsm.solid();