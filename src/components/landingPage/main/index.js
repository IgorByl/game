import React from "react";
import "./index.css";
import portal from "./../../../images/gameImages/portal.png";
import modal from "./../../../images/gameImages/spellsModalWindow.png";
import taskLetter from "./../../../images/gameImages/LetterSelectTask.png";
import taskBurst from "./../../../images/gameImages/ballonBurst.png";
import fireball from "./../../../images/gameImages/fireballShoot.png";
import heal from "./../../../images/gameImages/healling.png";

const Main = () => {
  return (
    <div className="mainWrapper">
      <p className="pMainText">
        Wonder is waiting for you ahead. Join our fantasy world and chase
        everyone with your bright knowledge!
      </p>
      <div className="rulesBlocks">
        <div className="gamerules">
          <h3>Common rules</h3>
          <br />
          <p>
            Both the player and the monster have 300 hp. The player attacks
            first, chooses a spell. If the player answers correctly, he damages
            the monster or heals himself. If the player does not answer
            correctly, he takes damage or the enemy heals. When a player kills a
            monster, a new monster appears with a greater attack. There are six
            kinds of tasks and two types of spells in the game: some cause
            damage to monsters, others heal the hero. You have to defeat the
            monsters and give victory in three rounds.
          </p>
          <br />
          <span> Good luck, hero!</span>
        </div>
        <div className="gamerules">
          <h3>Battle actions</h3>
          <br />
          <p><mark>"Escape"</mark> - open game menu during the battle.</p>
          <br />
          <p><mark>"Backspace"</mark> - open menu with battle spells.</p>
        </div>
      </div>
      <p className="pMainText">Gallery</p>
      <section className="gallery">
        <p className="commentMainText">Favorite heroes...</p>
        <div className="gamemodal">
          <img className="gameImg" src={portal} alt="hero righthand" />
          <img className="gameImg" src={modal} alt="hero righthand" />
        </div>
        <p className="commentMainText">exciting quests...</p>
        <div className="gameplay">
          <img className="gameImg" src={taskLetter} alt="hero righthand" />
          <img className="gameImg" src={taskBurst} alt="hero righthand" />
        </div>
        <p className="commentMainText">and of course a lot of magic...</p>
        <div className="gamespells">
          <img className="gameImg" src={fireball} alt="hero righthand" />
          <img className="gameImg" src={heal} alt="hero righthand" />
        </div>
        <p className="commentMainText">...are waiting for you!</p>
      </section>
    </div>
  );
};

export default Main;
