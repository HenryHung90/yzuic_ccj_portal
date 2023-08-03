import { useEffect, useState } from "react";
import Phaser from "phaser";

function BGGaming() {
    function preload() {}
    function create() {}
    function update() {}

    useEffect(() => {
        //Phaser Main function
        new Phaser.Game({
            type: Phaser.AUTO,
            width: "100%",
            height: "100%",
            transparent: false,
            backgroundColor: "#000000",
            physics: {
                default: "arcade",
                arcade: {
                    debug: false,
                },
            },
            scene: {
                preload: preload,
                create: create,
                update: update,
            },
            scale: {
                autoCenter: Phaser.Scale.CENTER_BOTH,
            },
            parent: "container",
        });
    }, []);

    return <div id="container"></div>;
}

export default BGGaming;
