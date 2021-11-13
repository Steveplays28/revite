import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";

import { useState } from "preact/hooks";

import { State } from "../../redux";

import SidebarBase from "./SidebarBase";
import DragBar from "./left/DragBar";
import HomeSidebar from "./left/HomeSidebar";
import ServerListSidebar from "./left/ServerListSidebar";
import ServerSidebar from "./left/ServerSidebar";

let width = 500;
function convertMouseMovementToWidth(mouseMovement: number) {
    width += mouseMovement;

    return `clamp(56px, calc(${width}px + 1vw), 100vw)`;
}

export default function LeftSidebar(this: typeof LeftSidebar) {
    const isOpen = useSelector(
        (state: State) => state.sectionToggle["sidebar_channels"] ?? true,
    );
    const [mouseMovementX, setWidth] = useState(0);

    return (
        <SidebarBase width={convertMouseMovementToWidth(mouseMovementX)}>
            <Switch>
                <Route path="/settings" />
                <Route path="/server/:server/channel/:channel">
                    <ServerListSidebar />
                    {isOpen && <ServerSidebar />}
                </Route>
                <Route path="/server/:server">
                    <ServerListSidebar />
                    {isOpen && <ServerSidebar />}
                </Route>
                <Route path="/channel/:channel">
                    <ServerListSidebar />
                    {isOpen && <HomeSidebar />}
                </Route>
                <Route path="/">
                    <ServerListSidebar />
                    {isOpen && <HomeSidebar />}
                </Route>
            </Switch>
            <DragBar mouseMovementX={setWidth} />
        </SidebarBase>
    );
}
