import styled from "styled-components";
import tw from "twin.macro";

const AppStyles = styled.div.attrs({
    className: "w-full h-screen flex flex-col items-center"
})`
  & {
    h1 {
      ${tw`font-sans text-6xl font-hairline text-6xl text-teal-500`}
    }
    p {
      ${tw`text-gray-700 text-lg`}
    }
    h2 {
      ${tw`text-2xl font-hairline mt-5 text-teal-500`}
    }
    ul {
      ${tw`inline-flex`}
    }
    li {
      ${tw`mr-5`}
    }
  }
`;
export default AppStyles;