console.log("Nightfall 404 Game loaded");
console.log("Pokemon FireRed configured");

/*
 * Prevent the browser from scrolling when the
 * EmulatorJS controls use the arrow keys.
 *
 * We deliberately only block the game controls,
 * not every keyboard key.
 */

window.addEventListener(
    "keydown",
    function (event) {

        const gameKeys = [
            "ArrowUp",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "Enter",
            " ",
            "z",
            "x",
            "a",
            "s"
        ];

        if (gameKeys.includes(event.key)) {
            event.preventDefault();
        }

    },
    { passive: false }
);

window.addEventListener(
    "keyup",
    function (event) {

        const gameKeys = [
            "ArrowUp",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight"
        ];

        if (gameKeys.includes(event.key)) {
            event.preventDefault();
        }

    },
    { passive: false }
);