import {
  CareerMainItemCategory,
  CareerMainItemImage,
  CareerMainItemParticipant,
  CareerMainItemTitle,
  CareerMainItemMeetingTime,
  CareerMainItemLikeButton
} from 'components/career/index'
import styled from 'styled-components'

export const CareerMainItemsWrap = () => {
  return (
    <>
      <ItemFlexRowWrapper>
        {/* 이미지 */}
        <CareerMainItemImage />

        <ItemFlexColumnWrapper>
          {/* 글 묶음 */}
          <CareerMainItemCategory />
          <CareerMainItemTitle />
          <CareerMainItemMeetingTime />
          <CareerMainItemParticipant />
        </ItemFlexColumnWrapper>
        {/* 하트 버튼 */}
        <CareerMainItemLikeButton />
      </ItemFlexRowWrapper>
    </>
  )
}

// 가로 래퍼
const ItemFlexRowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 132px;
`
// 세로 래퍼
const ItemFlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin-left: 10px;
  gap: 4px;
`