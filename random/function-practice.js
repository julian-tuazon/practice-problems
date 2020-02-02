function greet() {
  const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
  console.log(reply);
}

const obj = {
  animal: 'dogs', sleepDuration: '12 and 17 hours',
};

greet.call(obj);
