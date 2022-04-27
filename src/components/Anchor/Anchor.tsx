import styled from "styled-components";

const Anchor = styled.a.attrs({
  className: `
    inline-block
    px-1
    -mx-1

    cursor-pointer

    text-indigo-600
    hover:bg-indigo-100

    focus:outline-none
    focus:bg-indigo-100
    focus:ring
    focus:ring-indigo-500
    
    dark:text-fuchsia-400
    dark:hover:text-fuchsia-300
    dark:hover:bg-fuchsia-800
    dark:focus:text-fuchsia-300
    dark:focus:bg-fuchsia-800
    dark:focus:ring-fuchsia-400
    `,
})``;

export default Anchor;