import styled, { css } from "styled-components";

import { isTouchscreenDevice } from "../../lib/isTouchscreenDevice";

export default styled.div<{
    width?: string;
}>`
    ${(props) => css`
        width: ${props.width};
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
    overflow: auto;
    align-items: stretch;

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
    overflow: auto;
    align-items: stretch;

    > img {
        width: 100%;
    }
`;
