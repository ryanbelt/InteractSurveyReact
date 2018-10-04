import Question from './models/question';

export default function () {
  Question.count().exec((err, count) => {
    if (count > 0) {
      return;
    }


    const question1 = new Question(
      {
        _id: "5bb60ab958a0001c487aea8b",
        title: 'PcBuyer',
        questions: [
          {
            number: "Q1",
            text: "Do you often follow the tech news?",
            answers: [
              {
                text: "Yes",
                next: "Q2",
                categoryPoint: 1,
                categories: [{
                  text: "Trend",
                  value: 1
                }]
              },
              {
                text: "No",
                next: "Q3",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 1
                }]
              }
            ]
          },
          {
            number: "Q2",
            text: "Where you hear all the new tech informations?",
            answers: [
              {
                text: "Friends",
                next: "Q3",
                categoryPoint: 1,
                categories: [{
                  text: "Trend",
                  value: 0.5
                },
                  {
                    text: "Budget",
                    value: 0.5
                  }]
              },
              {
                text: "Internet News",
                next: "Q3",
                categoryPoint: 1,
                categories: [{
                  text: "Trend",
                  value: 1
                }]
              },
              {
                text: "Coupon / Flyer",
                next: "Q3",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 1
                }]
              }
            ]
          },
          {
            number: "Q3",
            text: "What kind of primary computer device you own?",
            answers: [
              {
                text: "desktop computer",
                next: "Q4",
                categoryPoint: 0,
                categories: []
              },
              {
                text: "laptop computer",
                next: "Q4",
                categoryPoint: 0,
                categories: []
              },
              {
                text: "tablet / smart phone",
                next: "Q3.1",
                categoryPoint: 0,
                categories: []
              }
            ]
          },
          {
            number: "Q3.1",
            text: "If chocing one type of computer as primary device, what will be the first one you consider?",
            answers: [
              {
                text: "desktop computer",
                next: "Q4",
                categoryPoint: 0,
                categories: []
              },
              {
                text: "laptop computer",
                next: "Q4",
                categoryPoint: 0,
                categories: []
              }
            ]
          },
          //todo: other
          {
            number: "Q4.1",
            text: "Which laptop brand you will consider to buy?",
            answers: [
              {
                text: "Apple",
                next: "Q4.2",
                categoryPoint: 1,
                categories: [{
                  text: "Trend",
                  value: 1
                }]
              },
              {
                text: "Lenovo(Think Pad)",
                next: "Q4.2",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 0.2
                },
                  {
                    text: "Trend",
                    value: 0.8
                  }]
              },
              {
                text: "Sony",
                next: "Q4.2",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 0.4
                },
                  {
                    text: "Trend",
                    value: 0.6
                  },

                ]
              },
              {
                text: "HP",
                next: "Q4.2",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 0.4
                },
                  {
                    text: "Trend",
                    value: 0.6
                  },

                ]
              },
              {
                text: "Other",
                next: "Q4.2",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 1
                }
                ]
              }
            ]
          },
          {
            number: "Q4.2",
            text: "What will bve the most major feature you will consider on buying the laptop?",
            answers: [
              {
                text: "Touch Scree",
                next: "Q4",
                categoryPoint: 1,
                categories: [{
                  text: "Trend",
                  value: 1
                }]
              },
              {
                text: "finger print sensor",
                next: "Q4",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 0.3
                },
                  {
                    text: "Trend",
                    value: 0.7
                  }]
              },
              {
                text: "With dedicate graphic card",
                next: "Q4",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 0.5
                },
                  {
                    text: "Trend",
                    value: 0.5
                  }]
              },
              {
                text: "doesn't matter",
                next: "Q4",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 1
                }]
              },
            ]
          },
          {
            number: "Q4",
            text: "What will be the spec you consider on buying your own computer?",
            answers: [
              {
                text: "Gaming performance",
                next: "Q5",
                categoryPoint: 1,
                categories: [{
                  text: "Trend",
                  value: 1
                }]
              },
              {
                text: "Suitable on work environment",
                next: "Q5",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 0.5
                },
                  {
                    text: "Trend",
                    value: 0.5
                  }]
              },
              {
                text: "Able to surf on web pages",
                next: "Q5",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 1
                }]
              }
            ]
          },
          {
            number: "Q5",
            text: "What are the monitor you are willing to buy/use?",
            answers: [
              {
                text: "4K Monitor",
                next: "Q6",
                categoryPoint: 1,
                categories: [{
                  text: "Trend",
                  value: 1
                }]
              },
              {
                text: "Wild resolution monitor",
                next: "Q6",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 0.3
                },
                  {
                    text: "Trend",
                    value: 0.7
                  }]
              },
              {
                text: "120Fps gaming monitor",
                next: "Q6",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 0.3
                },
                  {
                    text: "Trend",
                    value: 0.7
                  }]
              },
              {
                text: "old/ stock monitor come with the PC",
                next: "Q6",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 1
                }]
              },
            ]
          },
          {
            number: "Q6",
            text: "What will be your audio speakers for your computer?",
            answers: [
              {
                text: "Wireless speaker/ headphone",
                next: "Q7",
                categoryPoint: 1,
                categories: [{
                  text: "Trend",
                  value: 1
                }]
              },
              {
                text: "Speakers",
                next: "Q6.1",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 0.3
                },
                  {
                    text: "Trend",
                    value: 0.7
                  }]
              },
              {
                text: "Any headphones",
                next: "Q7",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 1
                }]
              },
            ]
          },
          {
            number: "Q6.1",
            text: "what device you consider to buy use to improve the audio quality?",
            answers: [
              {
                text: "dedicate AMP",
                next: "Q7",
                categoryPoint: 1,
                categories: [{
                  text: "Trend",
                  value: 1
                }]
              },
              {
                text: "Sub Woofer",
                next: "Q7",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 0.3
                },
                  {
                    text: "Trend",
                    value: 0.7
                  }]
              },
              {
                text: "Doesn't matter at all, my default speaker is already good enough",
                next: "Q7",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 1
                }]
              },
            ]
          },
          {
            number: "Q7",
            text: "What type of accessories you will considered as required for your build?",
            answers: [
              {
                text: "wireless mouth and keyboard",
                next: "Q8",
                categoryPoint: 1,
                categories: [{
                  text: "Trend",
                  value: 0.7
                },
                  {
                    text: "Budget",
                    value: 0.3
                  },]
              },
              {
                text: "Mechanic Keyboard",
                next: "Q7",
                categoryPoint: 1,
                categories: [
                  {
                    text: "Trend",
                    value: 1
                  }]
              },
              {
                text: "use existed accessory",
                next: "Q8",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 1
                }]
              },
            ]
          },
          {
            number: "Q8",
            text: "Where will be your first sources on buying all the electornics?",
            answers: [
              {
                text: "Amazon and other WebStore",
                next: "Q9",
                categoryPoint: 1,
                categories: [{
                  text: "Trend",
                  value: 0.7
                },
                  {
                    text: "Budget",
                    value: 0.3
                  },]
              },
              {
                text: "On Store",
                next: "Q9",
                categoryPoint: 1,
                categories: [
                  {
                    text: "Trend",
                    value: 1
                  }]
              },
              {
                text: "Used store/web or Ebay",
                next: "Q9",
                categoryPoint: 1,
                categories: [{
                  text: "Budget",
                  value: 1
                }]
              },
            ]
          },
          {
            number: "Q9",
            text: "When would you buy a new electronic?",
            answers: [
              {
                text: "When a new version come out",
                next: "Q10",
                categoryPoint: 1,
                categories: [{
                  text: "Trend",
                  value: 1
                }]
              },
              {
                text: "Device Not working any more",
                next: "Q10",
                categoryPoint: 1,
                categories: [
                  {
                    text: "Budget",
                    value: 1
                  }]
              },
              {
                text: "When there is cheap used phone I want",
                next: "Q10",
                categoryPoint: 1,
                categories: [{
                  text: "Trend",
                  value: 0.5
                },
                  {
                    text: "Budget",
                    value: 0.5
                  }]
              },
            ]
          },
        ]
      }
    )

    Question.create([question1], (error) => {
      if (!error) {
          console.log('question imported .....');
      }
    });
  });
}
