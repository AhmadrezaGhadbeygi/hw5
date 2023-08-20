function get() {
  let Finall_arr = [];
  while (true) {
    let data = prompt("enter name and age : ");
    if (data == "no" || data == "") {
      break;
    }
    let data_arr = [];
    let person_object = {};
    data_arr = data.split(" ");
    person_object.Name = data_arr[0];
    person_object.Age = data_arr[1];

    Finall_arr.push(person_object);
  }

  let sort_Age = Finall_arr.sort((a, b) => +a.Age - +b.Age);
  console.log(sort_Age);
}

get();
