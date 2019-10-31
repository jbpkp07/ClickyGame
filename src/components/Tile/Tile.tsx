import React from "react";

import "./Tile.css";

interface IProps {

    id: number;
    alt: string;
    src: string;
    clickTile(id: number): void;
}

export function Tile(props: IProps): JSX.Element {

    return (

        <div className="tile">
            <img
                src={props.src}
                alt={props.alt}
                onClick={(): void => props.clickTile(props.id)}
                draggable={false}
            />
        </div>
    );
}