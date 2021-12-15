import Screen1 from '../../assets/img/videos/tabletennis-screen1.png';
import Screen2 from '../../assets/img/videos/tabletennis-screen2.png';
import Screen3 from '../../assets/img/videos/tabletennis-screen3.png';
import Screen4 from '../../assets/img/videos/tabletennis-screen4.png';
import Screen5 from '../../assets/img/videos/tabletennis-screen5.png';

export const items = [{
      key: 1,
      title: "01:58",
      cardTitle: "",
      cardSubtitle:"",
      cardDetailedText: "Sub-Activity: Two players are playing a game",
      media: {
        type: "IMAGE",
        source: {
          url: Screen1,
          type:"png"
        }
      },
      // entity: [
      //   {
      //     text: "Player 1",
      //     entity: ["Player1"]
      //   },
      //   {
      //     text: "Player 2",
      //     entity: ["Player2"]
      //   },
      //   {
      //     text: "Racket",
      //     entity: ["Racket"]
      //   },
      //   {
      //     text: "Ball",
      //     entity: ["Ball"]
      //   },
      //   {
      //     text: "Cart",
      //     entity: ["Cart"]
      //   },
      //
      // ],
      entities: [
        {
          text: "Player1",
          left: "360px",
          top: "320px",
          width: "50px",
          height: "50px",
        },
        {
          text: "Player2",
          left: "400px",
          top: "370px",
          width: "70px",
          height: "100px",
        },
        {
          text: "Table",
          left: "365px",
          top: "350px",
          width: "100px",
          height: "100px",
        },
      ],
      attributes: [
        {
          text: "Player1 is extending his right arm",
          entities: ["Player1"]
        },
        {
          text: "Player2 is bending his knees",
          entities: ["Player2"]
        },
        {
          text: "Table is blue",
          entities: ["Table"]
        },
      ],
      relationships: [
        {
          text: "Player1 is standing next to the table",
          entities: ["Player1", "Table"]
        },
        {
          text: "Player2 is standing next to the table",
          entities: ["Player2", "Table"]
        },
      ]
    }, {
      key: 2,
      title: "02:02",
      cardTitle: "",
      cardSubtitle:"",
      cardDetailedText: "Sub-Activity: Player1 is walking around",
      media: {
        type: "IMAGE",
        source: {
          url: Screen2,
          type:"png"
        }
      },
      // entity: [
      //   {
      //     text: "Player2",
      //     entity: ["Player2"]
      //   },
      // ],
      entities: [
        {
          text: "Player1",
          left: "330px",
          top: "280px",
          width: "170px",
          height: "250px",
        },
      ],
      attributes: [
        {
          text: "Player1 is standing",
          entities: ["Player1"]
        },
      ],
      relationships: [
        // {
        //   text: "Girl is holding racket",
        //   entity: ["Girl", "Racket"]
        // },
        // {
        //   text: "Coach is holding girl's hand",
        //   entity: ["Coach", "Girl"]
        // }
      ]
    }, {
      key: 3,
      title: "02:05",
      cardTitle: "",
      cardSubtitle:"",
      cardDetailedText: "Sub-Activity: Player1 is serving the ball",
      media: {
        type: "IMAGE",
        source: {
          url: Screen3,
          type:"png"
        }
      },
      // entity: [
      //   {
      //     text: "Girl",
      //     entity: ["Girl"]
      //   },
      //   {
      //     text: "Coach",
      //     entity: ["Coach"]
      //   },
      //   {
      //     text: "Racket",
      //     entity: ["Racket"]
      //   },
      //   {
      //     text: "Cart",
      //     entity: ["Cart"]
      //   },
      //   {
      //     text: "Ball",
      //     entity: ["Ball"]
      //   },
      // ],
      entities: [
        {
          text: "Player1",
          left: "315px",
          top: "335px",
          width: "320px",
          height: "190px",
        },
        {
          text: "Ball",
          left: "330px",
          top: "440px",
          width: "20px",
          height: "20px",
        },
        {
          text: "Ping Pong Paddle",
          left: "350px",
          top: "420px",
          width: "70px",
          height: "40px",
        },
        {
          text: "Table",
          left: "200px",
          top: "420px",
          width: "340px",
          height: "90px",
        },
      ],
      attributes: [
        {
          text: "Player1 is bending over",
          entities: ["Player1"]
        },
        {
          text: "Ball is white",
          entities: ["Ball"]
        },
        {
          text: "Paddle is red",
          entities: ["Ping Pong Paddle"]
        },
        {
          text: "Table is blue",
          entities: ["Table"]
        }
      ],
      relationships: [
        {
          text: "Player1 is holding the ball",
          entities: ["Player1", "Ball"]
        },
        {
          text: "Player1 is holding the ping pong paddle",
          entities: ["Player1", "Ping Pong Paddle"]
        },
        {
          text: "Player1 is standing next to the table",
          entities: ["Player1", "Table"]
        }
      ]
    }, {
      key: 4,
      title: "03:54",
      cardTitle: "",
      cardSubtitle:"",
      cardDetailedText: "Sub-Activity: Player2 is serving the ball",
      media: {
        type: "IMAGE",
        source: {
          url: Screen4,
          type:"png"
        }
      },
      entities: [],
      attributes: [],
      relationships: []
    }, {
      key: 5,
      title: "03:30",
      cardTitle: "",
      cardSubtitle:"",
      cardDetailedText: "Sub-Activity: Two players are walking around",
      media: {
        type: "IMAGE",
        source: {
          url: Screen5,
          type:"png"
        }
      },
      entities: [],
      attributes: [],
      relationships: []
    }
  ];

// export const items = [{
//       key: 1,
//       title: "01:33",
//       cardTitle: "",
//       cardSubtitle:"",
//       cardDetailedText: "Sub-Activity: Coach and girl both holding rackets",
//       media: {
//         type: "IMAGE",
//         source: {
//           url: Screen1,
//           type:"png"
//         }
//       },
//       entity: [
//         {
//           text: "Girl",
//           entity: ["Girl"]
//         },
//         {
//           text: "Coach",
//           entity: ["Coach"]
//         },
//         {
//           text: "Racket",
//           entity: ["Racket"]
//         },
//         {
//           text: "Ball",
//           entity: ["Ball"]
//         },
//         {
//           text: "Cart",
//           entity: ["Cart"]
//         },
//
//       ],
//       entityPosition: [
//         {
//           name: "Girl",
//           left: "360px",
//           top: "340px",
//           width: "50px",
//           height: "180px",
//         },
//         {
//           name: "Coach",
//           left: "475px",
//           top: "370px",
//           width: "70px",
//           height: "140px",
//         },
//         {
//           name: "Racket",
//           left: "360px",
//           top: "405px",
//           width: "50px",
//           height: "80px",
//         },
//         {
//           name: "Ball",
//           left: "315px",
//           top: "410px",
//           width: "20px",
//           height: "20px",
//         },
//         {
//           name: "Cart",
//           left: "545px",
//           top: "375px",
//           width: "70px",
//           height: "150px",
//         }
//       ],
//       attribute: [
//         {
//           text: "Girl is looking down",
//           entity: ["Girl"]
//         },
//         {
//           text: "Coach is bending over",
//           entity: ["Coach"]
//         },
//         {
//           text: "Ball is green",
//           entity: ["Ball"]
//         },
//         {
//           text: "Cart is black",
//           entity: ["Cart"]
//         }
//       ],
//       relationship: [
//         {
//           text: "Girl is holding racket",
//           entity: ["Girl", "Racket"]
//         },
//         {
//           text: "Coach is holding racket",
//           entity: ["Coach", "Racket"]
//         }
//       ]
//     }, {
//       key: 2,
//       title: "02:33",
//       cardTitle: "",
//       cardSubtitle:"",
//       cardDetailedText: "Sub-Activity: Coach teaching girl how to hold the racket",
//       media: {
//         type: "IMAGE",
//         source: {
//           url: Screen2,
//           type:"png"
//         }
//       },
//       entity: [
//         {
//           text: "Girl",
//           entity: ["Girl"]
//         },
//         {
//           text: "Coach",
//           entity: ["Coach"]
//         },
//         {
//           text: "Racket",
//           entity: ["Racket"]
//         },
//         {
//           text: "Cart",
//           entity: ["Cart"]
//         },
//
//       ],
//       entityPosition: [
//         {
//           name: "Girl",
//           left: "520px",
//           top: "340px",
//           width: "60px",
//           height: "200px",
//         },
//         {
//           name: "Coach",
//           left: "410px",
//           top: "325px",
//           width: "100px",
//           height: "200px",
//         },
//         {
//           name: "Racket",
//           left: "420px",
//           top: "415px",
//           width: "70px",
//           height: "30px",
//         },
//         {
//           name: "Cart",
//           left: "300px",
//           top: "380px",
//           width: "50px",
//           height: "125px",
//         }
//       ],
//       attribute: [
//         {
//           text: "Girl is standing",
//           entity: ["Girl"]
//         },
//         {
//           text: "Coach is looking down",
//           entity: ["Coach"]
//         },
//         {
//           text: "Racket is blue",
//           entity: ["Racket"]
//         },
//         {
//           text: "Cart is black",
//           entity: ["Cart"]
//         }
//       ],
//       relationship: [
//         {
//           text: "Girl is holding racket",
//           entity: ["Girl", "Racket"]
//         },
//         {
//           text: "Coach is holding girl's hand",
//           entity: ["Coach", "Girl"]
//         }
//       ]
//     }, {
//       key: 3,
//       title: "03:50",
//       cardTitle: "",
//       cardSubtitle:"",
//       cardDetailedText: "Sub-Activity: Coach teaching girl how to hit the ball with racket",
//       media: {
//         type: "IMAGE",
//         source: {
//           url: Screen3,
//           type:"png"
//         }
//       },
//       entity: [
//         {
//           text: "Girl",
//           entity: ["Girl"]
//         },
//         {
//           text: "Coach",
//           entity: ["Coach"]
//         },
//         {
//           text: "Racket",
//           entity: ["Racket"]
//         },
//         {
//           text: "Cart",
//           entity: ["Cart"]
//         },
//         {
//           text: "Ball",
//           entity: ["Ball"]
//         },
//       ],
//       entityPosition: [
//         {
//           name: "Girl",
//           left: "315px",
//           top: "335px",
//           width: "60px",
//           height: "200px",
//         },
//         {
//           name: "Coach",
//           left: "450px",
//           top: "320px",
//           width: "70px",
//           height: "200px",
//         },
//         {
//           name: "Racket",
//           left: "390px",
//           top: "390px",
//           width: "90px",
//           height: "40px",
//         },
//         {
//           name: "Ball",
//           left: "250px",
//           top: "410px",
//           width: "20px",
//           height: "20px",
//         },
//         {
//           name: "Cart",
//           left: "545px",
//           top: "380px",
//           width: "70px",
//           height: "150px",
//         }
//       ],
//       attribute: [
//         {
//           text: "Girl is standing",
//           entity: ["Girl"]
//         },
//         {
//           text: "Coach is standing",
//           entity: ["Coach"]
//         },
//         {
//           text: "Ball is green",
//           entity: ["Ball"]
//         },
//         {
//           text: "Cart is black",
//           entity: ["Cart"]
//         }
//       ],
//       relationship: [
//         {
//           text: "Girl is holding racket",
//           entity: ["Girl", "Racket"]
//         },
//         {
//           text: "Coach is holding racket",
//           entity: ["Coach", "Racket"]
//         },
//         {
//           text: "Racket is on the cart",
//           entity: ["Racket", "Cart"]
//         }
//       ]
//     }, {
//       key: 4,
//       title: "04:30",
//       cardTitle: "",
//       cardSubtitle:"",
//       cardDetailedText: "Sub-Activity: Girl swinging the racket",
//       media: {
//         type: "IMAGE",
//         source: {
//           url: Screen4,
//           type:"png"
//         }
//       },
//       entity: ["Girl", "Coach", "Racket", "Ball", "Cart"],
//       attribute: ["Girl is standing", "Coach is standing", "Ball is green"],
//       relationship: ["Girl is holding racket"]
//     }, {
//       key: 5,
//       title: "05:26",
//       cardTitle: "",
//       cardSubtitle:"",
//       cardDetailedText: "Sub-Activity: Girl talking with coach",
//       media: {
//         type: "IMAGE",
//         source: {
//           url: Screen5,
//           type:"png"
//         }
//       },
//       entity: ["Girl", "Coach", "Racket", "Ball", "Cart"],
//       attribute: ["Girl is standing", "Coach is standing", "Ball is green"],
//       relationship: ["Coach is holding racket"]
//     }
//   ];
