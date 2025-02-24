cybro.type(cybro.ui.kanbanlist,{
	name: "icons",
	icons:[
		{ id:"vote", icon:"mdi mdi-thumb-up-outline", show: function(obj){ return !!obj.votes }, template:"#votes#"},
		{ id:"comments", icon:"mdi mdi-comment-outline", show: function(obj){ return !!obj.comments }, template:"#comments.length#"},
		{ id:"edit", icon:"mdi mdi-comment"}
	]
});
cybro.type(cybro.ui.kanbanlist,{
	name: "avatars",
	icons:[
		{icon: "mdi mdi-comment" , show: function(obj){ return !!obj.comments }, template:"#comments.length#"},
		{icon: "mdi mdi-pencil"}
	],
	templateAvatar: function(obj){
		if(obj.personId){
			var name = "";
			for(var i=0; i < staff.length && !name;i++){
				if(staff[i].id == obj.personId){
					name = staff[i].name;
				}
			}
			return '<img class="avatar" src="../common/icons/avatars/'+obj.personId+'.jpg" title="'+name+'"/>';
		}
		return "";
	}
});

cybro.type(cybro.ui.dataview,{
	name: "avatars",
	width: 80,
	height: 80,
	template: function(obj){
		var name = obj.name.split(" ");
		return '<img class="large_avatar" src="./common/icons/avatars/'+obj.id+'.jpg" title="'+obj.name+'"/><div class="name">'+name[0]+'</div>'
	}
});


	
		
		

var base_task_set =[
	{ id:1, status:"new", text:"Task 1", tags:"cybro,docs", comments:[{text:"Comment 1"}, {text:"Comment 2"}] },
	{ id:2, status:"work", text:"Task 2", color:"red", tags:"cybro", votes:1, personId: 4  },
	{ id:3, status:"work", text:"Task 3", tags:"cybro,docs", comments:[{text:"Comment 1"}], personId: 6 },
	{ id:4, status:"test", text:"Task 4 pending", tags:"cybro 2.5", votes:1, personId: 5  },
	{ id:5, status:"new", text:"Task 5", tags:"cybro,docs", votes:3  },
	{ id:5, status:"new", text:"Task 6", tags:"cybro,kanban", comments:[{text:"Comment 1"}, {text:"Comment 2"}], personId: 2 },
	{ id:6, status:"work", text:"Task 7", tags:"cybro", votes:2, personId: 7, image: "image001.png"  },
	{ id:7, status:"work", text:"Task 8", tags:"cybro", comments:[{text:"Comment 1"}, {text:"Comment 2"}], votes:5, personId: 4  },
	{ id:8, status:"work", text:"Task 9", tags:"cybro", votes:1, personId: 2},
	{ id:9, status:"work", text:"Task 10", tags:"cybro", comments:[{text:"Comment 1"}, {text:"Comment 2"}, {text:"Comment 3"}], votes:10, personId:1 },
	{ id:10, status:"work", text:"Task 11", tags:"cybro 2.5", votes:3, personId: 8 },
	{ id:11, status:"done", text:"Task 12", votes:2 , personId: 8, image: "image002.png"},
	{ id:12, status:"ready", text:"Task 14",  personId: 8}
];
var order_task_set = [
	{ id:1, status:"new", text:"Task 1", tags:"cybro,docs",   comments:[{text:"Comment 1"}, {text:"Comment 2"}], $index: 1 },
	{ id:2, status:"work", text:"Task 2", color:"red", tags:"cybro", votes:1, personId: 4 , $index: 6 },
	{ id:3, status:"work", text:"Task 3", tags:"cybro,docs", comments:[{text:"Comment 1"}], personId: 6 , $index: 1},
	{ id:4, status:"test", text:"Task 4 pending", tags:"cybro 2.5", votes:1, personId: 5, $index: 0  },
	{ id:5, status:"new", text:"Task 6", tags:"cybro,kanban", comments:[{text:"Comment 1"}, {text:"Comment 2"}], personId: 2, $index: 0},
	{ id:6, status:"work", text:"Task 7", tags:"cybro", votes:2, personId: 7, $index: 2  },
	{ id:7, status:"work", text:"Task 8", tags:"cybro", comments:[{text:"Comment 1"}, {text:"Comment 2"}], votes:5, personId: 4, $index: 3  },
	{ id:8, status:"work", text:"Task 9", tags:"cybro", votes:1, personId: 2, $index: 4},
	{ id:9, status:"work", text:"Task 10", tags:"cybro", comments:[{text:"Comment 1"}, {text:"Comment 2"}, {text:"Comment 3"}], votes:10, personId:1 , $index: 5},
	{ id:10, status:"work", text:"Task 11", tags:"cybro 2.5", votes:3, personId: 8, $index: 0 },
	{ id:11, status:"done", text:"Task 12", votes:2 , personId: 8, $index: 0},
	{ id:12, status:"work", text:"No index", votes:2 , personId: 8}

];

var task_set = [
	{ id:1, status:"new", text:"Task 1", tags:"cybro,docs" },
	{ id:2, status:"new", text:"Task 2", tags:"cybro" },
	{ id:3, status:"new", text:"Task 3", tags:"cybro" },
	{ id:4, status:"new", text:"Task 4", tags:"cybro" },
	{ id:5, status:"new", text:"Task 5", tags:"cybro,docs" },

	{ id:6, status:"ready", text:"Task 6", tags:"cybro,docs" },
	{ id:7, status:"ready", text:"Task 7", tags:"cybro" },
	{ id:8, status:"ready", text:"Task 8", tags:"cybro" },
	{ id:9, status:"ready", text:"Task 9", tags:"cybro" },
	{ id:10, status:"ready", text:"Task 10", tags:"cybro,docs" },

	{ id:11, color:"red", status:"work", text:"Task 11", tags:"cybro,docs" },
	{ id:12, status:"work", text:"Task 12", tags:"cybro" },
	{ id:13, status:"work", text:"Task 13", tags:"cybro" },
	{ id:14, color:"red", status:"work", text:"Task 14", tags:"cybro" },
	{ id:15, status:"work", text:"Task 15", tags:"cybro,docs" },

	{ id:16, status:"test", text:"Task 16", tags:"cybro,docs" },
	{ id:17, color:"red", status:"work", text:"Task 17", tags:"cybro" },

	{ id:18, status:"done", text:"Task 18", tags:"cybro,docs" },
	{ id:19, color:"red", status:"done", text:"Task 19", tags:"cybro" },

	{ id:20, status:"complete", text:"Task 20", tags:"cybro,docs" },
	{ id:21, color:"red", status:"complete", text:"Task 21", tags:"cybro" },


	{ id:22, status:"ready", text:"Task 22", tags:"cybro,docs" },
	{ id:23, color:"red", status:"ready", text:"Task 23", tags:"cybro" }
];
var staff= [
	{id:1, name:"Rick Lopes"},
	{id:2, name:"Martin Farrell"},
	{id:3, name:"Douglass Moore"},
	{id:4, name:"Eric Doe"},
	{id:5, name:"Sophi Elliman"},
	{id:6, name:"Anna O'Neal"},
	{id:7, name:"Marcus Storm"},
	{id:8, name:"Nick Branson"}
];