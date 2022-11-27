
const remaining_cards = [
    {
        "suit": "hearts",
        "value": 2,
        "position": {
            "0": [
                4,
                4
            ],
            "1": [
                7,
                1
            ]
        }
    },
    {
        "suit": "hearts",
        "value": 3,
        "position": {
            "0": [
                5,
                4
            ],
            "1": [
                8,
                1
            ]
        }
    },
    {
        "suit": "hearts",
        "value": 4,
        "position": {
            "0": [
                5,
                5
            ],
            "1": [
                8,
                2
            ]
        }
    },
    {
        "suit": "hearts",
        "value": 5,
        "position": {
            "0": [
                4,
                5
            ],
            "1": [
                8,
                3
            ]
        }
    },
    {
        "suit": "hearts",
        "value": 6,
        "position": {
            "0": [
                3,
                5
            ],
            "1": [
                8,
                4
            ]
        }
    },
    {
        "suit": "hearts",
        "value": 7,
        "position": {
            "0": [
                3,
                4
            ],
            "1": [
                8,
                5
            ]
        }
    },
    {
        "suit": "hearts",
        "value": 8,
        "position": {
            "0": [
                3,
                3
            ],
            "1": [
                8,
                6
            ]
        }
    },
    {
        "suit": "hearts",
        "value": 9,
        "position": {
            "0": [
                4,
                3
            ],
            "1": [
                8,
                7
            ]
        }
    },
    {
        "suit": "hearts",
        "value": 10,
        "position": {
            "0": [
                5,
                3
            ],
            "1": [
                8,
                8
            ]
        }
    },
    {
        "suit": "hearts",
        "value": "J"
    },
    {
        "suit": "hearts",
        "value": "Q",
        "position": {
            "0": [
                6,
                3
            ],
            "1": [
                7,
                8
            ]
        }
    },
    {
        "suit": "hearts",
        "value": "K",
        "position": {
            "0": [
                6,
                4
            ],
            "1": [
                6,
                8
            ]
        }
    },
    {
        "suit": "hearts",
        "value": "A",
        "position": {
            "0": [
                6,
                5
            ],
            "1": [
                5,
                8
            ]
        }
    },
    {
        "suit": "diamonds",
        "value": 2,
        "position": {
            "0": [
                9,
                4
            ],
            "1": [
                2,
                7
            ]
        }
    },
    {
        "suit": "diamonds",
        "value": 3,
        "position": {
            "0": [
                3,
                7
            ],
            "1": [
                9,
                3
            ]
        }
    },
    {
        "suit": "diamonds",
        "value": 4,
        "position": {
            "0": [
                9,
                2
            ],
            "1": [
                4,
                7
            ]
        }
    },
    {
        "suit": "diamonds",
        "value": 5,
        "position": {
            "0": [
                9,
                1
            ],
            "1": [
                5,
                7
            ]
        }
    },
    {
        "suit": "diamonds",
        "value": 6,
        "position": {
            "0": [
                8,
                0
            ],
            "1": [
                6,
                7
            ]
        }
    },
    {
        "suit": "diamonds",
        "value": 7,
        "position": {
            "0": [
                7,
                7
            ],
            "1": [
                7,
                0
            ]
        }
    },
    {
        "suit": "diamonds",
        "value": 8,
        "position": {
            "0": [
                6,
                0
            ],
            "1": [
                7,
                6
            ]
        }
    },
    {
        "suit": "diamonds",
        "value": 9,
        "position": {
            "0": [
                5,
                0
            ],
            "1": [
                7,
                5
            ]
        }
    },
    {
        "suit": "diamonds",
        "value": 10,
        "position": {
            "0": [
                4,
                0
            ],
            "1": [
                7,
                4
            ]
        }
    },
    {
        "suit": "diamonds",
        "value": "J"
    },
    {
        "suit": "diamonds",
        "value": "Q",
        "position": {
            "0": [
                3,
                0
            ],
            "1": [
                7,
                3
            ]
        }
    },
    {
        "suit": "diamonds",
        "value": "K",
        "position": {
            "0": [
                2,
                0
            ],
            "1": [
                7,
                2
            ]
        }
    },
    {
        "suit": "diamonds",
        "value": "A",
        "position": {
            "0": [
                1,
                0
            ],
            "1": [
                6,
                2
            ]
        }
    },
    {
        "suit": "clubs",
        "value": 2,
        "position": {
            "0": [
                6,
                6
            ],
            "1": [
                4,
                8
            ]
        }
    },
    {
        "suit": "clubs",
        "value": 3,
        "position": {
            "0": [
                5,
                6
            ],
            "1": [
                3,
                8
            ]
        }
    },
    {
        "suit": "clubs",
        "value": 4,
        "position": {
            "0": [
                4,
                6
            ],
            "1": [
                2,
                8
            ]
        }
    },
    {
        "suit": "clubs",
        "value": 5,
        "position": {
            "0": [
                3,
                6
            ],
            "1": [
                1,
                8
            ]
        }
    },
    {
        "suit": "clubs",
        "value": 6,
        "position": {
            "0": [
                2,
                6
            ],
            "1": [
                0,
                8
            ]
        }
    },
    {
        "suit": "clubs",
        "value": 7,
        "position": {
            "0": [
                2,
                5
            ],
            "1": [
                0,
                7
            ]
        }
    },
    {
        "suit": "clubs",
        "value": 8,
        "position": {
            "0": [
                2,
                4
            ],
            "1": [
                0,
                6
            ]
        }
    },
    {
        "suit": "clubs",
        "value": 9,
        "position": {
            "0": [
                2,
                3
            ],
            "1": [
                0,
                5
            ]
        }
    },
    {
        "suit": "clubs",
        "value": 10,
        "position": {
            "0": [
                2,
                2
            ],
            "1": [
                0,
                4
            ]
        }
    },
    {
        "suit": "clubs",
        "value": "J"
    },
    {
        "suit": "clubs",
        "value": "Q",
        "position": {
            "0": [
                0,
                3
            ],
            "1": [
                3,
                2
            ]
        }
    },
    {
        "suit": "clubs",
        "value": "K",
        "position": {
            "0": [
                0,
                2
            ],
            "1": [
                4,
                2
            ]
        }
    },
    {
        "suit": "clubs",
        "value": "A",
        "position": {
            "0": [
                0,
                1
            ],
            "1": [
                5,
                2
            ]
        }
    },
    {
        "suit": "spades",
        "value": 2,
        "position": {
            "0": [
                6,
                1
            ],
            "1": [
                1,
                9
            ]
        }
    },
    {
        "suit": "spades",
        "value": 3,
        "position": {
            "0": [
                5,
                1
            ],
            "1": [
                2,
                9
            ]
        }
    },
    {
        "suit": "spades",
        "value": 4,
        "position": {
            "0": [
                4,
                1
            ],
            "1": [
                3,
                9
            ]
        }
    },
    {
        "suit": "spades",
        "value": 5,
        "position": {
            "0": [
                3,
                1
            ],
            "1": [
                4,
                9
            ]
        }
    },
    {
        "suit": "spades",
        "value": 6,
        "position": {
            "0": [
                2,
                1
            ],
            "1": [
                5,
                9
            ]
        }
    },
    {
        "suit": "spades",
        "value": 7,
        "position": {
            "0": [
                1,
                1
            ],
            "1": [
                6,
                9
            ]
        }
    },
    {
        "suit": "spades",
        "value": 8,
        "position": {
            "0": [
                1,
                2
            ],
            "1": [
                7,
                9
            ]
        }
    },
    {
        "suit": "spades",
        "value": 9,
        "position": {
            "0": [
                1,
                3
            ],
            "1": [
                8,
                9
            ]
        }
    },
    {
        "suit": "spades",
        "value": 10,
        "position": {
            "0": [
                9,
                8
            ],
            "1": [
                1,
                4
            ]
        }
    },
    {
        "suit": "spades",
        "value": "J"
    },
    {
        "suit": "spades",
        "value": "Q",
        "position": {
            "0": [
                9,
                7
            ],
            "1": [
                1,
                5
            ]
        }
    },
    {
        "suit": "spades",
        "value": "K",
        "position": {
            "0": [
                9,
                6
            ],
            "1": [
                1,
                6
            ]
        }
    },
    {
        "suit": "spades",
        "value": "A",
        "position": {
            "0": [
                9,
                5
            ],
            "1": [
                1,
                7
            ]
        }
    }
]

export default remaining_cards;