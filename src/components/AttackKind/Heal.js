import React, { Fragment } from "react";
import HealCanvas from "./../../components/battleAnimation/healCanvas";
import HealSound from "./../../components/soundAnimation/healSound";

const Heal = (props) => (
<Fragment>
    <HealSound
        setPlayingStatus={props.setPlayingStatus}
    />
    <HealCanvas attackSide={props.attackSide} />
</Fragment>);

export default Heal;