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
    background-color: rgb(0, 132, 255);
    margin-left: auto;
`;
//----------------------------------------

export const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.2;
`;

export const ChatArea = styled.textarea`
  width: 100%;
  height: auto;
  padding: 1rem;
  resize: none !important;
  overflow: hidden;
`;

export const ChatToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgb(248, 248, 248);
  height: 3rem;
  border-top: 1px solid rgb(221, 221, 221);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const SendButton = styled.button``;