import { SETTING_MENU_TEXT } from "constants/index"
import styled from "styled-components"


export const SettingVersion = () => {
  return (
    <SettingVersionWrap>
        {SETTING_MENU_TEXT.SettingVersionText}
    </SettingVersionWrap>
  )
}


const SettingVersionWrap = styled.div`
    text-align: right;
    padding-top: 11px;
    font-size: 12px;
    padding-right: 25.5px;
`