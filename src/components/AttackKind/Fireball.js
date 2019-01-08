import React, { Fragment } from "react";
import FireballCanvas from "./../../components/battleAnimation/fireballCanvas";
import FireballSound from "./../../components/soundAnimation/fireballSound";

const Fireball = (props) => (
<Fragment>
    <FireballSound
        setPlayingStatus={props.setPlayingStatus}
    />
    <FireballCanvas attackSide={props.attackSide} />
</Fragment>);

export default Fireball;