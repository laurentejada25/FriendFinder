//DATA- hold info of the user
//used below is dummy data

var friends = [
  {
    name:"Ahmed",
    photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores:[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    name:"Ryan",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Ryan_Reynolds_by_Gage_Skidmore.jpg/220px-Ryan_Reynolds_by_Gage_Skidmore.jpg",
    scores:[
        4,
        3,
        2,
        1,
        3,
        4,
        5,
        5,
        2,
        1
    ]
  },
  {
    name: "Oprah",
    photo: "https://www.biography.com/.image/c_fit%2Ccs_srgb%2Ch_406%2Cq_50%2Cw_620/MTE1ODA0OTcxODI3Mjk5ODUz/oprah-winfrey-1980s-raw.jpg",
    scores: [
        1,
        2,
        3,
        4,
        5,
        4,
        3,
        2,
        1,
        2
    ]
  }
]

//Array is exported so other files can use it
module.exports = friends;