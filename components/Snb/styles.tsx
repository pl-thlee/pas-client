import styled from '@emotion/styled';

export const Side = styled.div`
    display: flex;
    border-right: 1px solid #e0e0e0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10%;
    background: #292F36;

    .item {
        font-size: 1.125rem;
        color: #F7FFF7;
        font-weight: 400;
        letter-spacing: 2px;        
    }
`;

export const Profile = styled.div`
    display: flex;
    text-align: center;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margine-bottom: 40;
`;

export const Menu = styled.div`
    margin-top: 30px;
    width: 200px;
    display: flex;
    flex-direction: column;
`;