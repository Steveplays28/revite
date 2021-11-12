import styled from "styled-components";

import { useEffect } from "preact/hooks";

interface Props {
    mouseMovementX(mouseMovementX: number): void;
}

const DragBarDiv = styled.div`
    width: 10vw;
    height: 100%;
    background-color: blue;

    &:hover {
        cursor: col-resize;
    }
`;

function DragBar(props: Props) {
    useEffect(() => {
        function drag(ev: DragEvent) {
            props.mouseMovementX(ev.movementX);
        }

        document.addEventListener("drag", drag);
        return () => document.removeEventListener("drag", drag);
    }, [props]);

    // props.width("50vw");

    return <DragBarDiv />;
}

export default DragBar;
