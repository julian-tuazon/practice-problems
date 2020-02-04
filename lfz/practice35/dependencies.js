

var dependencies = [
  {
    name: 'superCool',
    dependencies: [
      'awesome',
      'stdio',
      'moocow'
    ]
  },
  {
    name: 'mrMan',
    dependencies: [
      'sayWhat',
      'stdio',
      'iPity'
    ]
  },
  {
    name: 'moocow',
    dependencies: [
      'bovine',
      'quadrapated'
    ]
  },
  {
    name: 'stdio',
    dependencies: [
      'c_lib',
      'keys',
    ]
  }
]

function d(depend) {
  var answer = [];
  var forbidden = ['superCool', 'mrMan'];
    for (var i = 0, m = depend.length - 1; i < depend[0].dependencies.length, m > 0; i++, m--) {
      if (!answer.includes(depend[0].dependencies[i]) && !forbidden.includes(depend[0].dependencies[i])) {
        answer.push(depend[0].dependencies[i]);
      }
      for (var k = 0; k < depend[m].dependencies.length; k++) {
        if (!answer.includes(depend[m].dependencies[k]) && !forbidden.includes(depend[m].dependencies[k])) {
          answer.push(depend[m].dependencies[k]);
        }
      }
      if (!answer.includes(depend[m].name) && !forbidden.includes(depend[m].name)) {
        answer.push(depend[m].name);
      }
  }
  return answer;
}

console.log(d(dependencies));
