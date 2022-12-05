import './rules.css'

const Rules = () => {

    return (
        <div style={{margin: "10px"}}>
            <h1>Sequence Rules</h1>
            <div className="rules-section">
                <div className="rules-header">Setting Up Your Sequence Game</div>
                <div className="rules-details">Players divide evenly into two or three teams. Team members are to alternate their physical positions every third player around the playing surface.</div>
            </div>
            <div className="rules-section">
                <div className="rules-header">Dealer shuffles and deals cards</div>
                <div className="rules-details">
                    Choose a player to be dealer. Dealer shuffles and deals out the same number of cards to each player (see below). Team members use the same colour marker chips.<br/>
                    <br/>
                    Table for Number of Cards Dealt to Each Player:<br/>
                    2 Players / 6 Cards Each<br/>
                    3 Players / 6 Cards Each<br/>
                    4 Players / 6 Cards Each<br/>
                    6 Players / 5 Cards Each<br/>
                    8 Players / 4 Cards Each<br/>
                    9 Players / 4 Cards Each<br/>
                    10 Players / 3 Cards Each<br/>
                    12 Players / 3 Cards Each<br/>
                </div>
            </div>
            <div className="rules-section">
                <div className="rules-header">How to Play Sequence Rules Step by Step</div>
                <div className="rules-details">A Sequence is a connected series of five identical colored marker chips in a straight line, horizontal, vertical or diagonally on the playing board. For 2 players/team, the objective of Sequence is to score two sequences before your opponents For 3 players/team, the objective is to score one sequence before your opponents.</div>
            </div>
            <div className="rules-section">
                <div className="rules-header">Sequence Gameplay</div>
                <div className="rules-details">Player to dealer’s left begins play. Play continues in clockwise direction. On your turn, pick a card from hand and place face up on your discard pile visible to all other players. Place your marker chip on the matching card on the game board. Each card is pictured twice on the board. Jacks do not appear on the game board. You can only play on card spaces not covered by marker chips. Draw a new card from the Draw Deck. Your turn ends and moves to the next player.</div>
                <div className="secondary-header">Playing Two-Eyed Jacks</div>
                <div className="rules-details">There are 4 Two-Eyed Jacks in the deck. Two-Eyed Jacks are Wild cards. To play a Two Eyed Jack, place it on your discard pile and place your marker chip on any open game board space.</div>
                <div className="secondary-header">Playing One-Eyed Jacks</div>
                <div className="rules-details">There are 4 One-Eyed Jacks in the deck. One-Eyed Jacks are Anti Wild Cards. Place it on your discard pile and remove one marker chip belonging to your opponent from the game board. You cannot place your marker chips on that same space during this turn and you cannot remove a marker chip that is already a part of a sequence. Once a sequence has been achieved, it cannot be broken.</div>
            </div>
            <div className="rules-section">
                <div className="rules-header">Trade in a Dead Card</div>
                <div className="rules-details">If a card in your hand does not have an open space (both cards on the game board are occupied by a marker chip), you can trade it in for a new card. On your turn, announce the Dead Card and place it on the discard pile, and draw a new card (one card per turn). Proceed to normal play for your turn.</div>
            </div>
            <div className="rules-section">
                <div className="rules-header">Winning in Sequence</div>
                <div className="rules-details">A Sequence is a connected series of five identical colored marker chips in a straight line, horizontal, vertical or diagonally on the playing board. First team or player to scores the required number of Sequences wins the game. For 2 players/team, score two sequences before your opponents. You may use any part of your first sequence as part of your second. For 3 players/team, score one sequence before your opponents.</div>
            </div>
        </div>
    )
}

export default Rules;