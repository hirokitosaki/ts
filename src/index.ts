type IdDisplay = {
  id: string;
  display: string;
};

const list: IdDisplay[] = [
  {
    id: "foo",
    display: "foo select"
  },
  {
    id: "bar",
    display: "bar select"
  },
  {
    id: "num",
    display: "num select"
  }
];

const fooIndex = list.map(i => i.id).indexOf("num");
console.log(fooIndex);
