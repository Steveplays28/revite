import styled, { css } from "styled-components";

import { isTouchscreenDevice } from "../../lib/isTouchscreenDevice";

export default styled.div<{
    width?: string;
}>`
    ${(props) => css`
        min-width: ${props.width};
        width: ${props.width};
        height: 100%;
        overflow: auto;
        display: flex;
        user-select: none;
        flex-direction: row;
        align-items: stretch;
    `}
`;

export const GenericSidebarBase = styled.div<{
    mobilePadding?: boolean;
}>`
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    border-end-start-radius: 8px;
    background: var(--secondary-background);

    ${(props) =>
        props.mobilePadding &&
        isTouchscreenDevice &&
        css`
            padding-bottom: 50px;
        `}
`;

export const GenericSidebarList = styled.div`
    width: auto;
    padding: 6px;
    flex-grow: 1;
    overflow-y: scroll;

    > img {
        width: 100%;
    }
`;
