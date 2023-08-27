import React from 'react'
import PropTypes from 'prop-types'
import { ContentPageTemplate } from '../../templates/content-page'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <ContentPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
