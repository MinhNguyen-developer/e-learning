// class SessionItem {
//   $container = document.createElement("div");

//   $lessonListExpand = document.createElement("ul");
//   $sessionItem = document.createElement("li");

//   constructor() {
//     this.$lessonListExpand.innerHTML = "Lesson";
//     this.$sessionItem.innerHTML = "Session";

//     this.$container.appendChild(this.$lessonListExpand);
//     this.$lessonListExpand.appendChild(this.$sessionItem);
//   }
// }

// export { SessionItem };

var ul = document.querySelector("#lession-list");
console.log(ul);
const lessonListArr = [
  {
    lesson1: {
      name: "Lesson 1 blablo",
      description: "description ls 1",
      sections: [
        { session1: { author: "aiday", link: "link1" } },
        { session2: { author: "aiday2", link: "link2" } },
      ],
    },
  },
  //   {
  //     lesson2: [
  //       { session1: { author: "aiday", link: "link1" } },
  //       { session2: { author: "aiday2", link: "link2" } },
  //     ],
  //   },
];

for (let lession of lessonListArr) {
}
