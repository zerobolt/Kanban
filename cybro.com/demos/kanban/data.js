var full_task_set = [{
	id: 1,
	status: "new",
	user_id: 1,
	text: "Drag-n-drop with shifting cards",
	tags: [1],
	attachments: [{
	  id: 2,
	  link: "/demos/kanban/attachments/image001.png",
	  size: 19825,
	}],
	comments: [{
		id: 1,
		user_id: 2,
		date: "2021-03-09 10:01",
		text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."
	  },
	  {
		id: 2,
		user_id: 1,
		date: "2021-03-09 10:15",
		text: "Hi, let's just do what we are supposed to do to get the result"
	  },
	  {
		id: 3,
		user_id: 3,
		date: "2021-03-09 10:22",
		text: "Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."
	  },
	  {
		id: 4,
		user_id: 5,
		date: "2021-03-09 10:32",
		text: "Okay, guys, let's meet in person, discuss the finale details of the plan and let's begin at last.."
	  },
	  {
		id: 5,
		user_id: 4,
		date: "2021-03-09 11:15",
		text: "Whatever you say, guys"
	  }
	]
  },
  {
	id: 2,
	status: "work",
	user_id: 6,
	color: 3,
	text: "Performance tests",
	tags: [1],
	comments: [{
		id: 1,
		user_id: 6,
		date: "2021-03-05 14:32",
		text: "Hi, when should I start testing?"
	  },
	  {
		id: 2,
		user_id: 7,
		date: "2021-03-05 15:15",
		text: "As soon as possible"
	  },
	]
  },
  {
	id: 3,
	status: "ready",
	user_id: 3,
	text: "Kanban tutorial",
	tags: [2]
  },
  {
	id: 4,
	status: "work",
	text: "Report Manager",
	tags: [3],
	attachments: [{
	  id: 7,
	  link: "/demos/kanban/attachments/image002.png",
	  size: 23840,
	}, ],
	comments: [{
		id: 1,
		user_id: 5,
		date: "2021-03-05 12:02",
		text: "Hello, are these all files?"
	  },
	  {
		id: 2,
		user_id: 2,
		date: "2021-03-05 13:10",
		text: "One more. i'll attach it later"
	  },
	  {
		id: 3,
		user_id: 5,
		date: "2021-03-05 13:18",
		text: "Ok, thanks"
	  },
	]
  },
  {
	id: 5,
	status: "ready",
	user_id: 7,
	text: "Portlets view",
	tags: [4, 2]
  },
  {
	id: 6,
	status: "new",
	user_id: 4,
	text: "Form Builder",
	tags: [4, 6]
  },
  {
	id: 7,
	status: "ready",
	text: "Code Snippet",
	user_id: 8,
	tags: [1, 2, 3]
  },
  {
	id: 8,
	status: "test",
	user_id: 5,
	text: "Backend integration",
	tags: [5],
  },
  {
	id: 9,
	status: "work",
	user_id: 2,
	text: "Test new authentification service",
	tags: [1, 2],
  },
  {
	id: 10,
	status: "test",
	user_id: 3,
	text: "cybro Jet",
	tags: [4],
	comments: [{
		id: 1,
		user_id: 3,
		date: "2021-03-09 12:02",
		text: "Hi! What time will the meeting start ?"
	  },
	  {
		id: 2,
		user_id: 2,
		date: "2021-03-09 13:10",
		text: "At 3 p.m."
	  },
	]
  },
  {
	id: 11,
	status: "test",
	user_id: 1,
	text: "Chat app interface",
	tags: [4, 2],
	comments: [{
	  id: 1,
	  user_id: 1,
	  date: "2021-03-09 11:15",
	  text: "No worry, I am planning to finish it up in half an hour and make them public for all. Just wait..)"
	}, ]
  },
  {
	id: 12,
	status: "done",
	user_id: 6,
	text: "Pivot Chart widget",
	tags: [1],
	attachments: [{
	  id: 8,
	  link: "/demos/kanban/attachments/image003.png",
	  size: 27550,
	}, ],
	comments: [{
		id: 1,
		user_id: 8,
		date: "2018-06-14 22:31",
		text: "One more question, guys. What about the latest specifications?"
	  },
	  {
		id: 7,
		user_id: 9,
		date: "2018-06-14 22:43",
		text: "They are ready, but not published yet."
	  },
	  {
		id: 8,
		user_id: 8,
		date: "2018-06-14 23:01",
		text: "Wow great, could you please share them with me?"
	  }
	]
  },
];

var imagePath = "/demos/kanban/users/";
var users_set = [{
	id: "reset",
	value: ""
  },
  {
	id: 1,
	value: "Alisha Terson",
	image: imagePath + "alisha_terson.png"
  },
  {
	id: 2,
	value: "Martin Bennet",
	image: imagePath + "martin_bennet.png"
  },
  {
	id: 3,
	value: "Douglass Kelton",
	image: imagePath + "douglass_kelton.png"
  },
  {
	id: 4,
	value: "Lucas Legor",
	image: imagePath + "lucas_legor.png"
  },
  {
	id: 5,
	value: "Sophi Rosen",
	image: imagePath + "sophi_rosen.png"
  },
  {
	id: 6,
	value: "Anna Gibson",
	image: imagePath + "anna_gibson.png"
  },
  {
	id: 7,
	value: "Martin Helbeck",
	image: imagePath + "martin_helbeck.png"
  },
  {
	id: 8,
	value: "Nicole Beek",
	image: imagePath + "nicole_beek.png"
  },
  {
	id: 9,
	value: "Marcus Storm",
  },
];

var tags_set = [
	{id:1, value:"cybro"},
	{id:2, value:"jet"},
	{id:3, value:"easy"},
	{id:4, value:"hard"},
	{id:5, value:"kanban"},
	{id:6, value:"docs"},
];

var colors_set = [
    {id:1, value:"Normal", color:"green"},
    {id:2, value:"Low", color:"orange"},
	{id:3, value:"Urgent", color:"red"}
];