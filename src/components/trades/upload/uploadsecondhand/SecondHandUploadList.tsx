import React from 'react'
import { theme } from 'styles/index'
import { styled } from 'styled-components'
import { UploadTitle } from 'components/trades/upload/index'
import { Input } from 'components/index'
import { TRADES_SECONDHAND_TEXT } from 'constants/trades/index'
import { secondHandUtils } from 'utils/index'
import { secondhandcreateglobalstate } from 'recoil/index'
import { useRecoilState } from 'recoil'
import { useState } from 'react'
import { centralise } from 'styles/index'

export const SecondHandUploadList = () => {
  const [secondHandGlobalState, setSecondHandGlobalState] = useRecoilState(
    secondhandcreateglobalstate
  )
  const maxTitleLength = 25
  const [isPriceEnabled, setIsPriceEnabled] = useState(true)

  const toggleIsFree = () => {
    const updatedIsFree = !secondHandGlobalState.isFree

    const updatedPrice = updatedIsFree ? 0 : secondHandGlobalState.price

    setSecondHandGlobalState(prevGlobalState => ({
      ...prevGlobalState,
      isFree: updatedIsFree,
      price: updatedPrice
    }))

    setIsPriceEnabled(!updatedIsFree)
  }

  console.log(secondHandGlobalState)
  return (
    <Wrapper>
      {TRADES_SECONDHAND_TEXT.map((item, index) => (
        <ComponentWappper key={item.title}>
          <TitleWrapper>
            <UploadTitle Text={item.title}> </UploadTitle>
            {item.title === '제품 이미지를 등록 해주세요.' && (
              <TitleDescription>(최대 5장)</TitleDescription>
            )}
            {index !== 3 &&
              index !== 4 &&
              index !== 6 &&
              index !== 7 &&
              index !== 8 && <EssentialIcon>*</EssentialIcon>}
          </TitleWrapper>
          <InputWrapper>
            {item.component === Input ? (
              <InputFocus>
                <Input
                  $inputWidth={item.props?.item ? '310px' : '335px'}
                  $inputHeight={'48px'}
                  $borderColor={theme.greyScale.grey3}
                  $borderRadius="8px"
                  $paddingLeft="12px"
                  ph={item.props?.ph}
                  onChange={e =>
                    secondHandUtils(
                      e.target.value,
                      item.field,
                      setSecondHandGlobalState,
                      maxTitleLength
                    )
                  }
                  disabled={item.field === 'price' ? !isPriceEnabled : false}
                />
              </InputFocus>
            ) : (
              React.createElement(item.component)
            )}
            {item.props?.item && <ItemText>{item.props?.item}</ItemText>}
            {item.title === '금액을 알려주세요.' && (
              <FreeSharingCheckbox>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    checked={secondHandGlobalState.isFree}
                    onChange={toggleIsFree}
                  />
                </CheckboxLabel>
                <FreeSharingText>무료나눔</FreeSharingText>
              </FreeSharingCheckbox>
            )}
          </InputWrapper>
        </ComponentWappper>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 12px;
  overflow-y: scroll;
`

const ComponentWappper = styled.div`
  margin-bottom: 32px;
`

const ItemText = styled.div`
  display: flex;
  align-items: center;
  height: 19px;
  width: 14px;
  font-size: ${theme.customSize.large};
`

const InputFocus = styled.div`
  :focus {
    border: 2px solid ${theme.main.blue0};
  }
`

const TitleWrapper = styled.div`
  font-size: ${theme.customSize.xxlarge};
  color: ${theme.greyScale.grey6};
  white-space: pre-wrap;
  display: flex;
`

const InputWrapper = styled.div`
  width: 335px;
  color: ${theme.greyScale.grey4};
  font-size: ${theme.customSize.large};
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-wrap: wrap;
`
const TitleDescription = styled.div`
  font-size: ${theme.customSize.large};
  color: ${theme.greyScale.grey7};
  display: flex;
  padding-top: 2px;
`
const EssentialIcon = styled.div`
  color: ${theme.subColor.red0};
  display: flex;
  align-items: flex-end;
  margin-bottom: 2px;
`

const CheckboxLabel = styled.label``

const Checkbox = styled.input`
  margin: 10px 0px;
  width: 20px;
  height: 20px;
  border-radius: 4px;
`

const FreeSharingCheckbox = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`

const FreeSharingText = styled.div`
  flex-wrap: wrap;
  ${centralise}
  margin-left: 5px;
  color: ${theme.greyScale.grey9};
`
