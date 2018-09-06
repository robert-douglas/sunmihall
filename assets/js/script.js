const topics = [{
    id: 1,
    topic: "I am the topic of day 1."
  },
  {
    id: 2,
    topic: "I am the topic of day 2."
  },
  {
    id: 3,
    topic: "I am the topic of day 3."
  },
  {
    id: 4,
    topic: "I am the topic of day 4."
  },
  {
    id: 5,
    topic: "I am the topic of day 5."
  },
  {
    id: 6,
    topic: "I am the topic of day 6."
  },
  {
    id: 7,
    topic: "I am the topic of day 7."
  },
  {
    id: 8,
    topic: "I am the topic of day 8."
  },
  {
    id: 9,
    topic: "I am the topic of day 9."
  },
  {
    id: 10,
    topic: "I am the topic of day 10."
  },
  {
    id: 11,
    topic: "I am the topic of day 11."
  },
  {
    id: 12,
    topic: "I am the topic of day 12."
  },
  {
    id: 13,
    topic: "I am the topic of day 13."
  },
  {
    id: 14,
    topic: "I am the topic of day 14."
  },
  {
    id: 15,
    topic: "I am the topic of day 15."
  },
  {
    id: 16,
    topic: "I am the topic of day 16."
  },
  {
    id: 17,
    topic: "I am the topic of day 17."
  },
  {
    id: 18,
    topic: "I am the topic of day 18."
  },
  {
    id: 19,
    topic: "I am the topic of day 19."
  },
  {
    id: 20,
    topic: "I am the topic of day 20."
  },
  {
    id: 21,
    topic: "I am the topic of day 21."
  },
  {
    id: 22,
    topic: "I am the topic of day 22."
  },
  {
    id: 23,
    topic: "I am the topic of day 23."
  },
  {
    id: 24,
    topic: "I am the topic of day 24."
  },
  {
    id: 25,
    topic: "I am the topic of day 25."
  },
  {
    id: 26,
    topic: "I am the topic of day 26."
  },
  {
    id: 27,
    topic: "I am the topic of day 27."
  },
  {
    id: 28,
    topic: "I am the topic of day 28."
  },
  {
    id: 29,
    topic: "I am the topic of day 29."
  },
  {
    id: 30,
    topic: "I am the topic of day 30."
  },
  {
    id: 31,
    topic: "I am the topic of day 31."
  },
]


const textBox = document.querySelector('#textBox');

let date = new Date();
let day = date.getDate();

// console.log(day);
// console.log(topics[day - 1].topic);


textBox.innerHTML = `"${(topics[day - 1].topic)}"`;