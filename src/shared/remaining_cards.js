
const remaining_cards = [
    {
        "suit": "hearts",
        "value": 2,
        "position": [
            [4,4],
            [7,1]
        ]
    },
    {
        "suit": "hearts",
        "value": 3,
        "position": [
            [5,4],
            [8,1]
        ]
    },
    {
        "suit": "hearts",
        "value": 4,
        "position": [
            [5,5],
            [8,2]
        ]
    },
    {
        "suit": "hearts",
        "value": 5,
        "position": [
            [4,5],
            [8,3]
        ]
    },
    {
        "suit": "hearts",
        "value": 6,
        "position": [
            [3,5],
            [8,4]
        ]
    },
    {
        "suit": "hearts",
        "value": 7,
        "position": [
            [3,4],
            [8,5]
        ]
    },
    {
        "suit": "hearts",
        "value": 8,
        "position": [
            [3,3],
            [8,6]
        ]
    },
    {
        "suit": "hearts",
        "value": 9,
        "position": [
            [4,3],
            [8,7]
        ]
    },
    {
        "suit": "hearts",
        "value": 10,
        "position": [
            [5,3],
            [8,8]
        ]
    },
    {
        "suit": "hearts",
        "value": "J"
    },
    {
        "suit": "hearts",
        "value": "Q",
        "position": [
            [6,3],
            [7,8]
        ]
    },
    {
        "suit": "hearts",
        "value": "K",
        "position": [
            [6,4],
            [6,8]
        ]
    },
    {
        "suit": "hearts",
        "value": "A",
        "position": [
            [6,5],
            [5,8]
        ]
    },
    {
        "suit": "diamonds",
        "value": 2,
        "position": [
            [9,4],
            [2,7]
        ]
    },
    {
        "suit": "diamonds",
        "value": 3,
        "position": [
            [3,7],
            [9,3]
        ]
    },
    {
        "suit": "diamonds",
        "value": 4,
        "position": [
            [9,2],
            [4,7]
        ]
    },
    {
        "suit": "diamonds",
        "value": 5,
        "position": [
            [9,1],
            [5,7]
        ]
    },
    {
        "suit": "diamonds",
        "value": 6,
        "position": [
            [8,0],
            [6,7]
        ]
    },
    {
        "suit": "diamonds",
        "value": 7,
        "position": [
            [7,7],
            [7,0]
        ]
    },
    {
        "suit": "diamonds",
        "value": 8,
        "position": [
            [6,0],
            [7,6]
        ]
    },
    {
        "suit": "diamonds",
        "value": 9,
        "position": [
            [5,0],
            [7,5]
        ]
    },
    {
        "suit": "diamonds",
        "value": 10,
        "position": [
            [4,0],
            [7,4]
        ]
    },
    {
        "suit": "diamonds",
        "value": "J"
    },
    {
        "suit": "diamonds",
        "value": "Q",
        "position": [
            [3,0],
            [7,3]
        ]
    },
    {
        "suit": "diamonds",
        "value": "K",
        "position": [
            [2,0],
            [7,2]
        ]
    },
    {
        "suit": "diamonds",
        "value": "A",
        "position": [
            [1,0],
            [6,2]
        ]
    },
    {
        "suit": "clubs",
        "value": 2,
        "position": [
            [6,6],
            [4,8]
        ]
    },
    {
        "suit": "clubs",
        "value": 3,
        "position": [
            [5,6],
            [3,8]
        ]
    },
    {
        "suit": "clubs",
        "value": 4,
        "position": [
            [4,6],
            [2,8]
        ]
    },
    {
        "suit": "clubs",
        "value": 5,
        "position": [
            [3,6],
            [1,8]
        ]
    },
    {
        "suit": "clubs",
        "value": 6,
        "position": [
            [2,6],
            [0,8]
        ]
    },
    {
        "suit": "clubs",
        "value": 7,
        "position": [
            [2,5],
            [0,7]
        ]
    },
    {
        "suit": "clubs",
        "value": 8,
        "position": [
            [2,4],
            [0,6]
        ]
    },
    {
        "suit": "clubs",
        "value": 9,
        "position": [
            [2,3],
            [0,5]
        ]
    },
    {
        "suit": "clubs",
        "value": 10,
        "position": [
            [2,2],
            [0,4]
        ]
    },
    {
        "suit": "clubs",
        "value": "J"
    },
    {
        "suit": "clubs",
        "value": "Q",
        "position": [
            [0,3],
            [3,2]
        ]
    },
    {
        "suit": "clubs",
        "value": "K"
        ,
        "position": [
            [0,2],
            [4,2]
        ]
    },
    {
        "suit": "clubs",
        "value": "A",
        "position": [
            [0,1],
            [5,2]
        ]
    },
    {
        "suit": "spades",
        "value": 2,
        "position": [
            [6,1],
            [1,9]
        ]
    },
    {
        "suit": "spades",
        "value": 3,
        "position": [
            [5,1],
            [2,9]
        ]
    },
    {
        "suit": "spades",
        "value": 4,
        "position": [
            [4,1],
            [3,9]
        ]
    },
    {
        "suit": "spades",
        "value": 5,
        "position": [
            [3,1],
            [4,9]
        ]
    },
    {
        "suit": "spades",
        "value": 6,
        "position": [
            [2,1],
            [5,9]
        ]
    },
    {
        "suit": "spades",
        "value": 7,
        "position": [
            [1,1],
            [6,9]
        ]
    },
    {
        "suit": "spades",
        "value": 8,
        "position": [
            [1,2],
            [7,9]
        ]
    },
    {
        "suit": "spades",
        "value": 9,
        "position": [
            [1,3],
            [8,9]
        ]
    },
    {
        "suit": "spades",
        "value": 10,
        "position": [
            [9,8],
            [1,4]
        ]
    },
    {
        "suit": "spades",
        "value": "J"
    },
    {
        "suit": "spades",
        "value": "Q",
        "position": [
            [9,7],
            [1,5]
        ]
    },
    {
        "suit": "spades",
        "value": "K",
        "position": [
            [9,6],
            [1,6]
        ]
    },
    {
        "suit": "spades",
        "value": "A",
        "position": [
            [9,5],
            [1,7]
        ]
    }
]