import KingHeart from '../assets/images/king-heart.png';
import KingClub from '../assets/images/king-club.png';
import KingDiamond from '../assets/images/king-diamond.png';
import KingSpade from '../assets/images/king-spade.png';

import QueenHeart from '../assets/images/queen-heart.png';
import QueenClub from '../assets/images/queen-club.png';
import QueenDiamond from '../assets/images/queen-diamond.png';
import QueenSpade from '../assets/images/queen-spade.png';

import CornerImage from '../assets/images/corner.png';

import Spade from '../assets/images/spade.png';
import Club from '../assets/images/club.png';
import Heart from '../assets/images/heart.png';
import Diamond from '../assets/images/diamond.png';


const diamond = "diamond";
const spade = "spade";
const club = "club";
const heart = "heart";

const Suits = {
    spade: Spade,
    club: Club,
    heart: Heart,
    diamond: Diamond
}

const Board = [
    [
        {
            corner: true,
            image: CornerImage
        },
        {
            number: "A",
            suit: "club",
            used: false,
            team: 0
        },
        {
            "suit": "club",
            used: false,
            "team": 0,
            image: KingClub
        },
        {
            suit: "club",
            used: false,
            team: 0,
            image: QueenClub
        },
        {
            number: "10",
            suit: "club",
            used: false,
            team: 0
        },
        {
            number: "9",
            suit: "club",
            used: false,
            team: 0
        },
        {
            number: "8",
            suit: "club",
            used: false,
            team: 0
        },
        {
            number: "7",
            suit: "club",
            used: false,
            team: 0
        },
        {
            number: "6",
            suit: "club",
            used: false,
            team: 0
        },
        {
            corner: true,
            image: CornerImage
        }
    ],
    [
        {
            number: "A",
            suit: "diamond",
            used: false,
            team: 0
        },
        {
            number: "7",
            suit: "spade",
            used: false,
            team: 0
        },
        {
            number: "8",
            suit: "spade",
            used: false,
            team: 0
        },
        {
            number: "9",
            suit: "spade",
            used: false,
            team: 0
        },
        {
            number: "10",
            suit: "spade",
            used: false,
            team: 0
        },
        {
            suit: spade,
            used: false,
            team: 0,
            image: QueenSpade
        },
        {
            suit: spade,
            used: false,
            team: 0,
            image: KingSpade
        },
        {
            number: "A",
            suit: "spade",
            used: false,
            team: 0
        },
        {
            number: "5",
            suit: "club",
            used: false,
            team: 0
        },
        {
            number: "2",
            suit: "spade",
            used: false,
            team: 0
        }
    ],
    [
        {
            "suit": "diamond",
            used: false,
            "team": 0,
            image: KingDiamond
        },
        {
            number: "6",
            suit: "spade",
            used: false,
            team: 0
        },
        {
            "number": 10,
            "suit": "club",
            used: false,
            "team": 0,
        },
        {
            "number": 9,
            "suit": "club",
            used: false,
            "team": 0,
        },
        {
            number: 8,
            suit: "club",
            used: false,
            team: 0
        },
        {
            number: 7,
            suit: "club",
            used: false,
            team: 0
        },
        {
            number: 6,
            suit: "club",
            used: false,
            team: 0
        },
        {
            number: 2,
            suit: "diamond",
            used: false,
            team: 0
        },
        {
            number: 4,
            suit: "club",
            used: false,
            team: 0
        },
        {
            number: 3,
            suit: "spade",
            used: false,
            team: 0
        }
    ],
    [
        {
            "suit": "diamond",
            used: false,
            "team": 0,
            image: QueenDiamond
        },
        {
            number: 5,
            suit: "spade",
            used: false,
            team: 0
        },
        {
            "suit": "club",
            used: false,
            "team": 0,
            image: QueenClub
        },
        {
            number: 8,
            suit: "heart",
            used: false,
            team: 0
        },
        {
            number: 7,
            suit: "heart",
            used: false,
            team: 0
        },
        {
            number: 6,
            suit: "heart",
            used: false,
            team: 0
        },
        {
            number: 5,
            suit: "club",
            used: false,
            team: 0
        },
        {
            number: 3,
            suit: "diamond",
            used: false,
            team: 0
        },
        {
            number: 3,
            suit: "club",
            used: false,
            team: 0
        },
        {
            number: 4,
            suit: "spade",
            used: false,
            team: 0
        }
    ],
    [
        {
            number: 10,
            suit: diamond,
            used: false,
            team: 0
        },
        {
            number: 4,
            suit: spade,
            used: false,
            team: 0
        },
        {
            "suit": club,
            used: false,
            "team": 0,
            image: KingClub
        },
        {
            number: 9,
            suit: heart,
            used: false,
            team: 0
        },
        {
            number: 2,
            suit: heart,
            used: false,
            team: 0
        },
        {
            number: 5,
            suit: heart,
            used: false,
            team: 0
        },
        {
            number: 4,
            suit: club,
            used: false,
            team: 0
        },
        {
            number: 4,
            suit: diamond,
            used: false,
            team: 0
        },
        {
            number: 2,
            suit: "club",
            used: false,
            team: 0
        },
        {
            number: 5,
            suit: spade,
            used: false,
            team: 0
        }
    ],
    [
        {
            number: 9,
            suit: diamond,
            used: false,
            team: 0
        },
        {
            number: 3,
            suit: spade,
            used: false,
            team: 0
        },
        {
            number: "A",
            suit: club,
            used: false,
            team: 0
        },
        {
            number: 10,
            suit: heart,
            used: false,
            team: 0
        },
        {
            number: 3,
            suit: heart,
            used: false,
            team: 0
        },
        {
            number: 4,
            suit: heart,
            used: false,
            team: 0
        },
        {
            number: 3,
            suit: "club",
            used: false,
            team: 0
        },
        {
            number: 5,
            suit: diamond,
            used: false,
            team: 0
        },
        {
            number: "A",
            suit: heart,
            used: false,
            team: 0
        },
        {
            number: 6,
            suit: spade,
            used: false,
            team: 0
        }
    ],
    [
        {
            number: 8,
            suit: diamond,
            used: false,
            "team": 0,
        },
        {
            number: 2,
            suit: spade,
            used: false,
            team: 0
        },
        {
            "number": "A",
            "suit": diamond,
            used: false,
            "team": 0,
        },
        {
            suit: heart,
            used: false,
            team: 0,
            image: QueenHeart
        },
        {
            suit: heart,
            used: false,
            team: 0,
            image: KingHeart
        },
        {
            number: "A",
            suit: heart,
            used: false,
            team: 0
        },
        {
            number: 2,
            suit: club,
            used: false,
            team: 0
        },
        {
            number: 6,
            suit: diamond,
            used: false,
            team: 0
        },
        {
            suit: heart,
            used: false,
            team: 0,
            image: KingHeart
        },
        {
            number: 7,
            suit: spade,
            used: false,
            team: 0,
        }
    ],
    [
        {
            number: 7,
            suit: diamond,
            used: false,
            team: 0
        },
        {
            number: 2,
            suit: heart,
            used: false,
            team: 0
        },
        {
            "suit": "diamond",
            used: false,
            "team": 0,
            image: KingDiamond
        },
        {
            "suit": diamond,
            used: false,
            "team": 0,
            image: QueenDiamond
        },
        {
            number: 10,
            suit: diamond,
            used: false,
            team: 0
        },
        {
            number: 9,
            suit: diamond,
            used: false,
            team: 0
        },
        {
            number: 8,
            suit: diamond,
            used: false,
            team: 0
        },
        {
            number: 7,
            suit: diamond,
            used: false,
            team: 0
        },
        {
            "suit": heart,
            used: false,
            "team": 0,
            image: QueenHeart
        },
        {
            number: 8,
            suit: spade,
            used: false,
            team: 0,
        }
    ],
    [
        {
            number: "6",
            suit: "diamond",
            used: false,
            team: 0,
        },
        {
            number: "3",
            suit: "heart",
            used: false,
            team: 0,
        },
        {
            number: "4",
            suit: "heart",
            used: false,
            team: 0,
        },
        {
            number: "5",
            suit: "heart",
            used: false,
            team: 0,
        },
        {
            number: "6",
            suit: "heart",
            used: false,
            team: 0,
        },
        {
            number: "7",
            suit: "heart",
            used: false,
            team: 0,
        },
        {
            number: "8",
            suit: "heart",
            used: false,
            team: 0,
        },
        {
            number: "9",
            suit: "heart",
            used: false,
            team: 0,
        },
        {
            number: "10",
            suit: "heart",
            used: false,
            team: 0,
        },
        {
            number: "9",
            suit: spade,
            used: false,
            team: 0
        }
    ],
    [
        {
            corner: true,
            image: CornerImage
        },
        {
            number: "5",
            suit: "diamond",
            used: false,
            team: 0
        },
        {
            number: "4",
            suit: "diamond",
            used: false,
            team: 0
        },
        {
            number: "3",
            suit: "diamond",
            used: false,
            team: 0
        },
        {
            number: "2",
            suit: "diamond",
            used: false,
            team: 0
        },
        {
            number: "A",
            suit: "spade",
            used: false,
            team: 0
        },
        {
            suit: spade,
            used: false,
            team: 0,
            image: KingSpade
        },
        {
            suit: spade,
            used: false,
            team: 0,
            image: QueenSpade
        },
        {
            number: "10",
            suit: "spade",
            used: false,
            team: 0,
        },
        {
            corner: true,
            image: CornerImage
        }
    ]
]

export {Board, Suits};