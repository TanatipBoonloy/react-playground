import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import withColor from 'hocs/withColor'
import withIntl from 'hocs/withIntl'
import Div from 'layout/Div'
import styled from 'styled-components'
import { getColor, getFont } from 'helpers/styles'
import Text from 'atoms/Text'

const StyledDiv = styled.div`
  font-size: ${getFont('h1')}px;
  color: ${getColor('primary')};
`

class HomePage extends PureComponent {
  render() {
    const {
      history,
      color,
      setColor,
      language,
      locale,
      availableLocale,
      getMessage,
      setLocale,
    } = this.props
    return (
      <div className="App">
        <div className="App-header">
          <h2>{getMessage((messages) => messages.homePage.label.title)}</h2>
        </div>
        <p>
          {getMessage((messages) => messages.homePage.label.description)}
        </p>
        <Link to="/about">{getMessage((messages) => messages.homePage.link.aboutPageLink)}</Link><br />
        <button
          onClick={() => {
            history.push('/about')
          }
          }
        >
          {getMessage((messages) => messages.homePage.button.aboutPageButton)}
        </button>
        <br />
        <br />
        <Link to="/todos">{getMessage((messages) => messages.homePage.link.todoPageLink)}</Link><br />
        <button
          onClick={() => {
            history.push('/todos')
          }
          }
        >
          {getMessage((messages) => messages.homePage.button.todoPageButton)}
        </button>
        <br />
        <br />
        <Div>
          <span style={{ color }}>{getMessage((messages) => messages.homePage.label.providerPattern)}</span><br />
          <button onClick={() => setColor('green')}>
            {getMessage((messages) => messages.homePage.button.changeColorButton)}
          </button>
        </Div>
        <br />
        <br />
        <Div>{getMessage((messages) => messages.homePage.label.selectedLanguage)}: {language[locale]}</Div>
        <Div>{getMessage((messages) => messages.homePage.label.changeLanguage)}</Div><br />
        <Div>
          {
            availableLocale.map(
              (eachLocale) => (
                <button key={eachLocale} onClick={() => setLocale(eachLocale)} style={{ marginRight: 10 }}>
                  {language[eachLocale]}
                </button>
              )
            )
          }
        </Div>
        <br />
        <br />
        <StyledDiv>
          Time To Test Styled-Components
        </StyledDiv>
        <br />
        <Text as="p" color="primary">
          Test Text with Color
        </Text>
        <br />
        <Text as="a">
          Text Link
        </Text>
      </div>
    )
  }
}
HomePage.propTypes = {
  history: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
  language: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  availableLocale: PropTypes.array.isRequired,
  getMessage: PropTypes.func.isRequired,
  setLocale: PropTypes.func.isRequired,
}

export default withIntl(withColor(withRouter(HomePage)))
