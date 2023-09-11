import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --c-primary: #FD377E;
    --c-primary-2: #E34981;
    --c-secondary: #03B898;
    --c-white: #FFFFFF;

    --c-grey-4: #212529;
    --c-grey-3: #868E96;
    --c-grey-2: #E9ECEF;
    --c-grey-1: #F8F9FA;

    --f-title-1: 2.375rem;/* 38px */
    --f-title-2: 1.375rem;/* 22px */
    --f-title-3: 1rem;    /* 16px */
    --f-title-4: 0.75rem; /* 12px */
    --f-headline: 1rem;   /* 16px */
    --f-body: 0.75rem;    /* 12px */
}`;
