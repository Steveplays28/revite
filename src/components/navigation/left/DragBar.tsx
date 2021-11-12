import styled from "styled-components";

import { useEffect } from "preact/hooks";

interface Props {
    mouseMovementX(mouseMovementX: number): void;
}

const DragBarDiv = styled.div`
    width: 1vw;
    height: 100%;
    background-color: blue;

    &:hover {
        cursor: col-resize;
    }
`;

function DragBar(props: Props) {
    // useEffect(() => {
    //     function drag(ev: DragEvent) {
    //         props.mouseMovementX(ev.movementX);
    //     }

    //     document.addEventListener("drag", drag);
    //     return () => document.removeEventListener("drag", drag);
    // }, [props]);

    let mouseDown = false;
    function onMouseDown(ev: MouseEvent) {
        mouseDown = true;
    }
    function onMouseUp(ev: MouseEvent) {
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

    // props.width("50vw");

    // function onMouseMove(ev: MouseEvent) {
    //     if (mouseDown) {
    //         props.mouseMovementX(ev.movementX);
    //     }
    // }

    return <DragBarDiv onMouseDown={onMouseDown} onMouseUp={onMouseUp} />;
}

export default DragBar;
