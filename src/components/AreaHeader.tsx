import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface IProps {
  children?: ReactNode
  title?: string
  keywords?: string[]
  moreText?: string
  moreLink?: string
}

const AreaHeader = ({ title, keywords, moreLink = '/', moreText }: IProps) => {
  return (
    <HeaderV1Wrapper>
      <div className="left">
        <div className="title">热门推荐</div>
        <div className="keywords">
          {keywords?.map((item) => (
            <div className="item" key={item}>
              <span className="text">{item}</span>
              <span className="divider">|</span>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <Link className="more" to={moreLink}>
          {moreText}
        </Link>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderV1Wrapper>
  )
}
export default AreaHeader

export const HeaderV1Wrapper = styled.div`
  width: 690px;
  height: 33px;
  border-bottom: 2px solid #c10d0c;
  background-position: -225px -156px;
  overflow: hidden;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;

    .title {
      font-size: 20px;
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
      margin-right: 20px;
    }

    .keywords {
      display: flex;
      align-items: center;

      .item {
        position: relative;
        top: 2px;

        .link {
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }

        .divider {
          margin: 0 15px;
          color: #ccc;
        }

        &:last-child {
          .divider {
            display: none;
          }
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    .more {
      &:hover {
        text-decoration: underline;
        color: #333;
      }
    }

    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`
