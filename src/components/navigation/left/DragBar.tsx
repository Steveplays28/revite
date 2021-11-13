import styled, { css } from "styled-components";

import { useEffect } from "preact/hooks";

import { isTouchscreenDevice } from "../../../lib/isTouchscreenDevice";

interface Props {
    mouseMovementX(mouseMovementX: number): void;
}

const DragBarDiv = styled.div`
    ${!isTouchscreenDevice &&
    css`
        width: 1vw;
        height: 100%;
        background-color: var(--primary-header);

        &:hover {
            cursor: col-resize;
        }
    `}
`;

function DragBar(props: Props) {
    let mouseDown = false;
    function onMouseDown() {
        mouseDown = true;
    }
    function onMouseUp() {
        mouseDown = false;
    }

    useEffect(() => {
        function onMouseMove(ev: MouseEvent) {
            if (mouseDown) {
                props.mouseMovementX(ev.movementX);
            }
        }

        document.addEventListener("mousemove", onMouseMove);
        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        };
    }, [mouseDown, props]);

    return <DragBarDiv onMouseDown={onMouseDown} onMouseUp={onMouseUp} />;
}

export default DragBar;
