class List {
  constructor(head, next) {
    this.head = head;
    this.next = null;
  }
  insert(data) {
    let head = this.head;
    while (head.next != null) {
      head = head.next;
    }
    head.data = data;
  }
  show() {
    let head = this.head;
    while (head != null) {
      console.log(head.data);
      head = head.next;
    }
  }
}
const list = new List(1);
list.insert(2);
list.insert(3);
list.insert(4);

list.show();
