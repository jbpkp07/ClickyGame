import React from "react";

import { SideBar } from "./components/SideBar/SideBar";
import { Tile } from "./components/Tile/Tile";
import { TilesWrapper } from "./components/TilesWrapper/TilesWrapper";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { ITile } from "./data/ITile";
import { tiles } from "./data/tiles";

interface IState {

    score: number;
    topScore: number;
    tiles: ITile[];
    clicked: number[];
    hasWon: boolean;
    hasLost: boolean;
}

export class App extends React.Component {

    public readonly state: IState = {

        score: 0,
        topScore: 0,
        tiles: this.shuffleTiles(tiles),
        clicked: [],
        hasWon: false,
        hasLost: false
    };

    public readonly clickTile = (id: number): void => {

        new Promise((resolve: Function): void => {
            
            if (this.state.hasWon) {

                const newState: IState = {
    
                    score: 0,
                    topScore: this.state.topScore,
                    tiles,
                    clicked: [],
                    hasWon: false,
                    hasLost: false
                };
    
                this.setState(newState, resolve());  // reset game after win before continuing
            }
            else {
    
               resolve();  // not a win, just continue
            }
        })
        .then(() => {
           
            if (!this.state.clicked.includes(id)) {

                let topScore: number = this.state.topScore;
    
                if (this.state.score === topScore) {
    
                    topScore++;
                }
    
                this.state.clicked.push(id);
    
                const newState: IState = {
    
                    score: this.state.score + 1,
                    topScore,
                    tiles: this.shuffleTiles(tiles),
                    clicked: this.state.clicked,
                    hasWon: this.state.clicked.length === tiles.length,
                    hasLost: false
                };
    
                this.setState(newState);
            }
            else {
    
                const newState: IState = {
    
                    score: 0,
                    topScore: this.state.topScore,
                    tiles: this.shuffleTiles(tiles),
                    clicked: [],
                    hasWon: false,
                    hasLost: true
                };
    
                this.setState(newState);
            }
        });
    }

    public readonly render = (): JSX.Element => {

        let gameOver: boolean = false;

        if (this.state.hasWon || this.state.hasLost) {

            gameOver = true;
        }

        return (
            
            <Wrapper>
                <SideBar
                    score={this.state.score}
                    topScore={this.state.topScore}
                    hasWon={this.state.hasWon}
                    hasLost={this.state.hasLost}
                />
                <TilesWrapper>
                    {this.state.tiles.map((tile: ITile) => (
                        <Tile
                            id={tile.id}
                            alt={tile.alt}
                            src={tile.src}
                            gameOver={gameOver}
                            clickTile={this.clickTile}
                            key={tile.id}
                        />
                    ))}
                </TilesWrapper>
            </Wrapper>
        );
    }

    private shuffleTiles(tilesArray: ITile[]): ITile[] {

        for (let i: number = tilesArray.length - 1; i > 0; i--) {

            const j: number = Math.floor(Math.random() * (i + 1));

            [tilesArray[i], tilesArray[j]] = [tilesArray[j], tilesArray[i]];
        }

        return tilesArray;
    }
}