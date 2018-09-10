const topics = [{
    id: 1,
    topic: "There is no topic for today. Please check back again tomorrow!"
  },
  {
    id: 2,
    topic: "There is no topic for today. Please check back again tomorrow!"
  },
  {
    id: 3,
    topic: "Smelly foods"
  },
  {
    id: 4,
    topic: "Demonstrations against nuclear power plants"
  },
  {
    id: 5,
    topic: "The end of summer"
  },
  {
    id: 6,
    topic: "Pools VS Seas/Rivers"
  },
  {
    id: 7,
    topic: "Gymnastics"
  },
  {
    id: 8,
    topic: "There is no topic for today. Please check back again tomorrow!"
  },
  {
    id: 9,
    topic: "There is no topic for today. Please check back again tomorrow!"
  },
  {
    id: 10,
    topic: "Plastic supermarket bags"
  },
  {
    id: 11,
    topic: "House cleaning"
  },
  {
    id: 12,
    topic: "School home work"
  },
  {
    id: 13,
    topic: "What is beauty to you?"
  },
  {
    id: 14,
    topic: "Old vs. New: Dating customs"
  },
  {
    id: 15,
    topic: "There is no topic for today. Please check back again tomorrow!"
  },
  {
    id: 16,
    topic: "There is no topic for today. Please check back again tomorrow!"
  },
  {
    id: 17,
    topic: "There is no topic for today. Please check back again tomorrow!"
  },
  {
    id: 18,
    topic: "Do you buy anything on the Internet?"
  },
  {
    id: 19,
    topic: "Space Development"
  },
  {
    id: 20,
    topic: "Uniqueness of Japanese culture"
  },
  {
    id: 21,
    topic: "Japanese Athletes Overseas"
  },
  {
    id: 22,
    topic: "There is no topic for today. Please check back again tomorrow!"
  },
  {
    id: 23,
    topic: "There is no topic for today. Please check back again tomorrow!"
  },
  {
    id: 24,
    topic: "There is no topic for today. Please check back again tomorrow!"
  },
  {
    id: 25,
    topic: "How to Stop Bullying in School"
  },
  {
    id: 26,
    topic: "How do we measure the 'standard of living'?"
  },
  {
    id: 27,
    topic: "Would you like to have a sixth sense?"
  },
  {
    id: 28,
    topic: "Is adoption common in Japan?"
  },
  {
    id: 29,
    topic: "There is no topic for today. Please check back again tomorrow!"
  },
  {
    id: 30,
    topic: "There is no topic for today. Please check back again tomorrow!"
  },
  {
    id: 31,
    topic: "There is no topic for today. Please check back again tomorrow!"
  },
]


const textBox = document.querySelector('#totd-textbox');

let date = new Date();
let day = date.getDate();

// console.log(day);
// console.log(topics[day - 1].topic);


textBox.innerHTML = `"${(topics[day - 1].topic)}"`;
