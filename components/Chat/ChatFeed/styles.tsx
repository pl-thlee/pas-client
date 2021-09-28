import styled from "@emotion/styled";

export const MessagesContainer = styled.div`
    flex: 1;
    min-height: 100px;
    overflow: auto;
    border: none;
    border-radius: 7px 7px 0 0;
`;

export const MessagesList = styled.ol`
    list-style-type: none;
    padding: 0;

`;

export const MessagesItem = styled.li`
    width: 55%;
    margin: 8px;
    padding: 12px 8px;
    word-break: break-word;
    border-radius: 4px;
    color: white;
`;

export const MyMessage = styled.li`
    background-color: rgb(0, 132, 255);
    margin-left: auto;
`; 

export const ReceivedMessage = styled.li`
    background-color: #3f4042;
    margin-left: auto;
`; 
//----------------------------------------