import styled from 'styled-components';

const Blurb = styled.div`
    margin  : 0 auto 100px auto;
     > h4 {
        font-size       : 1.1em;
        font-weight     : 400;
        line-height     : 1.5em;
        text-align      : left; 

        color           : ${props => props.theme.secColor(0.75)};

        > a {
            cursor          : pointer;
            color           : ${props => props.theme.primColor(1)};
            text-decoration : underline !important;
        }
    }
`;

export default Blurb;