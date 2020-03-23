// Example 
import * as React from "react";
import styled from "styled-components"

export const CustomTxt = styled.h1`
    color: #f56;
`

const TodaysDate = () => <CustomTxt>{`Today's date is ${Date()}`}</CustomTxt>;

export default TodaysDate;