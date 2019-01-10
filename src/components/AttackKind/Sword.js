import React, { Fragment } from "react";
import SwordCSSAnimation from './../battleAnimation/swordCSSAnimation'
import SwordSound from "./../../components/soundAnimation/swordSound";

const Sword = (props) => (
<Fragment>
    <SwordSound
        setPlayingStatus={props.setPlayingStatus}
    />
    <SwordCSSAnimation attackSide={props.attackSide} />
</Fragment>);

export default Sword;