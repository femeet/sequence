import KingHeart from '../assets/images/cards/king-heart.png';
import KingClub from '../assets/images/cards/king-club.png';
import KingDiamond from '../assets/images/cards/king-diamond.png';
import KingSpade from '../assets/images/cards/king-spade.png';

import QueenHeart from '../assets/images/cards/queen-heart.png';
import QueenClub from '../assets/images/cards/queen-club.png';
import QueenDiamond from '../assets/images/cards/queen-diamond.png';
import QueenSpade from '../assets/images/cards/queen-spade.png';

import JackHeart from '../assets/images/cards/jack-heart.png';
import JackClub from '../assets/images/cards/jack-club.png';
import JackDiamond from '../assets/images/cards/jack-diamond.png';
import JackSpade from '../assets/images/cards/jack-spade.png';

const face_cards_image = {
    "J": {
        "club": JackClub,
        "heart": JackHeart,
        "diamond": JackDiamond,
        "spade": JackSpade
    },
    "Q": {
        "club": QueenClub,
        "heart": QueenHeart,
        "diamond": QueenDiamond,
        "spade": QueenSpade
    },
    "K": {
        "club": KingClub,
        "heart": KingHeart,
        "diamond": KingDiamond,
        "spade": KingSpade
    },
}

const remaining_cards = [
    {
        "suit": "heart",
        "number": 2,
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
        "suit": "heart",
        "number": 3,
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
        "suit": "heart",
        "number": 4,
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
        "suit": "heart",
        "number": 5,
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
        "suit": "heart",
        "number": 6,
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
        "suit": "heart",
        "number": 7,
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
        "suit": "heart",
        "number": 8,
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
        "suit": "heart",
        "number": 9,
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
        "suit": "heart",
        "number": 10,
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
        "suit": "heart",
        "number": "J",
        image: true,
    },
    {
        "suit": "heart",
        "number": "Q",
        image: true,
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
        "suit": "heart",
        "number": "K",
        image: true,
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
        "suit": "heart",
        "number": "A",
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
        "suit": "diamond",
        "number": 2,
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
        "suit": "diamond",
        "number": 3,
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
        "suit": "diamond",
        "number": 4,
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
        "suit": "diamond",
        "number": 5,
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
        "suit": "diamond",
        "number": 6,
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
        "suit": "diamond",
        "number": 7,
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
        "suit": "diamond",
        "number": 8,
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
        "suit": "diamond",
        "number": 9,
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
        "suit": "diamond",
        "number": 10,
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
        "suit": "diamond",
        "number": "J",
        image: true,
    },
    {
        "suit": "diamond",
        "number": "Q",
        image: true,
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
        "suit": "diamond",
        "number": "K",
        image: true,
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
        "suit": "diamond",
        "number": "A",
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
        "suit": "club",
        "number": 2,
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
        "suit": "club",
        "number": 3,
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
        "suit": "club",
        "number": 4,
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
        "suit": "club",
        "number": 5,
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
        "suit": "club",
        "number": 6,
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
        "suit": "club",
        "number": 7,
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
        "suit": "club",
        "number": 8,
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
        "suit": "club",
        "number": 9,
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
        "suit": "club",
        "number": 10,
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
        "suit": "club",
        "number": "J",
        image: true,
    },
    {
        "suit": "club",
        "number": "Q",
        image: true,
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
        "suit": "club",
        "number": "K",
        image: true,
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
        "suit": "club",
        "number": "A",
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
        "suit": "spade",
        "number": 2,
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
        "suit": "spade",
        "number": 3,
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
        "suit": "spade",
        "number": 4,
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
        "suit": "spade",
        "number": 5,
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
        "suit": "spade",
        "number": 6,
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
        "suit": "spade",
        "number": 7,
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
        "suit": "spade",
        "number": 8,
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
        "suit": "spade",
        "number": 9,
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
        "suit": "spade",
        "number": 10,
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
        "suit": "spade",
        "number": "J",
        image: true,
    },
    {
        "suit": "spade",
        "number": "Q",
        image: true,
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
        "suit": "spade",
        "number": "K",
        image: true,
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
        "suit": "spade",
        "number": "A",
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

export {remaining_cards, face_cards_image};