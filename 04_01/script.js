/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const content = `
<main>
    <article>
      <h1>${everydayPack.name}</h1>
      <ul>
        <li>Volume:${everydayPack.name}</li>
        <li>Color:${everydayPack.name}</li>
        <li>Age:${everydayPack.name}</li>
        <li>Number of pockets:${everydayPack.name}</li>
        <li>Left strap length:${everydayPack.name}</li>
        <li>Right strap length:${everydayPack.name}</li>
        <li>Lid status:${everydayPack.name}</li>
      </ul>
    </article>
</main>

`;

document.body.innerHTML = content;

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
