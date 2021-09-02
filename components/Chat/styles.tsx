import styled from '@emotion/styled';

export const ChatRoomContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    margin: 16px;
`;

export const RoomName = styled.div`
    margin-top: 0;
`;

export const MessagesContainer = styled.div`
    flex: 1;
    min-height: 100px;
    overflow: auto;
    border: 1px solid black;
    border-radius: 7px 7px 0 0;
    border-color: #9a9a9a;
`;

export const MessagesList = styled.ol`
    list-style-type: none;
    padding: 0;
`;

export const NewMessageInputField = styled.div`
    height: 200px;
    max-height: 50%;
    font-size: 20px;
    padding: 8px 12px;
    resize: none;
    border-color: #9a9a9a;
`;

export const MessageItem = styled.div`
    width: 55%;
    margin: 8px;
    padding: 12px 8px;
    word-break: break-word;
    border-radius: 4px;
    color: white;
`;

export const MyMessage = styled.div`
    background-color: rgb(0, 132, 255);
    margin-left: auto;
`;

export const ReceivedMessage = styled.div`
    background-color: #3f4042;
    margin-right: auto;
`;

export const SendMessageButton = styled.div`
    font-size: 28px;
    font-weight: 600;
    color: white;
    background: #31a24c;
    padding: 24px 12px;
    border: none;
    border-color: #9a9a9a;
`;
